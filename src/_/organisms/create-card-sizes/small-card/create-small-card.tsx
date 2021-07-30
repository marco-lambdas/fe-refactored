import { Grid } from '@material-ui/core';
import React from 'react';
import PositionFields, { CardSize } from '../../position-fields.organism';
import CardTemplate from '../card-template';
import CreateSmallCardWrapper from './create-small-card-wrapper';

interface Props {
  register: any;
  errors: any;
  watch: any;
  image: string;
}

const CreateSmallCard: React.FC<Props> = ({ register, errors, watch, image }) => {
  const positions = watch([
    'smallSummaryX',
    'smallSummaryY',
    'smallPhotoX',
    'smallPhotoY',
    'smallStatsX',
    'smallStatsY',
    'countrySmallHeight',
    'countrySmallWidth',
    'countrySmallX',
    'countrySmallY',
    'clubSmallHeight',
    'clubSmallWidth',
    'clubSmallX',
    'clubSmallY',
    'playerPhotoSmallHeight',
    'playerPhotoSmallWidth',
    'playerPhotoSmallX',
    'playerPhotoSmallY',
  ]);

  return (
    <CreateSmallCardWrapper positions={positions} image={image}>
      <Grid container spacing={2} justify='center' alignItems='center'>
        <Grid item xs={12} lg={6} className='card-template'>
          <CardTemplate />
        </Grid>
        <Grid item xs={12} lg={6}>
          <PositionFields register={register} errors={errors} size={CardSize.small} />
        </Grid>
      </Grid>
    </CreateSmallCardWrapper>
  );
};

export default CreateSmallCard;
