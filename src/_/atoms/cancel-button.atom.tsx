import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStateMachine } from 'little-state-machine';
import { navigate } from 'gatsby';

import updateCardDetails from '../../utils/update-card-details.util';

const useStyles = makeStyles((theme) => ({
  cancelButtonStyle: {
    backgroundColor: '#b82601',
    textDecoration: 'None',
  },
  removeUnderline: {
    textDecoration: 'None',
  },
}));

const CancelButton = () => {
  const classes = useStyles();

  const { actions } = useStateMachine({ updateCardDetails });

  const handleCancelButtonClick = () => {
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
    navigate(`/collections`);
  };

  return (
    <Button
      color='primary'
      variant='contained'
      type='button'
      className={classes.cancelButtonStyle}
      onClick={handleCancelButtonClick}
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
