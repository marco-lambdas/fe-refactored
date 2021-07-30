import React, { useState } from 'react';
import { Backdrop, Box, CircularProgress } from '@material-ui/core';
import { useStateMachine } from 'little-state-machine';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
// @ts-ignore
import updateCardDetails from '../../utils/update-card-details.util';
// @ts-ignore
import camera from '../../assets/icons/camera.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface StyleProps {
  positions: {
    collectionSummaryX: string;
    collectionSummaryY: string;
    collectionPhotoX: string;
    collectionPhotoY: string;
    collectionStatsX: string;
    collectionStatsY: string;
    collectionLoaderX: string;
    countryCollectionHeight: string;
    countryCollectionWidth: string;
    countryCollectionX: string;
    countryCollectionY: string;
    clubCollectionHeight: string;
    clubCollectionWidth: string;
    clubCollectionX: string;
    clubCollectionY: string;
    playerPhotoCollectionHeight: string;
    playerPhotoCollectionWidth: string;
    playerPhotoCollectionX: string;
    playerPhotoCollectionY: string;
  };
  playerNameTop: string;
  playerNameLeft: string;
  playerNameFontSize: string;
}

const CardCollectionWrapper = styled.div<StyleProps>`
  .card-image {
    max-width: 400px;
  }

  .backdrop {
    z-index: 1000 !important;
  }

  .summary-section {
    position: relative;
    top: ${(props) => props.positions?.collectionSummaryY || 0}px;
    left: ${(props) => props.positions?.collectionSummaryX || 0}px;
  }

  .loader-section {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  ${(props) =>
    props.positions?.collectionLoaderX
      ? `
  .loader-section .loader {
    left: ${props.positions?.collectionLoaderX || 0}px !important;
  }`
      : ''}

  .photo-section {
    position: relative;
    top: ${(props) => props.positions?.collectionPhotoY || 0}px;
    left: ${(props) => props.positions?.collectionPhotoX || 0}px;
  }

  .stats-section {
    position: relative;
    top: ${(props) => props.positions?.collectionStatsY || 0}px;
    left: ${(props) => props.positions?.collectionStatsX || 0}px;
  }

  .image-container {
    position: relative;
    max-width: 400px;
  }

  .player-rating {
    position: absolute;
    top: 95px;
    left: 86px;
    font-family: 'Varela Round', serif;
    font-weight: 700;
    font-size: 2.5rem;
  }

  .player-image-container {
    position: absolute;
    height: ${(props) => props.positions.playerPhotoCollectionHeight || 0}px;
    width: ${(props) => props.positions.playerPhotoCollectionWidth || 0}px;
    top: ${(props) => props.positions.playerPhotoCollectionY || 0}px;
    left: ${(props) => props.positions.playerPhotoCollectionX || 0}px;
  }

  .player-image {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  .player-position {
    position: absolute;
    width: 60px;
    text-align: center;
    top: 140px;
    left: 81px;
    font-family: 'Varela Round', serif;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .player-country-image-container {
    position: absolute;
    height: ${(props) => props.positions.countryCollectionHeight || 0}px;
    width: ${(props) => props.positions.countryCollectionWidth || 0}px;
    top: ${(props) => props.positions.countryCollectionY || 0}px;
    left: ${(props) => props.positions.countryCollectionX || 0}px;
  }

  .player-country-image {
    object-fit: fill;
    height: 100%;
    width: 100%;
  }

  .player-club-image-container {
    position: absolute;
    height: ${(props) => props.positions.clubCollectionHeight || 0}px;
    width: ${(props) => props.positions.clubCollectionWidth || 0}px;
    top: ${(props) => props.positions.clubCollectionY || 0}px;
    left: ${(props) => props.positions.clubCollectionX || 0}px;
  }

  .player-club-image {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  .player-name {
    position: absolute;
    top: ${(props) => props.playerNameTop};
    left: ${(props) => props.playerNameLeft};
    width: 267px;
    word-wrap: break-word;
    text-align: center;
    font-family: 'Varela Round', serif;
    font-size: ${(props) => props.playerNameFontSize};
    font-weight: 700;
    text-transform: uppercase;
  }

  .player-stat-value {
    display: inline-block;
    position: absolute;
    width: 80px;
    text-align: center;
    font-family: 'Varela Round', serif;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .left-stat-value {
    left: 60px;

    @media (max-width: 767px) {
      left: 50px;
    }
  }

  .right-stat-value {
    left: 200px;
  }

  .player-stat-value-1 {
    top: 370px;
  }

  .player-stat-value-2 {
    top: 405px;
  }

  .player-stat-value-3 {
    top: 440px;
  }

  .player-stat-name {
    display: inline-block;
    position: absolute;
    width: 80px;
    text-align: center;
    font-family: 'Varela Round', serif;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .left-stat-name {
    left: 115px;
  }

  .right-stat-name {
    left: 255px;
  }

  .player-stat-name-1 {
    top: 370px;
  }

  .player-stat-name-2 {
    top: 405px;
  }

  .player-stat-name-3 {
    top: 440px;
  }

  .flexContainer {
    display: flex;
    font-size: 10px;
    padding-bottom: 6px;
    justify-content: space-between;
    color: #303f9f;
  }

  .flexContainer h2 {
    font-family: Courier New;
  }

  .flexContainer img {
    margin-top: -2px;
    margin-right: 4px;
  }

  .loader {
    position: absolute;
    width: 120px;
    top: 30%;
    left: 50%;
  }

  @media only screen and (min-width: 300px) {
    .loader {
      left: 40%;
      width: 120px;
    }
  }

  @media only screen and (min-width: 500px) {
    .loader {
      left: 30%;
    }
  }

  @media only screen and (min-width: 630px) {
    .loader {
      left: 22%;
    }
  }

  @media only screen and (min-width: 800px) {
    .loader {
      left: 22%;
      width: 160px;
    }
  }

  @media only screen and (min-width: 1000px) {
    .loader {
      left: 16%;
    }
  }

  @media only screen and (min-width: 1280px) {
    .loader {
      left: 32%;
    }
  }
`;

interface Props {
  productDetail?: any;
  cardImage?: string;
  positions?: any;
}

const CollectionCard: React.FC<Props> = ({ productDetail, cardImage, positions }) => {
  const classes = useStyles();

  // @ts-ignore
  const { state } = useStateMachine(updateCardDetails);

  const { cardDetails } = state;

  let cardObject;
  if (!productDetail) {
    cardObject = cardDetails;
  } else {
    cardObject = productDetail;
  }
  const {
    loader,
    image,
    clubImage,
    previewImage,
    finalImage,
    playerName,
    position,
    rating,
    countryImage,
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
  } = cardObject;

  let playerNameFontSize = '1.8rem';
  let playerNameTop = '320px';
  let playerNameLeft = '70px';

  if (playerName.length > 23) {
    playerNameFontSize = '1.2rem';
    playerNameTop = '305px';
    playerNameLeft = '69px';
  } else if (playerName.length > 22) {
    playerNameFontSize = '1.1rem';
    playerNameTop = '327px';
    playerNameLeft = '69px';
  } else if (playerName.length > 19) {
    playerNameFontSize = '1.2rem';
    playerNameTop = '327px';
    playerNameLeft = '68px';
  } else if (playerName.length > 18) {
    playerNameFontSize = '1.3rem';
    playerNameTop = '327px';
    playerNameLeft = '68px';
  } else if (playerName.length > 16) {
    playerNameFontSize = '1.4rem';
    playerNameTop = '325px';
    playerNameLeft = '71px';
  } else if (playerName.length > 14) {
    playerNameFontSize = '1.5rem';
    playerNameLeft = '71px';
  } else if (playerName.length > 13) {
    playerNameLeft = '71px';
    playerNameFontSize = '1.6rem';
  }

  const renderPlayerImage = () => {
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    if (finalImage) {
      return <img src={finalImage} alt='player image' className='player-image' />;
    }
    if (loader) {
      return (
        <div>
          <div className='flexContainer'>
            <h2>Loading image</h2>
            <img src={camera} alt='camera' />
          </div>
          <div className={classes.root}>
            <LinearProgress color='primary' />
          </div>
        </div>
      );
    } else if (previewImage && base64regex.test(previewImage)) {
      return <img src={`data:image/png;base64,${previewImage}`} alt='player image' className='player-image' />;
    } else if (previewImage && typeof previewImage === 'string') {
      return <img src={previewImage} alt='player image' className='player-image' />;
    } else if (image instanceof File) {
      return <img src={URL.createObjectURL(image)} alt='player image' className='player-image' />;
    }

    return null;
  };

  const renderClubImage = () => {
    if (productDetail && productDetail.clubImage) {
      return <img src={productDetail.clubImage} alt='club flag' className='player-club-image' />;
    } else if (clubImage instanceof File) {
      return <img src={URL.createObjectURL(clubImage)} alt='club flag' className='player-club-image' />;
    }
  };

  const positionsData = positions && JSON.parse(positions);

  return (
    <CardCollectionWrapper
      playerNameFontSize={playerNameFontSize}
      playerNameTop={playerNameTop}
      playerNameLeft={playerNameLeft}
      positions={positionsData}
    >
      <Backdrop open={loader} className='backdrop'>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Box className='image-container'>
        <div className='summary-section'>
          <p className='player-rating'>{rating}</p>
          <p className='player-position'>{position}</p>
          <div className='player-country-image-container'>
            {countryImage && <img src={countryImage} alt='country flag' className='player-country-image' />}
          </div>
          <div className='player-club-image-container'>{renderClubImage()}</div>
        </div>
        <div className={loader ? 'loader-section' : 'photo-section'}>
          <div className={loader ? 'loader' : 'player-image-container'}>{renderPlayerImage()}</div>
        </div>
        <div className='stats-section'>
          <p className='player-name'>{playerName}</p>
          <p className='player-stat-value left-stat-value player-stat-value-1'>{stat1Value}</p>
          <p className='player-stat-name left-stat-name player-stat-name-1'>{stat1}</p>
          <p className='player-stat-value left-stat-value player-stat-value-2'>{stat2Value}</p>
          <p className='player-stat-name left-stat-name player-stat-name-2'>{stat2}</p>
          <p className='player-stat-value left-stat-value player-stat-value-3'>{stat3Value}</p>
          <p className='player-stat-name left-stat-name player-stat-name-3'>{stat3}</p>

          <p className='player-stat-value right-stat-value player-stat-value-1'>{stat4Value}</p>
          <p className='player-stat-name right-stat-name player-stat-name-1 stat-DRI'>{stat4}</p>
          <p className='player-stat-value right-stat-value player-stat-value-2'>{stat5Value}</p>
          <p className='player-stat-name right-stat-name player-stat-name-2'>{stat5}</p>
          <p className='player-stat-value right-stat-value player-stat-value-3'>{stat6Value}</p>
          <p className='player-stat-name right-stat-name player-stat-name-3'>{stat6}</p>
        </div>
        <img src={cardImage || productDetail.product.image} className='card-image' />
      </Box>
    </CardCollectionWrapper>
  );
};

export default CollectionCard;
