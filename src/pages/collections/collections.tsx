import React, { useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';

import updateCardDetails from '@src:utils/update-card-details.util';
// import CollectionsContent from '../components/collections-content/collections-content';
import CollectionsHeader from '@src:components/collections-header/collections-header';
import Footer from '@src:components/footer/footer';
import HeaderMenu from '@src:components/header-menu/header-menu';
import GlobalWrapper from '@src:components/wrappers/global-wrapper';

const Shop = () => {
  const { actions } = useStateMachine({ updateCardDetails });

  useEffect(() => {
    actions.updateCardDetails({
      image: null,
      previewImage: '',
      playerName: 'Your Name',
      position: 'CAM',
      rating: '99',
      country: '',
      countryImage: '',
      club: '',
      clubImage: null,
      stat1: 'PAC',
      stat1Value: '99',
      stat2: 'SHO',
      stat2Value: '99',
      stat3: 'PAS',
      stat3Value: '99',
      stat4: 'DRI',
      stat4Value: '99',
      stat5: 'DEF',
      stat5Value: '99',
      stat6: 'PHY',
      stat6Value: '99',
    });
  }, []);

  return (
    <>
      <GlobalWrapper />
      <div style={{ minHeight: 'calc(90vh - 142px)' }}>
        <HeaderMenu />
        <CollectionsHeader />
        {/* <CollectionsContent /> */}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
