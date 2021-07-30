import { GlobalState } from 'little-state-machine';
export default function updateCardDetails(state: GlobalState, payload: any) {
  return {
    ...state,
    cardDetails: {
      ...state.cardDetails,
      ...payload,
    },
  };
}
