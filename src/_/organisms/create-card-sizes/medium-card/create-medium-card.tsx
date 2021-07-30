import { Grid } from '@material-ui/core';
import React from 'react';
import PositionFields, { CardSize } from '../../position-fields.organism';
import CardTemplate from '../card-template';
import CreateMediumCardWrapper from './create-medium-card-wrapper';

interface Props {
  register: any;
  errors: any;
  watch: any;
  bleedImage: string;
}

const CreateMediumCard: React.FC<Props> = ({ register, errors, watch, bleedImage }) => {
  const positions = watch([
    'mediumSummaryX',
    'mediumSummaryY',
    'mediumPhotoX',
    'mediumPhotoY',
    'mediumStatsX',
    'mediumStatsY',
    'countryMediumHeight',
    'countryMediumWidth',
    'countryMediumX',
    'countryMediumY',
    'clubMediumHeight',
    'clubMediumWidth',
    'clubMediumX',
    'clubMediumY',
    'playerPhotoMediumHeight',
    'playerPhotoMediumWidth',
    'playerPhotoMediumX',
    'playerPhotoMediumY',
  ]);
  return (
    <CreateMediumCardWrapper positions={positions} bleedImage={bleedImage}>
      <Grid container spacing={2} justify='center' alignItems='center'>
        <Grid item xs={12} lg={7} className='card-template'>
          <CardTemplate />
        </Grid>
        <Grid item xs={12} lg={5}>
          <PositionFields register={register} errors={errors} size={CardSize.medium} />
        </Grid>
      </Grid>
    </CreateMediumCardWrapper>
  );
};

export default CreateMediumCard;
