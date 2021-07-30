import React, { useState, useEffect } from 'react';
import { clone, get } from 'lodash';
import { useMutation } from 'react-query';
import { useStateMachine } from 'little-state-machine';
import updateCardDetails from '../../../utils/update-card-details.util';
import updateUser from '../../../utils/update-user.util';
import {
  Container,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItemText,
  Snackbar,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import ReviewWrapper from './wrappers/review-wrapper.molecule';
import { ExecGraphQL } from '../../../../graphql/client';
import { Alert } from '@material-ui/lab';
import { navigate } from 'gatsby';
import { CREATE_ORDER } from '../../../graphql/order/create-order-mtn.gql';

interface Props {
  productId: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Review: React.FC<Props> = ({ productId, step, setStep }) => {
  // @ts-ignore
  const { state, actions } = useStateMachine({ updateCardDetails, updateUser });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [addToCartMsg, setAddToCartMsg] = useState('');
  const [addingToCart, setAddingToCart] = useState(false);
  const createOrder = useMutation((variables: any) => ExecGraphQL(CREATE_ORDER, variables));
  const { cardDetails, user } = state;
  const cardDetailsCopy = clone(cardDetails);
  const {
    image,
    clubImage,
    playerName,
    position,
    rating,
    country,
    stat1,
    stat1Value,
    stat2,
    stat2Value,
    stat3,
    stat3Value,
    stat4,
    stat4Value,
    stat5,
    stat5Value,
    stat6,
    stat6Value,
  } = cardDetailsCopy;
  cardDetailsCopy.stat1Value = parseInt(stat1Value as string, 10);
  cardDetailsCopy.stat2Value = parseInt(stat2Value as string, 10);
  cardDetailsCopy.stat3Value = parseInt(stat3Value as string, 10);
  cardDetailsCopy.stat4Value = parseInt(stat4Value as string, 10);
  cardDetailsCopy.stat5Value = parseInt(stat5Value as string, 10);
  cardDetailsCopy.stat6Value = parseInt(stat6Value as string, 10);
  cardDetailsCopy.rating = parseInt(rating as string, 10);

  // @ts-ignore
  delete cardDetailsCopy.image;
  // @ts-ignore
  delete cardDetailsCopy.club;
  // @ts-ignore

  useEffect(() => {
    actions.updateCardDetails({
      loader: false,
    });
  }, []);

  const handleSubmit = async (e: any) => {
    setAddingToCart(true);
    try {
      const productDetailInput = {
        ...cardDetailsCopy,
        playerImage: image,
        productId: parseInt(productId, 10),
      } as any;

      delete productDetailInput.loader;
      delete productDetailInput.size;

      const orderResult = await createOrder.mutateAsync({
        id: user.userCart,
        productDetailInput,
      });
      actions.updateUser({
        // @ts-ignore
        userCart: get(orderResult, ['createOrUpdateOrderItem', 'id']),
        isCartShown: true,
      });
      actions.updateCardDetails({
        image: null,
        previewImage: '',
        playerName: 'Your Name',
        position: 'CAM',
        rating: '99',
        country: '',
        countryImage: '',
        club: '',
        clubImage: null,
        stat1: 'PAC',
        stat1Value: '99',
        stat2: 'SHO',
        stat2Value: '99',
        stat3: 'PAS',
        stat3Value: '99',
        stat4: 'DRI',
        stat4Value: '99',
        stat5: 'DEF',
        stat5Value: '99',
        stat6: 'PHY',
        stat6Value: '99',
      });
      setAddToCartMsg('Successfully added the item to cart!');
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate(`/collections`);
      }, 2000);
      return null;
    } catch (err) {
      setOpenSnackbar(true);
      setAddToCartMsg(`Something went wrong. Please refresh your page.`);
    }
    setAddingToCart(false);
  };

  const handleCloseSnackBar = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <ReviewWrapper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        {/* @ts-ignore */}
        <Alert onClose={handleCloseSnackBar} severity={'success'}>
          {addToCartMsg}
        </Alert>
      </Snackbar>
      <Backdrop open={addingToCart} className='backdrop'>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Container maxWidth='sm'>
        <h3 className='review-header'>Review</h3>
        <RenderAccordion
          summary='Player Image'
          details={[{ 'Player Image': image && image!.name }]}
          step={1}
          setStep={setStep}
        />
        <RenderAccordion
          summary='Player Details'
          details={[{ Name: playerName }, { Position: position }, { Country: country }, { Rating: rating }]}
          step={2}
          setStep={setStep}
        />
        <RenderAccordion
          summary='Club Image'
          details={[{ 'Club Image': clubImage && clubImage!.name }]}
          step={3}
          setStep={setStep}
        />
        <RenderAccordion
          summary='Stats'
          details={[
            { [`${stat1}`]: stat1Value },
            { [`${stat2}`]: stat2Value },
            { [`${stat3}`]: stat3Value },
            { [`${stat4}`]: stat4Value },
            { [`${stat5}`]: stat5Value },
            { [`${stat6}`]: stat6Value },
          ]}
          step={4}
          setStep={setStep}
        />

        <div className='add-to-cart-container'>
          <Button className='add-to-cart' variant='contained' style={{ marginTop: '1.5rem' }} onClick={handleSubmit}>
            Add to Cart <AddShoppingCartIcon />
          </Button>
        </div>
      </Container>
    </ReviewWrapper>
  );
};

export default Review;

interface RenderAccordionProps {
  summary: string;
  details: any;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const RenderAccordion: React.FC<RenderAccordionProps> = ({ summary, details, step, setStep }) => {
  const handleEditClick = () => {
    setStep(step);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>{summary}</AccordionSummary>
      <AccordionDetails>
        <div>
          {details.map((data: any, index: any) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];

            return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>;
          })}
          <Button variant='outlined' color='primary' onClick={handleEditClick}>
            Edit <EditIcon />
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
