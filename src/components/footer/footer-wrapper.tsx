import styled from 'styled-components';

const FooterWrapper = styled.div`
  .footer-main-container {
    padding: 3rem;
    background-color: #0e0b16;

    @media (max-width: 767px) {
      padding: 1rem;
    }
  }

  .footer-links-container {
    margin-top: 1rem;
  }

  .footer-links {
    font-family: 'Varela Round';
    font-size: 1.2rem;
    text-decoration: none;
    color: #e7dfdd;
    margin-right: 1rem;
  }
`;

export default FooterWrapper;
