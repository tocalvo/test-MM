import { Action } from '@ngrx/store'
import { Phone } from '../models/phones.model';


export const LOAD_PHONES = 'loadPhones';
export class LoadPhonesAction implements Action {
  readonly type = LOAD_PHONES;
}

export const LOAD_PHONES_SUCCESS = 'loadPhonesSuccess'
export class LoadPhonesSuccessAction implements Action {
    readonly type = LOAD_PHONES_SUCCESS;
    constructor(public payload: Phone[]) {}
}

export const LOAD_PHONES_ERROR = 'loadPhonesError'
export class LoadPhonesErrorAction implements Action {
    readonly type = LOAD_PHONES_ERROR;
    constructor(public payload: any) {}
}


export type All = 
 | LoadPhonesAction
 | LoadPhonesSuccessAction
 | LoadPhonesErrorAction