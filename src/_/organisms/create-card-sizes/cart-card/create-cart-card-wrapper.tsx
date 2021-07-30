import styled from 'styled-components';

interface Props {
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

const CreateCartCardWrapper = styled.div<Props>`
  margin-top: 4rem;
  .positions-container {
    .positions-title {
      font-family: 'Varela Round', serif;
      text-align: center;
    }
  }

  .card-template {
    display: flex;
    justify-content: center;
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
  }
`;

export default CreateCartCardWrapper;
