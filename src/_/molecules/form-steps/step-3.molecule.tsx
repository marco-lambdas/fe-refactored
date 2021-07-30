import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
// @ts-ignore
import updateCardDetails from '../../../utils/update-card-details.util';
import ErrorMessage from '../../atoms/error-message.atom';
import Step3Wrapper from './wrappers/step-3-wrapper.molecule';
import UploadButton from '../../atoms/upload-button.atom';
interface Props {
  step: number;
  prevStep?: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step3: React.FC<Props> = ({ step, prevStep, setStep }) => {
  const { register, handleSubmit, errors, watch } = useForm();

  // @ts-ignore
  const { actions, state } = useStateMachine({ updateCardDetails });
  const { cardDetails } = state;
  const { clubImage: globalStateClubImage } = cardDetails;
  const [showError, setShowError] = useState(false);

  const watchClubImage = watch('clubImage', false);
  useEffect(() => {
    let timerId: number;
    if (watchClubImage) {
      timerId = (setTimeout(() => {
        actions.updateCardDetails({ clubImage: watchClubImage[0] });
      }, 400) as unknown) as number;
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [watchClubImage]);

  const handleBackClick = () => {
    setStep(step - 1);
  };

  const formSubmit = (data: any) => {
    // Show error and remember data
    const clubImagesLength = data.clubImage.length;
    if ((!data.clubImage || clubImagesLength === 0) && !globalStateClubImage) {
      setShowError(true);
      return null;
    } else if (data.clubImage && clubImagesLength > 0) {
      const clubImage = data.clubImage[0];
      actions.updateCardDetails({ clubImage });
    }

    if (prevStep && prevStep > step) {
      setStep(prevStep);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <Step3Wrapper>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Grid container>
          <Grid item xs={12} className='upload-image-header'>
            <Typography variant='h6' gutterBottom className='upload-title'>
              Upload your club badge
            </Typography>
          </Grid>
          <Grid item xs={12} className='upload-image-action'>
            <UploadButton register={register} name='clubImage' />
            <ErrorMessage message={'Please upload an image.'} showError={showError} />
          </Grid>
        </Grid>

        <Grid container justify='center' className='button-main-container'>
          <Grid item xs={8} className='button-container'>
            <Button color='primary' variant='contained' onClick={handleBackClick} className='back-button'>
              Back
            </Button>
            <Button color='primary' variant='contained' type='submit' className='next-button'>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Step3Wrapper>
  );
};

export default Step3;
