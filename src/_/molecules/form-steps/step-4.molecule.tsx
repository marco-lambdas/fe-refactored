import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { isEmpty, isEqual } from 'lodash';
import Step4Wrapper from './wrappers/step-4-wrapper.molecule';
import { Button, Grid, Typography } from '@material-ui/core';
import StatMolecule from '../stat.molecule';
import updateCardDetails from '../../../utils/update-card-details.util';
import { useStateMachine } from 'little-state-machine';
interface Props {
  step: number;
  prevStep?: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  statistics: string;
}

const Step4: React.FC<Props> = ({ step, prevStep, setStep, statistics }) => {
  const { actions, state } = useStateMachine({ updateCardDetails });
  const { cardDetails } = state;
  const {
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
  } = cardDetails;
  const stats = JSON.parse(statistics);
  const fieldStore = {
    stat1: stats?.statistic1 || stat1,
    stat1Value,
    stat2: stats?.statistic2 || stat2,
    stat2Value,
    stat3: stats?.statistic3 || stat3,
    stat3Value,
    stat4: stats?.statistic4 || stat4,
    stat4Value,
    stat5: stats?.statistic5 || stat5,
    stat5Value,
    stat6: stats?.statistic6 || stat6,
    stat6Value,
  };
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: fieldStore,
  });

  const watchAllFields = watch();

  useEffect(() => {
    let timerId: number | undefined;
    if (!isEmpty(watchAllFields) && !isEqual(fieldStore, watchAllFields)) {
      timerId = (setTimeout(() => {
        actions.updateCardDetails(watchAllFields);
      }, 350) as unknown) as number;
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [watchAllFields]);

  const handleBackClick = () => {
    setStep(step - 1);
  };

  const formSubmit = (data: any) => {
    actions.updateCardDetails(data);

    if (prevStep && prevStep > step) {
      setStep(prevStep);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <Step4Wrapper>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} className='header-container'>
            <Typography variant='h6' gutterBottom>
              Enter your stats
            </Typography>
          </Grid>
          <StatMolecule name='stat1' errors={errors} register={register} />
          <StatMolecule name='stat4' errors={errors} register={register} />
          <StatMolecule name='stat2' errors={errors} register={register} />
          <StatMolecule name='stat5' errors={errors} register={register} />
          <StatMolecule name='stat3' errors={errors} register={register} />
          <StatMolecule name='stat6' errors={errors} register={register} />
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
    </Step4Wrapper>
  );
};

export default Step4;
