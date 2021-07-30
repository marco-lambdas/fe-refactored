import styled from 'styled-components';

const HeaderMenuWrapper = styled.div`
  .drawer-list a {
    text-decoration: none;
  }

  .appBar {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 16px;
    background-color: #0e0b16 !important;
  }

  .toolBar {
    padding: 0 0.5rem;
    flex-wrap: wrap;
    font-family: 'Noto Serif';
    color: #fff;
  }

  .toolbarTitle {
    color: #fff;
    flex-grow: 1;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .mobileToolbarTitle {
    margin-left: 1rem;
    color: #fff;
  }

  .toolbarTitleText {
    color: #fff;
    letter-spacing: 1.5px;
    font-family: 'Varela Round', serif;
    font-size: 1.4rem;
    text-decoration: none;
    color: inherit;
  }

  .link {
    display: inline-block;
    padding: 1rem;
    color: #fff;
    letter-spacing: 1px;
    font-family: 'Varela Round', serif;
    font-size: 1rem;
    text-decoration: none !important;

    @media (min-width: 768px) {
      margin-right: 2rem;
      font-size: 1.2rem;
    }
  }

  .shopbox {
    background-color: #a239ca;
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .shoplink {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .drawer {
    width: 290px;
    flex-shrink: 0;
  }

  .drawerPaper {
    width: 290px;
  }

  .drawerContainer {
    padding: 1rem;
    justify-content: center;
  }

  .shopNow {
    background-color: #a239ca;
    margin-right: 1rem;
    &:hover {
      color: #000;
    }
  }

  .shopNowLink {
    text-decoration: none;
    color: #fff;
    font-family: 'Varela Round', serif;
    font-size: 1.1rem;

    &:hover {
      color: #000;
    }
  }

  .checkoutContainer {
    margin-top: 1.5rem;
    text-align: center;
  }

  .desktopMenu {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
      display: none;
    }
  }

  .mobileMenu {
    color: #fff;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .mobileCreateCard {
    margin: auto 0 auto auto;
  }

  .hide {
    display: none;
  }

  .menu-text {
    color: #000 !important;
  }
`;

export default HeaderMenuWrapper;
