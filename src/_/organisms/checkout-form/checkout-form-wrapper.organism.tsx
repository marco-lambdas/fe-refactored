import styled from 'styled-components';

const CheckoutWrapper = styled.div`
  .sr-combo-inputs {
    margin: 20px 0;
  }

  .sr-input {
    font-size: 16px;
  }

  .sr-combo-inputs-row {
    padding: 12px;
    border: 1px solid grey;
    border-radius: 5px;
  }

  .btn {
    font-size: 16px;
  }

  .order-summary-item {
    margin-top: 0.5rem;
  }

  .coupon {
    margin-top: 1rem;
  }

  .total {
    font-weight: bold;
  }

  .coupon-button-container {
    margin-left: 0.5rem;

    .coupon-button {
      background: #a239ca;
      color: white;
      transition: background 1s linear;

      &:hover {
        background: linear-gradient(40deg, #a239ca, #4717f6);
        box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
      }
    }
  }

  .submit {
    background-color: #a239ca;
    color: white;
    transition: background 1s linear;

    &:hover {
      background: linear-gradient(40deg, #a239ca, #4717f6);
      box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    }
  }

  .backdrop {
    z-index: 1000;
  }
`;

export default CheckoutWrapper;
