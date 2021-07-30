import styled from 'styled-components';

const CreateOrEditProductFormWrapper = styled.div`
  .form {
    margin-top: 1.5rem;
  }

  .image-btn {
    margin-top: 2rem;
  }

  .select {
    min-width: 100%;
  }

  .submit {
    background-color: #a239ca;
    margin-top: 3rem;
  }

  .error-message {
    color: #bf1650;
  }

  .error-message::before {
    display: inline;
    content: '⚠ ';
  }

  .image-note {
    font-family: 'Varela Round', serif;
  }
`;

export default CreateOrEditProductFormWrapper;
