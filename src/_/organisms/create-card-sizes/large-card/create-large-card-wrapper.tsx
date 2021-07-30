import styled from 'styled-components';

interface Props {
  positions: {
    largeSummaryX: string;
    largeSummaryY: string;
    largePhotoX: string;
    largePhotoY: string;
    largeStatsX: string;
    largeStatsY: string;
    countryLargeHeight: string;
    countryLargeWidth: string;
    countryLargeX: string;
    countryLargeY: string;
    clubLargeHeight: string;
    clubLargeWidth: string;
    clubLargeX: string;
    clubLargeY: string;
    playerPhotoLargeHeight: string;
    playerPhotoLargeWidth: string;
    playerPhotoLargeX: string;
    playerPhotoLargeY: string;
  };
  bleedImage: string;
}

const CreateLargeCardWrapper = styled.div<Props>`
  margin-top: 4rem;
  .positions-container {
    margin-top: 8rem;
    .positions-title {
      font-family: 'Varela Round', serif;
      text-align: center;
    }
  }

  .card-template {
    * {
      all: revert;
    }

    display: flex;
    justify-content: center;

    .card-image {
      width: 1100px;
      height: 1610px;
    }

    .summary-section {
      position: relative;
      top: ${(props) => props.positions.largeSummaryY || 0}px;
      left: ${(props) => props.positions.largeSummaryX || 0}px;
    }

    .photo-section {
      position: relative;
      top: ${(props) => props.positions.largePhotoY || 0}px;
      left: ${(props) => props.positions.largePhotoX || 0}px;
    }

    .stats-section {
      position: relative;
      top: ${(props) => props.positions.largeStatsY || 0}px;
      left: ${(props) => props.positions.largeStatsX || 0}px;
    }

    .image-container {
      width: 1100px;
      height: 1610px;
      position: relative;
      background-image: url(${(props) => props.bleedImage});
      background-size: cover;
      background-repeat: no-repeat;
    }

    .player-rating {
      position: absolute;
      top: 110px;
      left: 191px;
      width: 210px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-weight: 700;
      font-size: 8rem;
    }

    .player-image-container {
      position: absolute;
      height: ${(props) => props.positions.playerPhotoLargeHeight || 0}px;
      width: ${(props) => props.positions.playerPhotoLargeWidth || 0}px;
      top: ${(props) => props.positions.playerPhotoLargeY || 0}px;
      left: ${(props) => props.positions.playerPhotoLargeX || 0}px;
    }

    .player-image {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }

    .player-position {
      position: absolute;
      top: 310px;
      left: 191px;
      width: 210px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 4.5rem;
      text-transform: uppercase;
    }

    .player-country-image-container {
      position: absolute;
      height: ${(props) => props.positions.countryLargeHeight || 0}px;
      width: ${(props) => props.positions.countryLargeWidth || 0}px;
      top: ${(props) => props.positions.countryLargeY || 0}px;
      left: ${(props) => props.positions.countryLargeX || 0}px;
    }

    .player-country-image {
      object-fit: fill;
      height: 100%;
      width: 100%;
    }

    .player-club-image-container {
      position: absolute;
      height: ${(props) => props.positions.clubLargeHeight || 0}px;
      width: ${(props) => props.positions.clubLargeWidth || 0}px;
      top: ${(props) => props.positions.clubLargeY || 0}px;
      left: ${(props) => props.positions.clubLargeX || 0}px;
    }

    .player-club-image {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }

    .player-name {
      position: absolute;
      top: 490px;
      left: 90px;
      width: 805px;
      word-wrap: break-word;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 5.5rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .player-stat-value {
      display: inline-block;
      position: absolute;
      width: 120px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 5rem;
      font-weight: 700;
    }

    .left-stat-value {
      left: 140px;
    }

    .right-stat-value {
      left: 545px;
    }

    .player-stat-value-1 {
      top: 620px;
    }

    .player-stat-value-2 {
      top: 710px;
    }

    .player-stat-value-3 {
      top: 800px;
    }

    .player-stat-name {
      display: inline-block;
      position: absolute;
      width: 200px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 5rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .left-stat-name {
      left: 260px;
    }

    .right-stat-name {
      left: 665px;
    }

    .player-stat-name-1 {
      top: 620px;
    }

    .player-stat-name-2 {
      top: 710px;
    }

    .player-stat-name-3 {
      top: 800px;
    }
  }
`;

export default CreateLargeCardWrapper;
