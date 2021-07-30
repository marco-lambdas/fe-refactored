import styled from 'styled-components';

const ReviewWrapper = styled.div`
  .review-header {
    font-family: 'Varela Round', serif;
    margin-bottom: 2rem;
  }

  .backdrop {
    z-index: 1000 !important;
  }

  .add-to-cart-container {
    @media (max-width: 767px) {
      display: flex;
      justify-content: center;
    }
  }

  .add-to-cart {
    width: 200px;
    background-color: #a239ca;
    color: white;
    @media (max-width: 767px) {
      margin-bottom: 1rem;
    }
  }
`;

export default ReviewWrapper;
