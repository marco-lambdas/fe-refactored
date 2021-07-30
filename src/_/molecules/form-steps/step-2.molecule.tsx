import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { isEmpty, isEqual } from 'lodash';
import Step2Wrapper from './wrappers/step-2-wrapper.molecule';
import { useStateMachine } from 'little-state-machine';
import { Grid, MenuItem } from '@material-ui/core';
import { ErrorMessage } from '@hookform/error-message';
import ReactHookFormSelect from '../../atoms/react-hook-form-select.atom';
// @ts-ignore
import updateCardDetails from '../../../utils/update-card-details.util';

interface Props {
  step: number;
  prevStep?: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step2: React.FC<Props> = ({ step, prevStep, setStep }) => {
  const [countriesData, setCountriesData] = useState([]);
  const { actions, state } = useStateMachine({ updateCardDetails });
  const { playerName, position, rating, country } = state.cardDetails;
  const { register, handleSubmit, errors, control, watch } = useForm({
    defaultValues: {
      playerName,
      position,
      rating,
      country,
    },
  });

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch(`https://restcountries.eu/rest/v2/all`);
      const dataJson = await data.json();
      setCountriesData(dataJson);
    };
    fetchCountries();
  }, []);

  const fieldStore = { playerName, position, rating, country };

  const handleBackClick = () => {
    setStep(step - 1);
  };

  const watchAllFields = watch();

  useEffect(() => {
    actions.updateCardDetails({
      loader: false,
    });
  }, []);

  useEffect(() => {
    let timerId: number | undefined;
    if (!isEmpty(watchAllFields) && !isEqual(fieldStore, watchAllFields) && countriesData) {
      timerId = (setTimeout(() => {
        const countrySelected = countriesData.filter((countryData: any) => {
          return countryData.name === watchAllFields.country;
        });
        if (countrySelected.length > 0) {
          const data = {
            ...watchAllFields,
            countryImage: (countrySelected[0] as any).flag,
          };
          actions.updateCardDetails(data);
        } else {
          actions.updateCardDetails(watchAllFields);
        }
      }, 400) as unknown) as number;
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [watchAllFields]);

  const formSubmit = (data: any) => {
    const countrySelected = countriesData.filter((countryData: any) => {
      return countryData.name === data.country;
    }) as any;
    if (countrySelected.length > 0) {
      data.countryImage = countrySelected[0].flag;
    }

    actions.updateCardDetails(data);
    if (prevStep && prevStep > step) {
      setStep(prevStep);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <Step2Wrapper>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className='player-name-container'>
            <TextField
              label='Name'
              name='playerName'
              variant='outlined'
              autoComplete='off'
              fullWidth
              inputRef={register({ required: 'Please enter a name' })}
            />
            <ErrorMessage errors={errors} name='playerName' as='p' className='error-message' />
          </Grid>
          <Grid item xs={6} md={3} className='position-container'>
            <TextField
              label='Position'
              name='position'
              variant='outlined'
              autoComplete='off'
              fullWidth
              inputRef={register({ required: 'Please enter a position' })}
            />
            <ErrorMessage errors={errors} name='position' as='p' className='error-message' />
          </Grid>
          <Grid item xs={6} md={3} className='rating-container'>
            <TextField
              label='Rating'
              name='rating'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
              inputRef={register({ required: 'Please enter a rating' })}
            />
            <ErrorMessage errors={errors} name='rating' as='p' className='error-message' />
          </Grid>

          <Grid item xs={12}>
            <ReactHookFormSelect
              id='country-select'
              name='country'
              label='Choose your country'
              control={control}
              errors={errors}
            >
              {countriesData.map((countryData: any, index) => {
                return (
                  <MenuItem value={countryData.name} key={index}>
                    {countryData.name}
                  </MenuItem>
                );
              })}
            </ReactHookFormSelect>
            <ErrorMessage errors={errors} name='country' as='p' className='error-message' />
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
    </Step2Wrapper>
  );
};

export default Step2;
