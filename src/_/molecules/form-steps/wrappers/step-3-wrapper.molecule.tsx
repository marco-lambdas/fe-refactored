import styled from 'styled-components';

const Step4Wrapper = styled.div`
  .country-select {
    min-width: 250px;
  }

  .upload-title {
    font-family: 'Varela Round', serif;
  }

  .upload-image-header {
    @media (max-width: 767px) {
      text-align: center;
    }
  }

  .upload-image-action {
    @media (max-width: 767px) {
      margin-top: 1rem;
    }
  }

  .error-message {
    color: #bf1650;
  }

  .button-main-container {
    margin-top: 2rem;

    @media (max-width: 767px) {
      margin-top: 3rem;
      margin-bottom: 1rem;
    }
  }

  .button-container {
    text-align: center;

    @media (max-width: 767px) {
      margin-bottom: 1rem;
    }
  }

  .button-container {
    text-align: center;
  }

  .back-button {
    margin-right: 1rem;
    background-color: #b82601;
  }

  .next-button {
    margin-left: 1rem;
    background-color: #a239ca;
  }

  .error-message {
    color: #bf1650;
  }

  .error-message::before {
    display: inline;
    content: '⚠ ';
  }
`;

export default Step4Wrapper;
