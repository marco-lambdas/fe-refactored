import 'little-state-machine';

declare module 'little-state-machine' {
  interface GlobalState {
    user: {
      id: number;
      email: string | null;
      role: string | null;
      isAdmin: boolean;
      userCart: number | undefined;
      refetchOrder: any;
      isAuth: boolean;
      isCartShown: boolean;
    };
    cardDetails: {
      image: File | null;
      previewImage: string;
      playerName: string;
      position: string;
      rating: string | number;
      country: string;
      countryImage: string;
      club: string;
      clubImage: File | null;
      stat1: string;
      stat1Value: string | number;
      stat2: string;
      stat2Value: string | number;
      stat3: string;
      stat3Value: string | number;
      stat4: string;
      stat4Value: string | number;
      stat5: string;
      stat5Value: string | number;
      stat6: string;
      stat6Value: string | number;
      loader: boolean;
    };
  }
}
