import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import SizeCardWrapper from './size-card-wrapper.molecule';

interface Props {
  name: string;
  size: string;
  handleSizeCardClick: (value: any) => void;
  globalStateCardSize: string;
}

const SizeCard: React.FC<Props> = ({ name, size, handleSizeCardClick, globalStateCardSize }) => {
  const lowerCaseName = name.toLowerCase();

  const cardActive = () => {
    if ((globalStateCardSize || globalStateCardSize !== '') && globalStateCardSize === lowerCaseName) {
      return 'size-cards selected-card';
    }
    return 'size-cards';
  };

  const handleClick = (e: any) => {
    const selectedCard = document.querySelector('.selected-card');
    if (selectedCard) {
      selectedCard!.classList.remove('selected-card');
    }
    document.querySelector(`#${lowerCaseName}`)!.classList.add('selected-card');
    // e.target.classList.toggle("selected-card");
    handleSizeCardClick(lowerCaseName);
  };

  return (
    <SizeCardWrapper>
      <Card className={cardActive()} onClick={handleClick} id={lowerCaseName}>
        <CardActionArea>
          <Grid container>
            <Grid item xs={6} md={4}>
              <div className='size-image-container'>
                <img src='https://via.placeholder.com/100x100' className='size-image' />
              </div>
            </Grid>
            <Grid item xs={6} md={8}>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {name}
                </Typography>
                <Typography variant='body1' component='p'>
                  {size}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </SizeCardWrapper>
  );
};

export default SizeCard;
