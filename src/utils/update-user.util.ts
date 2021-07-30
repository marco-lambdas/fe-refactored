import { GlobalState } from 'little-state-machine';
export default function updateUser(state: GlobalState, payload: any) {
  return {
    ...state,
    user: {
      ...state.user,
      ...payload,
    },
  };
}
