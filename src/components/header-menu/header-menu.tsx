import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import {
  AppBar,
  Toolbar,
  Typography,
  Theme,
  IconButton,
  Divider,
  Drawer,
  Button,
  Grid,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import { useStateMachine } from 'little-state-machine';
import jwt_decode from 'jwt-decode';
import { get } from 'lodash';

import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import CollectionCardOrder from '../../_/organisms/collection-card-order.organism';
import updateUser from '@src:utils/update-user.util';
import { ExecGraphQL, globalToken } from '@src:api/client';
import { GET_ORDER_CART } from '@src:graphql/order/get-order-cart-qry.gql';
import { LOGOUT } from '@src:graphql/auth/logout-qry.gql';
import { REFRESH_TOKEN } from '@src:graphql/auth/refresh-token-qry.gql';
import HeaderMenuWrapper from './header-menu-wrapper';

const drawerWidth = 290;

const getOrderCartRequest = async (variables: any) => {
  const data = await ExecGraphQL(GET_ORDER_CART, variables);
  if (data && data.error) {
    throw new Error(data.message);
  }
  return data;
};

// @ts-ignore
const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    width: '290px',
  },
  mobileDrawerPaper: {
    width: '200px',
  },
}));

export const HeaderMenu = () => {
  const classes = useStyles({});
  const { actions } = useStateMachine({ updateUser });
  // @ts-ignore
  const { state } = useStateMachine(updateUser);
  const { user } = state;

  const [open, setOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { isLoading, error, data: orderData, refetch } = useQuery(
    'GET_ORDER_CART',
    async () =>
      ExecGraphQL(GET_ORDER_CART, {
        userId: user.id || null,
        id: user.id ? null : user.userCart,
      }),
    {
      enabled: false,
    },
  );

  const { refetch: refetchLogout } = useQuery('LOGOUT', async () => ExecGraphQL(LOGOUT), {
    enabled: false,
  });

  const { refetch: refetchToken } = useQuery('REFRESH_TOKEN', async () => ExecGraphQL(REFRESH_TOKEN), {
    onSettled: (data) => {
      const accessToken = get(data, 'RefreshToken.accessToken');
      if (accessToken) {
        const { email, id, role } = jwt_decode(accessToken) as any;
        actions.updateUser({ email, id, role, isAuth: true });
        globalToken.accessToken = accessToken;
      }
    },
  });

  useEffect(() => {
    if (user.userCart || user.id) {
      refetch();
      actions.updateUser({
        refetchOrder: refetch,
        // @ts-ignore
      });
    }
  }, [user.userCart, user.id, globalToken.accessToken]);

  useEffect(() => {
    if (!user.isAuth) {
      refetchToken();
    }
  }, [user.isAuth]);

  useEffect(() => {
    if (user.isCartShown) {
      handleDrawerOpen();
    }
  }, [user.isCartShown]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    actions.updateUser({
      isCartShown: false,
    });
  };

  const handleMobileMenuOpen = () => {
    setOpenMobileMenu(true);
  };

  const handleMobileMenuClose = () => {
    setOpenMobileMenu(false);
  };

  const handleLogout = () => {
    actions.updateUser({ email: null, id: null, role: null, isAuth: false });
    refetchLogout();
    globalToken.accessToken = '';
    navigate('/auth/signin');
  };

  const renderDrawer = () => {
    // @ts-ignore
    const getOrder = get(orderData, ['getOrder']);
    if (!getOrder && isLoading) {
      return 'Loading...';
    }

    if (!getOrder || error || (getOrder.productDetails && getOrder.productDetails.length === 0)) {
      return (
        <Typography variant='h6' gutterBottom>
          Your cart is currently empty.
        </Typography>
      );
    }

    const productDetails = getOrder.productDetails;

    const productDetailsRender = productDetails.map((productDetail: any) => {
      return (
        <Grid item xs={7} key={`${productDetail.id}`}>
          <CollectionCardOrder productDetail={productDetail} />
        </Grid>
      );
    });
    return (
      <>
        {productDetailsRender}
        <Grid item xs={12} className='checkoutContainer'>
          <Button size='medium' color='primary' variant='contained'>
            <Link to='/checkout' className='toolbarTitleText' onClick={handleDrawerClose}>
              Checkout
            </Link>
          </Button>
        </Grid>
      </>
    );
  };

  const renderSignIn = () => {
    if (user.isAuth) {
      return (
        <div className='link'>
          <IconButton color='inherit' aria-label='open drawer' edge='end' onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </div>
      );
    }

    return (
      <Link to='/auth/signin' className='link'>
        <PersonIcon />
      </Link>
    );
  };

  const renderMenus = () => {
    const desktopMenus = (
      <nav className='desktopMenu'>
        <Link to='/contactus' className='link'>
          CONTACT US
        </Link>
        {renderSignIn()}
        <div className='link'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            className={`${open ? 'hide' : ''}`}
          >
            <ShoppingCartIcon />
          </IconButton>
        </div>
        <Button variant='contained' className='shopNow'>
          <Link to='/collections' className='shopNowLink'>
            CREATE YOUR CARD
          </Link>
        </Button>
      </nav>
    );

    const mobileMenus = (
      <>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='end'
          onClick={handleMobileMenuOpen}
          className='mobileMenu'
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' color='inherit' noWrap className='mobileToolbarTitle mobileMenu'>
          <Link to='/' className='toolbarTitleText'>
            Sportcards
          </Link>
        </Typography>
        <Button variant='contained' className='shopNow mobileMenu mobileCreateCard'>
          <Link to='/collections' className='shopNowLink'>
            CREATE
          </Link>
        </Button>
      </>
    );

    return (
      <>
        {desktopMenus}
        {mobileMenus}
      </>
    );
  };

  const renderShoppingCartDrawer = () => {
    return (
      <Drawer
        className='drawer'
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>{true ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
          <Typography gutterBottom variant='h6' className='collection-card-name'>
            Shopping Cart
          </Typography>
        </div>
        <Divider />
        <div className='drawerContainer'>
          <Grid container justify='center'>
            {renderDrawer()}
          </Grid>
        </div>
      </Drawer>
    );
  };

  const renderMobileMenuDrawer = () => {
    return (
      <Drawer
        anchor='left'
        open={openMobileMenu}
        onClose={handleMobileMenuClose}
        classes={{
          paper: classes.mobileDrawerPaper,
        }}
        PaperProps={{ component: HeaderMenuWrapper }}
      >
        <div role='presentation' onClick={handleMobileMenuClose} onKeyDown={handleMobileMenuClose}>
          <List className='drawer-list'>
            <Link to='/' className='link'>
              <ListItem button>
                <ListItemIcon className='menu-icon'>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText className='menu-text'>HOME</ListItemText>
              </ListItem>
            </Link>

            {!state.user.isAuth && (
              <Link to='/auth/signin' className='link'>
                <ListItem button>
                  <ListItemIcon className='menu-icon'>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText className='menu-text'>SIGN IN</ListItemText>
                </ListItem>
              </Link>
            )}

            {state.user.isAuth && (
              <Link to='/' className='link' onClick={handleLogout}>
                <ListItem button>
                  <ListItemIcon className='menu-icon'>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText className='menu-text'>LOGOUT</ListItemText>
                </ListItem>
              </Link>
            )}
            <Link to='/' onClick={handleDrawerOpen} className={`${open ? 'hide' : ''} link`}>
              <ListItem button>
                <ListItemIcon className='menu-icon'>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText className='menu-text'>CART</ListItemText>
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    );
  };

  return (
    <HeaderMenuWrapper>
      <AppBar position='fixed' color='default' elevation={0} className='appBar'>
        <Toolbar className='toolBar'>
          <Typography variant='h6' color='inherit' noWrap className='toolbarTitle'>
            <Link to='/' className='toolbarTitleText'>
              Sportcards
            </Link>
          </Typography>
          {renderMenus()}
        </Toolbar>
      </AppBar>
      {renderShoppingCartDrawer()}
      {renderMobileMenuDrawer()}
    </HeaderMenuWrapper>
  );
};

export default HeaderMenu;
