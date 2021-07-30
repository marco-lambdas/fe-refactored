import styled from 'styled-components';

const Step2Wrapper = styled.div`
  .upload-title {
    font-family: 'Varela Round', serif;
    @media (max-width: 1280px) {
      text-align: center;
    }
  }

  .upload-image-header {
    @media (max-width: 767px) {
      text-align: center;
    }
  }

  .upload-image-action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1280px) {
      justify-content: flex-start;
      flex-direction: row;
    }
    @media (max-width: 767px) {
      margin-top: 1rem;
    }
  }

  .error-message {
    color: #bf1650;
  }

  .error-message::before {
    display: inline;
    content: '⚠ ';
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

  .back-button {
    margin-right: 1rem;
    background-color: #b82601;
  }

  .next-button {
    margin-left: 1rem;
    background-color: #a239ca;
  }
`;

export default Step2Wrapper;
