import { Phone } from "../models/phones.model";

export interface PhonesState {
	phones: Phone[];
}

export interface AppState {
	phonesState: PhonesState;
}
