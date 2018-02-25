import { PhonesState } from "./phones.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getPhonesState = createFeatureSelector<PhonesState>('phonesState');

export const getPhones = createSelector(
    getPhonesState, 
    (state: PhonesState) => state.phones
); 