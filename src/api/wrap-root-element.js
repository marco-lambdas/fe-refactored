import React from 'react';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createStore({
  user: {
    id: null,
    email: null,
    role: null,
    isAdmin: false,
    userCart: undefined,
    isAuth: false,
    isCartShown: false,
    refetchOrder: () => {},
  },
  cardDetails: {
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
  },
});

export const wrapRootElement = ({ element }) => (
  <QueryClientProvider client={queryClient}>
    <StateMachineProvider>{element}</StateMachineProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
