import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';

interface StyleProps {
  positions: {
    cartSummaryX: string;
    cartSummaryY: string;
    cartPhotoX: string;
    cartPhotoY: string;
    cartStatsX: string;
    cartStatsY: string;
    cartLoaderX: string;
    countryCartHeight: string;
    countryCartWidth: string;
    countryCartX: string;
    countryCartY: string;
    clubCartHeight: string;
    clubCartWidth: string;
    clubCartX: string;
    clubCartY: string;
    playerPhotoCartHeight: string;
    playerPhotoCartWidth: string;
    playerPhotoCartX: string;
    playerPhotoCartY: string;
  };
}

const CardCollectionOrderWrapper = styled.div<StyleProps>`
  .summary-section {
    position: relative;
    top: ${(props) => props.positions.cartSummaryY || 0}px;
    left: ${(props) => props.positions.cartSummaryX || 0}px;
  }

  .photo-section {
    position: relative;
    top: ${(props) => props.positions.cartPhotoY || 0}px;
    left: ${(props) => props.positions.cartPhotoX || 0}px;
  }

  .stats-section {
    position: relative;
    top: ${(props) => props.positions.cartStatsY || 0}px;
    left: ${(props) => props.positions.cartStatsX || 0}px;
  }

  .image-container {
    position: relative;
    width: 150px;
    height: 280px;
    overflow: hidden;
  }

  .card-background-image {
    max-width: 150px;
  }

  .player-rating {
    position: absolute;
    top: 33px;
    left: 30px;
    width: 25px;
    text-align: center;
    font-family: 'Varela Round', serif;
    font-weight: 700;
    font-size: 1rem;
  }

  .player-image-container {
    position: absolute;
    height: ${(props) => props.positions.playerPhotoCartHeight || 0}px;
    width: ${(props) => props.positions.playerPhotoCartWidth || 0}px;
    top: ${(props) => props.positions.playerPhotoCartY || 0}px;
    left: ${(props) => props.positions.playerPhotoCartX || 0}px;
  }

  .player-image {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  .player-position {
    position: absolute;
    top: 50px;
    left: 30px;
    width: 25px;
    text-align: center;
    font-family: 'Varela Round', serif;
    font-size: 0.6rem;
    text-transform: uppercase;
  }

  .player-country-image-container {
    position: absolute;
    height: ${(props) => props.positions.countryCartHeight || 0}px;
    width: ${(props) => props.positions.countryCartWidth || 0}px;
    top: ${(props) => props.positions.countryCartY || 0}px;
    left: ${(props) => props.positions.countryCartX || 0}px;
  }

  .player-country-image {
    object-fit: fill;
    height: 100%;
    width: 100%;
  }

  .player-club-image-container {
    position: absolute;
    height: ${(props) => props.positions.clubCartHeight || 0}px;
    width: ${(props) => props.positions.clubCartWidth || 0}px;
    top: ${(props) => props.positions.clubCartY || 0}px;
    left: ${(props) => props.positions.clubCartX || 0}px;
  }

  .player-club-image {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  .player-name {
    position: absolute;
    top: 118px;
    left: -35px;
    width: 225px;
    text-align: center;
    font-family: 'Varela Round', serif;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .player-stat-value {
    display: inline-block;
    position: absolute;
    width: 80px;
    text-align: center;
    font-family: 'Varela Round', serif;
    font-size: 0.6rem;
    font-weight: 700;
  }

  .left-stat-value {
    left: 0px;
  }

  .right-stat-value {
    left: 50px;
  }

  .player-stat-value-1 {
    top: 138px;
  }

  .player-stat-value-2 {
    top: 150px;
  }

  .player-stat-value-3 {
    top: 162px;
  }

  .player-stat-name {
    display: inline-block;
    position: absolute;
    width: 80px;
    text-align: center;
    font-family: 'Varela Round', serif;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .left-stat-name {
    left: 20px;
  }

  .right-stat-name {
    left: 70px;
  }

  .player-stat-name-1 {
    top: 138px;
  }

  .player-stat-name-2 {
    top: 150px;
  }

  .player-stat-name-3 {
    top: 162px;
  }

  .card-description {
    text-align: center;
  }
`;

interface Props {
  productDetail: any;
}

const CollectionCardOrder: React.FC<Props> = ({ productDetail }) => {
  const {
    playerName,
    playerImage,
    previewImage,
    clubImage,
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
  } = productDetail;

  const positions = productDetail?.product?.positions;
  const positionsData = positions && JSON.parse(positions);

  return (
    <CardCollectionOrderWrapper positions={positionsData}>
      <Box className='image-container'>
        <div className='summary-section'>
          <p className='player-rating'>{rating}</p>
          <p className='player-position'>{position}</p>
          <div className='player-country-image-container'>
            {countryImage && <img src={countryImage} alt='country flag' className='player-country-image' />}
          </div>
          <div className='player-club-image-container'>
            <img src={clubImage} alt='club flag' className='player-club-image' />
          </div>
        </div>
        <div className='photo-section'>
          <div className='player-image-container'>
            {playerImage && <img src={previewImage || playerImage} alt='player image' className='player-image' />}
          </div>
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

        <img src={productDetail.product.image} className='card-background-image' />
        <div className='card-description'>
          <p>{productDetail.product.name}</p>
          <p>$ {productDetail.product.price}</p>
        </div>
      </Box>
    </CardCollectionOrderWrapper>
  );
};

export default CollectionCardOrder;
