import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { useQuery } from 'react-query';
import Step1Wrapper from './wrappers/step-1-wrapper.molecule';
// @ts-ignore
import updateCardDetails from '../../../utils/update-card-details.util';
import UploadButton from '../../atoms/upload-button.atom';
import ReactCamera from '../../atoms/react-camera.atom';
import ImageEditor from '../../atoms/image-editor.atom';
import ErrorMessage from '../../atoms/error-message.atom';
import { ExecGraphQL } from '../../../../graphql/client';
import { GET_PREVIEW_IMAGE } from '../../../graphql/product_detail/upload-preview-image-qry.gql';

interface Props {
  step: number;
  prevStep?: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  statistics: string;
}
const Step1: React.FC<Props> = ({ step, prevStep, setStep, statistics }) => {
  const { actions, state } = useStateMachine({ updateCardDetails });

  const { cardDetails } = state;
  const { previewImage: globalStatePreviewImage, image: globalStatePlayerImage } = cardDetails;

  const [initialize, setInitialize] = useState(true);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      image: null,
    },
  });
  // @ts-ignore

  const { data: previewImageData, refetch } = useQuery(
    'GET_PREVIEW_IMAGE',
    async () =>
      ExecGraphQL(GET_PREVIEW_IMAGE, {
        input: { playerImage: state.cardDetails.image },
      }),
    { enabled: false },
  );

  useEffect(() => {
    setInitialize(false);
    if (cardDetails.loader) {
      actions.updateCardDetails({
        loader: false,
      });
    }

    if (statistics) {
      const stats = JSON.parse(statistics);
      const fieldStore = {
        stat1: stats?.statistic1,
        stat2: stats?.statistic2,
        stat3: stats?.statistic3,
        stat4: stats?.statistic4,
        stat5: stats?.statistic5,
        stat6: stats?.statistic6,
      };
      actions.updateCardDetails({
        ...fieldStore,
      });
    }
  }, []);

  useEffect(() => {
    if (!initialize) {
      actions.updateCardDetails({
        loader: true,
      });
      refetch();
    }
  }, [state.cardDetails.image]);

  useEffect(() => {
    if (previewImageData) {
      actions.updateCardDetails({
        loader: false,
        previewImage: previewImageData.uploadPreviewImage,
      });
    }
  }, [previewImageData]);

  const [src, setImage] = useState<any>(null);
  const [showError, setShowError] = useState(false);

  // Renders image to Doka Editor
  const handleImageChange = (e: any) => {
    const [image] = e.target.files;
    setImage(image);
  };

  const formSubmit = async (data: any) => {
    // Show error and remember data
    if (
      (!src || src === '') &&
      (!globalStatePlayerImage || !globalStatePreviewImage || globalStatePreviewImage === '')
    ) {
      setShowError(true);
      return;
    }

    if (!data.image) {
      return null;
    }

    if (prevStep && prevStep > step) {
      setStep(prevStep);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <React.Fragment>
      {src && <ImageEditor src={src} setImage={setImage} name='image' />}
      <Step1Wrapper>
        <Container>
          <form onSubmit={handleSubmit(formSubmit)}>
            <Grid container className='upload-image-container'>
              <Grid item xs={12} className='upload-image-header'>
                <Typography variant='h6' gutterBottom className='upload-title'>
                  Upload your image
                </Typography>
              </Grid>
              <Grid container className='upload-image-action' spacing={2}>
                <Grid item xs={5}>
                  <UploadButton register={register} name='image' handleImageChange={handleImageChange} />
                  <ErrorMessage message={'Please upload an image.'} showError={showError} />
                </Grid>
                <Grid item xs={5}>
                  <ReactCamera setImage={setImage} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify='center' className='button-main-container'>
              <Grid item xs={8} className='button-container'>
                <Button color='primary' variant='contained' type='submit' className='next-button'>
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Step1Wrapper>
    </React.Fragment>
  );
};

export default Step1;
