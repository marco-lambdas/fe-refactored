import React, { useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { TransitionProps } from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginTop: '30px',
      textAlign: 'center',
    },
  }),
);

const ReactCameraWrapper = styled.div`
  @media (max-width: 767px) {
    width: 200px;
    height: 50px;
    margin: 0 auto;
  }

  .cameraButton {
    display: block;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    background: linear-gradient(40deg, #a239ca, #4717f6);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease-out;
  }

  .cameraButton:hover {
    outline: none;
    transform: scale(1.02);
  }

  .cameraIcon {
    margin-right: 15px;
  }
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface Props {
  setImage: React.Dispatch<any>;
}

const ReactCamera: React.FC<Props> = ({ setImage }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleTakePhotoAnimationDone = (uri: any) => {
    setImage(uri);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Typography variant='h5' className={classes.title}>
          Take Photo
        </Typography>
        <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone} />
      </Dialog>
      <ReactCameraWrapper>
        <Button className='cameraButton' onClick={handleOpen}>
          <CameraAltIcon className='cameraIcon' />
          {'Take a photo'}
        </Button>
      </ReactCameraWrapper>
    </>
  );
};

export default ReactCamera;
