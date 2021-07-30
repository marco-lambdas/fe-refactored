import styled from 'styled-components';

const CollectionsCardWrapper = styled.div`
  .collection-card {
    width: 100%;
    background-color: #f4f3ee;
    border: none;
    box-shadow: none;

    .collection-card-action-area {
      height: 550px;
    }
  }

  .collection-card:hover > button > div > h6 > span {
    color: #a239ca;
  }

  .collection-card-image {
    margin: 0 auto;
  }

  .collection-card-content {
    padding: 0;
    text-align: center;
    min-height: 200px;
  }

  .collection-card-name {
    margin-bottom: 0;
  }

  .collection-title {
    font-family: 'Varela Round', serif;
    font-weight: 700 !important;
    font-size: 1.5rem;
    letter-spacing: 1.2px;
    color: #0e0b16;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 576px) {
      font-size: 1.1rem;
    }
  }

  .collection-title:hover {
    color: #a239ca;
  }

  .collection-price {
    font-size: 1.1rem;
    color: #0e0b16;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }

  .collection-size {
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #0e0b16;
  }

  .collection-card:hover .collection-size {
    color: #a239ca;
  }
`;

export default CollectionsCardWrapper;
