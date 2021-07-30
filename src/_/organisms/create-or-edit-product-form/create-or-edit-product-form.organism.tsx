import { ErrorMessage } from '@hookform/error-message';
import { Typography, Grid, Button } from '@material-ui/core';
import React from 'react';
import { get } from 'lodash';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import TextFieldWithValidation from '../../atoms/text-field-with-validation.atom';
import UploadButton from '../../atoms/upload-button.atom';
import CreateOrEditProductFormWrapper from './create-or-edit-product-form-wrapper.organism';
import { ExecGraphQL } from '../../../../graphql/client';
import { UPDATE_PRODUCT } from '../../../graphql/product/update-product-mtn.gql';
import { CREATE_PRODUCT } from '../../../graphql/product/create-product-mtn.gql';

interface Props {
  product?: any;
  handleCloseModal?: any;
}

const CreateOrEditProductForm: React.FC<Props> = ({ product, handleCloseModal }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      // @ts-ignore
      name: get(product, ['name']),
      // @ts-ignore
      price: get(product, ['price']),
    },
  });
  const updateProduct = useMutation((variables: any) => ExecGraphQL(UPDATE_PRODUCT, variables), {
    onSuccess: () => {
      handleCloseModal('Product is updated successfully. Please restart the server to reflect the changes.');
    },
  });

  const createProduct = useMutation((variables: any) => ExecGraphQL(CREATE_PRODUCT, variables), {
    onSuccess: () => {
      handleCloseModal('Product is created successfully. Please restart the server to reflect the changes.');
    },
  });

  const onSubmit = async (data: any) => {
    data.price = parseInt(data.price, 10);
    data.image = data.image[0];
    if (product) {
      await updateProduct.mutateAsync({
        input: {
          id: product.id,
          ...data,
        },
      });
    } else {
      await createProduct.mutateAsync({
        input: {
          ...data,
        },
      });
    }
  };

  return (
    <CreateOrEditProductFormWrapper>
      <div className='paper'>
        <Typography component='h1' variant='h5'>
          {product ? `Edit Product: ${product.name}` : 'Create Product'}
        </Typography>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'name'}
                label={'Product Name'}
                options={{ required: 'Please enter a product name.' }}
              />
            </Grid>

            <Grid item xs={7}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'price'}
                type='number'
                label={'Product Price'}
                options={{ required: 'Please enter a price.' }}
              />
            </Grid>

            <Grid item xs={6}>
              <UploadButton register={register} name='image' label='  Product Image' />
              <ErrorMessage errors={errors} name='image' as='p' className='error-message' />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className='submit'>
            {product ? `Edit Product` : 'Create Product'}
          </Button>
        </form>
      </div>
    </CreateOrEditProductFormWrapper>
  );
};

export default CreateOrEditProductForm;
