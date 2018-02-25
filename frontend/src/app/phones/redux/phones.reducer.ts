import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './phones.actions';
import { PhonesState } from './phones.state';

export const initialState: PhonesState = { phones: [
  {
    name:'initial phone 1'
  },
  {
    name:'initial phone 2'
  }
]};

export function reducer(state = initialState, action: fromActions.All): PhonesState {
  switch(action.type) {
    case fromActions.LOAD_PHONES: {
      console.log('loading phone');
      return state;
    }
    case fromActions.LOAD_PHONES_SUCCESS: {
      console.log('load phones ok');
      return { phones: action.payload} as PhonesState;
    } 
    case fromActions.LOAD_PHONES_ERROR: {
      console.log('load phones KO');
      return { phones: []} as PhonesState;
    } 
    default: {
      return state;
    }
  }	
}
