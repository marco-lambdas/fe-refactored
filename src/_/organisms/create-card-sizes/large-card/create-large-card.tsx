import { Grid } from '@material-ui/core';
import React from 'react';
import PositionFields, { CardSize } from '../../position-fields.organism';
import CardTemplate from '../card-template';
import CreateLargeCardWrapper from './create-large-card-wrapper';

interface Props {
  register: any;
  errors: any;
  watch: any;
  bleedImage: string;
}

const CreateLargeCard: React.FC<Props> = ({ register, errors, watch, bleedImage }) => {
  const positions = watch([
    'largeSummaryX',
    'largeSummaryY',
    'largePhotoX',
    'largePhotoY',
    'largeStatsX',
    'largeStatsY',
    'countryLargeHeight',
    'countryLargeWidth',
    'countryLargeX',
    'countryLargeY',
    'clubLargeHeight',
    'clubLargeWidth',
    'clubLargeX',
    'clubLargeY',
    'playerPhotoLargeHeight',
    'playerPhotoLargeWidth',
    'playerPhotoLargeX',
    'playerPhotoLargeY',
  ]);

  return (
    <CreateLargeCardWrapper positions={positions} bleedImage={bleedImage}>
      <Grid container spacing={2} justify='center' alignItems='center'>
        <Grid item xs={12} className='card-template'>
          <CardTemplate />
        </Grid>
        <Grid item xs={12}>
          <PositionFields register={register} errors={errors} size={CardSize.large} />
        </Grid>
      </Grid>
    </CreateLargeCardWrapper>
  );
};

export default CreateLargeCard;
