import {
  Grid,
  Button,
  Typography,
  Container,
  TextField,
  Backdrop,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import { ExecGraphQL } from '../../../../graphql/client';
import CheckoutFormWrapper from './checkout-form-wrapper.organism';
import { get } from 'lodash';
import { navigate } from 'gatsby';
import TextFieldWithValidation from '../../atoms/text-field-with-validation.atom';
import CountrySelect from '../../atoms/country-select.atom';
import { useStateMachine } from 'little-state-machine';
import updateUser from '../../../utils/update-user.util';
import { CREATE_TRANSACTION } from '../../../graphql/transaction/create-transaction.mtn.gql';
import { CREATE_PAYMENT_INTENT } from '../../../graphql/stripe/create-payment-intent.gql';
import { GET_COUPON_CODE } from '../../../graphql/coupon/get-coupon-query.gql';
import ErrorMessage from '../../atoms/error-message.atom';
import { Alert } from '@material-ui/lab';

const options = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

interface Props {
  orderData: any;
  totalAmount: number;
}

const TAX_RATE = 0.1;

const CheckoutForm: React.FC<Props> = ({ orderData, totalAmount }) => {
  const { register, handleSubmit, errors, control } = useForm();
  // @ts-ignore
  const { state, actions } = useStateMachine({ updateUser });
  const { user } = state;
  const [processing, setProcessing] = useState(false);
  const [stripeErrorMsg, setStripeErrorMsg] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [checkoutMsg, setCheckoutMsg] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponId, setCouponId] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const stripe = useStripe();
  const elements = useElements();

  const paymentIntent = useMutation((variables: any) => ExecGraphQL(CREATE_PAYMENT_INTENT, variables));

  const createTransaction = useMutation((variables: any) => ExecGraphQL(CREATE_TRANSACTION, variables));

  const { data: couponData, refetch: refetchCoupon } = useQuery(
    'GET_COUPON_CODE',
    async () => ExecGraphQL(GET_COUPON_CODE, { code: couponCode }),
    {
      enabled: false,
    },
  );

  useEffect(() => {
    if (couponData && couponData.getCoupon) {
      setDiscountAmount(totalAmount * (couponData.getCoupon.percentage / 100));
      setCouponId(couponData.getCoupon.id);
    }
  }, [couponData]);

  const onSubmit = async (data: any) => {
    setProcessing(true);
    if (!stripe || !elements?.getElement(CardElement)) {
      setCheckoutMsg(`Something went wrong. We couldn't process the transaction.`);
      setOpenSnackbar(true);
      setProcessing(false);
      return null;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)!,
    });

    if (error) {
      setStripeErrorMsg(error.message || 'Please check your card information.');
      setProcessing(false);
      return null;
    }

    const paymentSecret = await paymentIntent.mutateAsync({
      orderId: user.userCart,
      amount: +(totalAmount - discountAmount).toFixed(2),
      couponCode: couponCode ? couponCode : null,
    });

    try {
      const payload = await stripe!.confirmCardPayment(paymentSecret?.createPaymentIntent, {
        payment_method: {
          card: elements!.getElement(CardElement)!,
          billing_details: {
            name: `${data.firstName} ${data.lastName}`,
          },
        },
      });

      if (payload!.paymentIntent!.status === 'succeeded') {
        const getOrder = get(orderData, ['getOrder']);
        if (getOrder) {
          const result = await createTransaction.mutateAsync({
            input: { orderId: getOrder.id, ...data, couponId },
          });

          if (result?.createTransaction?.code) {
            setCheckoutSuccess(true);
            setCheckoutMsg(`Checkout successful. Redirecting in 2 seconds.`);
            setOpenSnackbar(true);
            setTimeout(() => {
              actions.updateUser({
                // @ts-ignore
                userCart: null,
              });
              navigate(`/transaction/${result?.createTransaction?.id}`);
            }, 2000);
            return null;
          }
        }
      } else {
        setCheckoutMsg(`Something went wrong. We couldn't process the transaction. Please refresh the page.`);
        setOpenSnackbar(true);
      }
    } catch (err) {
      setCheckoutMsg(`Something went wrong. We couldn't process the transaction.`);
      setOpenSnackbar(true);
    }
    setProcessing(false);
  };

  const onApplyCouponCode = async () => {
    setProcessing(true);
    await refetchCoupon();
    setProcessing(false);
  };

  const handleCouponCodeChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  const renderOrderSummary = () => {
    const subTotal = (
      <Grid container className='order-summary-item'>
        <Grid item xs={5} md={3}>
          Subtotal:
        </Grid>
        <Grid item xs={5} md={3}>
          ${(totalAmount * (1 - TAX_RATE)).toFixed(2)}
        </Grid>
      </Grid>
    );

    const tax = (
      <Grid container className='order-summary-item'>
        <Grid item xs={5} md={3}>
          Total Tax:
        </Grid>
        <Grid item xs={5} md={3}>
          ${(totalAmount * TAX_RATE).toFixed(2)}
        </Grid>
      </Grid>
    );

    const discount = (
      <Grid container className='order-summary-item'>
        <Grid item xs={5} md={3}>
          Discount:
        </Grid>
        <Grid item xs={5} md={3}>
          -${discountAmount.toFixed(2)}
        </Grid>
      </Grid>
    );

    const total = (
      <Grid container className='order-summary-item'>
        <Grid item xs={5} md={3}>
          Total:
        </Grid>
        <Grid item xs={5} md={3} className='total'>
          ${(totalAmount - discountAmount).toFixed(2)}
        </Grid>
      </Grid>
    );

    return (
      <>
        {subTotal}
        {tax}
        {discount}
        <Grid container className='coupon'>
          <Grid item xs={6} md={4}>
            <TextField
              label='Coupon Code'
              variant='outlined'
              size='small'
              value={couponCode}
              onChange={handleCouponCodeChange}
            />
          </Grid>
          <Grid item xs={5} md={3} className='coupon-button-container'>
            <Button
              type='button'
              fullWidth
              variant='contained'
              className='coupon-button'
              disabled={processing}
              onClick={onApplyCouponCode}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
        {total}
      </>
    );
  };

  const handleCloseSnackBar = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <CheckoutFormWrapper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        {/* @ts-ignore */}
        <Alert onClose={handleCloseSnackBar} severity={checkoutSuccess ? 'success' : 'error'}>
          {checkoutMsg}
        </Alert>
      </Snackbar>
      <Backdrop open={processing} className='backdrop'>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Container maxWidth='md'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom>
                Contact Information
              </Typography>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'email'}
                type='email'
                label={'Email Address*'}
                options={{ required: 'Please enter a valid email address.' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'phoneNumber'}
                label={'Phone Number*'}
                options={{ required: 'Please enter a phone number' }}
              />
            </Grid>
            <Grid item xs={12} className='shipping-header-container'>
              <Typography variant='h6' gutterBottom>
                Shipping Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'firstName'}
                label={'First Name*'}
                options={{ required: 'Please enter a first name.' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'lastName'}
                label={'Last Name*'}
                options={{ required: 'Please enter a last name.' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'address'}
                label={'Address*'}
                options={{ required: 'Please enter an address.' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'additionalAddress'}
                label={'Apartment/Building No.'}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'postalCode'}
                label={'Postal Code*'}
                options={{ required: 'Enter your postal code.' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldWithValidation
                register={register}
                errors={errors}
                name={'city'}
                label={'City*'}
                options={{ required: 'Enter your city.' }}
              />
            </Grid>
            <Grid item xs={12}>
              <CountrySelect control={control} errors={errors} />
            </Grid>

            <Grid item xs={12} className='shipping-header-container'>
              <Typography variant='h6' gutterBottom>
                Card Details
              </Typography>
            </Grid>
            <Grid item xs={12} md={8} xl={6}>
              <div className='sr-combo-inputs-row'>
                <CardElement className='sr-input sr-card-element' options={options} />
              </div>
              <ErrorMessage message={stripeErrorMsg} showError={!!stripeErrorMsg} />
            </Grid>
            <Grid item xs={10} md={7}>
              <div className='Order Summary'>
                <Typography variant='h6' gutterBottom>
                  Order Summary
                </Typography>
                <Grid container>{renderOrderSummary()}</Grid>
              </div>
            </Grid>
          </Grid>

          <Button type='submit' fullWidth variant='contained' color='primary' className='submit' disabled={processing}>
            Checkout
          </Button>
        </form>
      </Container>
    </CheckoutFormWrapper>
  );
};

export default CheckoutForm;
