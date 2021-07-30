import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CollectionsHeaderWrapper from './collections-header-wrapper';

interface Props {
  smallTxt?: string;
  bigTxt?: string;
}

const CollectionsHeader: React.FC<Props> = ({ smallTxt, bigTxt }) => {
  return (
    <CollectionsHeaderWrapper>
      <Container component='main' className='collection-header-main-container'>
        <Grid container justify='center' className=''>
          <Grid item xs={12} md={8} className='collection-header'>
            <Typography variant='h5' gutterBottom className='collection-header-text collection-header-text-small'>
              {smallTxt || 'SELECT'}
            </Typography>
            <Typography variant='h3' gutterBottom className='collection-header-text collection-header-text-big'>
              {bigTxt || 'YOUR DESIGN'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </CollectionsHeaderWrapper>
  );
};

export default CollectionsHeader;
