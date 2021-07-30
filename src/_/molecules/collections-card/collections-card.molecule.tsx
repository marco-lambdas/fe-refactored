import React, { useState } from 'react';
import { useMutation } from 'react-query';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Modal,
  Snackbar,
  SnackbarCloseReason,
} from '@material-ui/core';
import { navigate } from 'gatsby';
import { useStateMachine } from 'little-state-machine';
import CollectionsCardWrapper from './collections-card-wrapper.molecule';
import CreateOrEditProductForm from '../../organisms/create-or-edit-product-form/create-or-edit-product-form.organism';
import { ExecGraphQL } from '../../../../graphql/client';
import { Alert } from '@material-ui/lab';
import { DELETE_PRODUCT } from '../../../graphql/product/delete-product-mtn.gql';
import { CARD_SIZE_DIMENSIONS } from '../../contants';

interface Props {
  product?: any;
}

const CollectionsCard: React.FC<Props> = ({ product }) => {
  const { state } = useStateMachine();
  const { user } = state;
  const deleteProduct = useMutation((variables: any) => ExecGraphQL(DELETE_PRODUCT, variables));

  const [open, setOpen] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const handleCloseSnackBar = (event: React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleOnCardClick = () => {
    navigate(`/card-collection/${product.id}`);
  };

  const handleUpdateProduct = () => {
    navigate(`/update-card/${product.id}`);
  };

  const handleCloseModal = (message: string) => {
    setOpenSnackBar(true);
    setSnackBarMessage(message);
    setOpen(false);
  };

  const handleProductDelete = async () => {
    await deleteProduct.mutateAsync({ id: product.id });
    setOpenSnackBar(true);
    setSnackBarMessage('Product deleted successfully. Please restart the server to reflect the changes.');
  };

  const renderSnackBar = () => {
    return (
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity='success'>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    );
  };

  const renderSize = () => {
    if (product.size) {
      return (
        <Typography gutterBottom variant='body2'>
          <span className='collection-size'>{`${product?.size?.toUpperCase()} - ${
            CARD_SIZE_DIMENSIONS[product?.size as 'small' | 'medium' | 'large']
          }`}</span>
        </Typography>
      );
    }
  };

  const smallStyle = { height: 'auto', width: '80%' };
  const smallContentStyle = { marginTop: '2.5rem' };

  return (
    <CollectionsCardWrapper>
      {renderSnackBar()}
      <Card className='collection-card'>
        <CardActionArea className='collection-card-action-area' onClick={handleOnCardClick}>
          <CardMedia
            component='img'
            alt='Card Template Image'
            image={product.image}
            title='Card Template Image'
            className='collection-card-image'
            style={product?.size === 'small' ? smallStyle : null}
          />
          <CardContent className='collection-card-content' style={product?.size === 'small' ? smallContentStyle : null}>
            <Typography gutterBottom variant='h6' className='collection-card-name'>
              <span className='collection-title'>{product.name}</span>
            </Typography>
            <Typography gutterBottom variant='subtitle1'>
              <span className='collection-price'>{`$${product.price} AUD`}</span>
            </Typography>
            {renderSize()}
          </CardContent>
        </CardActionArea>
        {user.role === 'admin' && (
          <CardActions>
            <Button size='small' color='primary' fullWidth={true} onClick={handleUpdateProduct}>
              Edit Product
            </Button>
            <Button size='small' color='primary' fullWidth={true} onClick={handleProductDelete}>
              Delete Product
            </Button>
          </CardActions>
        )}
      </Card>
      {user.role === 'admin' && (
        <Modal open={open} onClose={handleCloseModal}>
          <CreateOrEditProductForm product={product} handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </CollectionsCardWrapper>
  );
};

export default CollectionsCard;
