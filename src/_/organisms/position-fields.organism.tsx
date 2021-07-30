import { Grid, Typography } from '@material-ui/core';
import { startCase } from 'lodash';
import React, { memo } from 'react';
import TextFieldWithValidation from '../atoms/text-field-with-validation.atom';

interface Props {
  register: any;
  errors: any;
  size: CardSize;
}

export enum CardSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  collection = 'collection',
  cart = 'cart',
}

const PositionFields: React.FC<Props> = ({ register, errors, size }) => {
  return (
    <Grid container spacing={2} className='positions-container'>
      <Grid item xs={12}>
        <Typography gutterBottom variant='h5' className='positions-title'>
          Position Coordinates
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`${size}SummaryX`}
          type='number'
          label={`Summary X's Position`}
          options={{ required: `Please enter summary's x position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`${size}SummaryY`}
          type='number'
          label={`Summary Y's Position`}
          options={{ required: `Please enter summary's y position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`${size}PhotoX`}
          type='number'
          label={`Photo X's Position`}
          options={{ required: `Please enter photo's x position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`${size}PhotoY`}
          type='number'
          label={`Photo Y's Position`}
          options={{ required: `Please enter photo's y position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`${size}StatsX`}
          type='number'
          label={`Stats X's Position`}
          options={{ required: `Please enter stats's x position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`${size}StatsY`}
          type='number'
          label={`Stats Y's Position`}
          options={{ required: `Please enter stats's y position` }}
        />
      </Grid>

      <Grid item xs={12}></Grid>
      {/* ************************************* */}
      {/* COUNTRY */}
      {/* ************************************* */}
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`country${startCase(size)}X`}
          type='number'
          label={`Country Img's X Position`}
          options={{ required: `Please enter country image's x position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`country${startCase(size)}Y`}
          type='number'
          label={`Country Img's Y Position`}
          options={{ required: `Please enter country image's y position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`country${startCase(size)}Height`}
          type='number'
          label={`Country Img Height`}
          options={{ required: `Please enter country image height` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`country${startCase(size)}Width`}
          type='number'
          label={`Country Img Width`}
          options={{ required: `Please enter country image width` }}
        />
      </Grid>

      <Grid item xs={12}></Grid>
      {/* ************************************* */}
      {/* CLUB */}
      {/* ************************************* */}
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`club${startCase(size)}X`}
          type='number'
          label={`Club Img's X Position`}
          options={{ required: `Please enter club image's x position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`club${startCase(size)}Y`}
          type='number'
          label={`Club Img's Y Position`}
          options={{ required: `Please enter club image's y position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`club${startCase(size)}Height`}
          type='number'
          label={`Club Img Height`}
          options={{ required: `Please enter club image height` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`club${startCase(size)}Width`}
          type='number'
          label={`Club Img Width`}
          options={{ required: `Please enter club image width` }}
        />
      </Grid>

      <Grid item xs={12}></Grid>
      {/* ************************************* */}
      {/* PLAYER PHOTO */}
      {/* ************************************* */}
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`playerPhoto${startCase(size)}X`}
          type='number'
          label={`Player Photo Img's X Position`}
          options={{ required: `Please enter player photo image's x position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`playerPhoto${startCase(size)}Y`}
          type='number'
          label={`Player Photo Img's Y Position`}
          options={{ required: `Please enter player photo image's y position` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`playerPhoto${startCase(size)}Height`}
          type='number'
          label={`Player Photo Img Height`}
          options={{ required: `Please enter player photo image height` }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldWithValidation
          register={register}
          errors={errors}
          name={`playerPhoto${startCase(size)}Width`}
          type='number'
          label={`Player Photo Img Width`}
          options={{ required: `Please enter player photo image width` }}
        />
      </Grid>
    </Grid>
  );
};

export default memo(PositionFields);
