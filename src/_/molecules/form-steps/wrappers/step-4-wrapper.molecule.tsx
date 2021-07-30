import styled from 'styled-components';

const Step5Wrapper = styled.div`
  @media (max-width: 767px) {
    padding: 1rem;
  }

  .header-container {
    text-align: center;
  }

  .button-main-container {
    margin-top: 2rem;

    @media (max-width: 767px) {
      margin-top: 1rem;
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

  .error-message {
    color: #bf1650;
  }

  .error-message::before {
    display: inline;
    content: '⚠ ';
  }
`;

export default Step5Wrapper;
