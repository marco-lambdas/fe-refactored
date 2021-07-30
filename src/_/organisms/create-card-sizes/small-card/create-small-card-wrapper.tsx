import styled from 'styled-components';
interface Props {
  positions: {
    smallSummaryX: string;
    smallSummaryY: string;
    smallPhotoX: string;
    smallPhotoY: string;
    smallStatsX: string;
    smallStatsY: string;
    countrySmallHeight: string;
    countrySmallWidth: string;
    countrySmallX: string;
    countrySmallY: string;
    clubSmallHeight: string;
    clubSmallWidth: string;
    clubSmallX: string;
    clubSmallY: string;
    playerPhotoSmallHeight: string;
    playerPhotoSmallWidth: string;
    playerPhotoSmallX: string;
    playerPhotoSmallY: string;
  };
  image: string;
}

const CreateSmallCardWrapper = styled.div<Props>`
  margin-top: 4rem;

  .positions-container {
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
      max-width: 240px;
      max-height: 360px;
    }

    .summary-section {
      position: relative;
      top: ${(props) => props.positions.smallSummaryY || 0}px;
      left: ${(props) => props.positions.smallSummaryX || 0}px;
    }

    .photo-section {
      position: relative;
      top: ${(props) => props.positions.smallPhotoY || 0}px;
      left: ${(props) => props.positions.smallPhotoX || 0}px;
    }

    .stats-section {
      position: relative;
      top: ${(props) => props.positions.smallStatsY || 0}px;
      left: ${(props) => props.positions.smallStatsX || 0}px;
    }
    .image-container {
      position: relative;
      width: 240px;
      height: 360px;
      background-image: url(${(props) => props.image});
      background-size: cover;
      background-repeat: no-repeat;
    }

    .player-rating {
      position: absolute;
      top: 32px;
      left: 50px;
      font-family: 'Varela Round', serif;
      font-weight: 700;
      font-size: 1.5rem;
    }

    .player-image-container {
      position: absolute;
      height: ${(props) => props.positions.playerPhotoSmallHeight || 0}px;
      width: ${(props) => props.positions.playerPhotoSmallWidth || 0}px;
      top: ${(props) => props.positions.playerPhotoSmallY || 0}px;
      left: ${(props) => props.positions.playerPhotoSmallX || 0}px;
    }

    .player-image {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }

    .player-position {
      position: absolute;
      top: 67px;
      left: 43px;
      width: 46px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 0.9rem;
      text-transform: uppercase;
    }

    .player-country-image-container {
      position: absolute;
      height: ${(props) => props.positions.countrySmallHeight || 0}px;
      width: ${(props) => props.positions.countrySmallWidth || 0}px;
      top: ${(props) => props.positions.countrySmallY || 0}px;
      left: ${(props) => props.positions.countrySmallX || 0}px;
    }

    .player-country-image {
      object-fit: fill;
      height: 100%;
      width: 100%;
    }

    .player-club-image-container {
      position: absolute;
      height: ${(props) => props.positions.clubSmallHeight || 0}px;
      width: ${(props) => props.positions.clubSmallWidth || 0}px;
      top: ${(props) => props.positions.clubSmallY || 0}px;
      left: ${(props) => props.positions.clubSmallX || 0}px;
    }

    .player-club-image {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }

    .player-name {
      position: absolute;
      top: 172px;
      left: 40px;
      width: 160px;
      word-wrap: break-word;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 1.1rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .player-stat-value {
      display: inline-block;
      position: absolute;
      width: 35px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 1rem;
      font-weight: 700;
    }

    .left-stat-value {
      left: 45px;
    }

    .right-stat-value {
      left: 125px;
    }

    .player-stat-value-1 {
      top: 200px;
    }

    .player-stat-value-2 {
      top: 220px;
    }

    .player-stat-value-3 {
      top: 240px;
    }

    .player-stat-name {
      display: inline-block;
      position: absolute;
      width: 35px;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .left-stat-name {
      left: 75px;
    }

    .right-stat-name {
      left: 155px;
    }

    .player-stat-name-1 {
      top: 200px;
    }

    .player-stat-name-2 {
      top: 220px;
    }

    .player-stat-name-3 {
      top: 240px;
    }
  }
`;

export default CreateSmallCardWrapper;
