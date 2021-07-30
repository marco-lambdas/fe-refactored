import styled from 'styled-components';

interface Props {
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
}

const CreateCollectionCardWrapper = styled.div<Props>`
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
    .card-image {
      max-width: 400px;
      max-height: 600px;

      @media (max-width: 767px) {
        max-width: 350px;
      }
    }

    .card-background-image {
      max-width: 400px;
    }

    .backdrop {
      z-index: 1000 !important;
    }

    .summary-section {
      position: relative;
      top: ${(props) => props.positions.collectionSummaryY || 0}px;
      left: ${(props) => props.positions.collectionSummaryX || 0}px;
    }

    .loader-section {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }

    .loader-section .loader {
      left: ${(props) => props.positions.collectionLoaderX || 0}px !important;
    }

    .photo-section {
      position: relative;
      top: ${(props) => props.positions.collectionPhotoY || 0}px;
      left: ${(props) => props.positions.collectionPhotoX || 0}px;
    }

    .stats-section {
      position: relative;
      top: ${(props) => props.positions.collectionStatsY || 0}px;
      left: ${(props) => props.positions.collectionStatsX || 0}px;
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
      top: 320px;
      left: 70px;
      width: 267px;
      word-wrap: break-word;
      text-align: center;
      font-family: 'Varela Round', serif;
      font-size: 1.8rem;
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
  }
`;

export default CreateCollectionCardWrapper;
