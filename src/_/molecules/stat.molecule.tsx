import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { ErrorMessage } from '@hookform/error-message';
import { DeepMap, FieldValues, FieldError } from 'react-hook-form';

interface Props {
  name: string;
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
}

const StatMolecule: React.FC<Props> = ({ errors, name, register }) => {
  return (
    <>
      <Grid item xs={6} md={3}>
        <TextField
          name={`${name}Value`}
          type='number'
          variant='outlined'
          inputRef={register({ required: `Please enter a number` })}
        />
        <ErrorMessage
          // @ts-ignore
          errors={errors}
          name={`${name}Value`}
          as='p'
          className='error-message'
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <TextField
          name={name}
          variant='outlined'
          autoComplete='off'
          fullWidth
          inputRef={register({ required: `Please enter a name` })}
        />
        <ErrorMessage
          // @ts-ignore
          errors={errors}
          name={name}
          as='p'
          className='error-message'
        />
      </Grid>
    </>
  );
};

export default StatMolecule;
