import React from 'react';
import { Link } from 'gatsby';
import { Box, Container, Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FooterWrapper from './footer-wrapper';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container component='main' maxWidth={false} className='footer-main-container'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box display='flex' justifyContent='flex-start' alignItems='center'>
              <Link to='/' className='footer-links'>
                HOME
              </Link>
              <Link to='/collections' className='footer-links'>
                SHOP
              </Link>
              <Link to='/contactus' className='footer-links'>
                CONTACT US
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className='footer-links-container'>
            <Box display='flex' justifyContent='flex-end' alignItems='center'>
              <Link to='/' className='footer-links'>
                <FacebookIcon />
              </Link>
              <Link to='/' className='footer-links'>
                <TwitterIcon />
              </Link>
              <Link to='/' className='footer-links'>
                <InstagramIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
