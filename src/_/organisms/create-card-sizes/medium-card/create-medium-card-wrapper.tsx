import styled from 'styled-components';

interface Props {
  positions: {
    mediumSummaryX: string;
    mediumSummaryY: string;
    mediumPhotoX: string;
    mediumPhotoY: string;
    mediumStatsX: string;
    mediumStatsY: string;
    countryMediumHeight: string;
    countryMediumWidth: string;
    countryMediumX: string;
    countryMediumY: string;
    clubMediumHeight: string;
    clubMediumWidth: string;
    clubMediumX: string;
    clubMediumY: string;
    playerPhotoMediumHeight: string;
    playerPhotoMediumWidth: string;
    playerPhotoMediumX: string;
    playerPhotoMediumY: string;
  };
  bleedImage: string;
}

const CreateMediumCardWrapper = styled.div<Props>`
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
      width: 800px;
      height: 1193px;
    }

    .summary-section {
      position: relative;
      top: ${(props) => props.positions.mediumSummaryY || 0}px;
      left: ${(props) => props.positions.mediumSummaryX || 0}px;
    }

    .photo-section {
      position: relative;
      top: ${(props) => props.positions.mediumPhotoY || 0}px;
      left: ${(props) => props.positions.mediumPhotoX || 0}px;
    }

    .stats-section {
      position: relative;
      top: ${(props) => props.positions.mediumStatsY || 0}px;
      left: ${(props) => props.positions.mediumStatsX || 0}px;
    }

    .image-container {
      width: 800px;
      height: 1193px;
      position: relative;
      background-image: url(${(props) => props.bleedImage});
      background-size: cover;
      background-repeat: no-repeat;
    }

    .player-rating {
      position: absolute;
      top: 105px;
      left: 170px;
      width: 70px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-weight: 700;
      font-size: 5rem;
    }

    .player-image-container {
      position: absolute;
      height: ${(props) => props.positions.playerPhotoMediumHeight || 0}px;
      width: ${(props) => props.positions.playerPhotoMediumWidth || 0}px;
      top: ${(props) => props.positions.playerPhotoMediumY || 0}px;
      left: ${(props) => props.positions.playerPhotoMediumX || 0}px;
    }

    .player-image {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }

    .player-position {
      position: absolute;
      top: 220px;
      left: 145px;
      width: 150px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 3rem;
      text-transform: uppercase;
    }

    .player-country-image-container {
      position: absolute;
      height: ${(props) => props.positions.countryMediumHeight || 0}px;
      width: ${(props) => props.positions.countryMediumWidth || 0}px;
      top: ${(props) => props.positions.countryMediumY || 0}px;
      left: ${(props) => props.positions.countryMediumX || 0}px;
    }

    .player-country-image {
      object-fit: fill;
      height: 100%;
      width: 100%;
    }

    .player-club-image-container {
      position: absolute;
      height: ${(props) => props.positions.clubMediumHeight || 0}px;
      width: ${(props) => props.positions.clubMediumWidth || 0}px;
      top: ${(props) => props.positions.clubMediumY || 0}px;
      left: ${(props) => props.positions.clubMediumX || 0}px;
    }

    .player-club-image {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }

    .player-name {
      position: absolute;
      top: 583px;
      left: 140px;
      width: 530px;
      word-wrap: break-word;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 3.5rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .player-stat-value {
      display: inline-block;
      position: absolute;
      width: 80px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 3.3rem;
      font-weight: 700;
    }

    .left-stat-value {
      left: 170px;
    }

    .right-stat-value {
      left: 430px;
    }

    .player-stat-value-1 {
      top: 670px;
    }

    .player-stat-value-2 {
      top: 735px;
    }

    .player-stat-value-3 {
      top: 800px;
    }

    .player-stat-name {
      display: inline-block;
      position: absolute;
      width: 80px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 3.3rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .left-stat-name {
      left: 260px;
    }

    .right-stat-name {
      left: 520px;
    }

    .player-stat-name-1 {
      top: 670px;
    }

    .player-stat-name-2 {
      top: 735px;
    }

    .player-stat-name-3 {
      top: 800px;
    }
  }
`;

export default CreateMediumCardWrapper;
