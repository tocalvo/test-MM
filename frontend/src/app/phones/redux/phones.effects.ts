import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap, withLatestFrom, catchError } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { PhonesService } from "../services/phones.services";
import { LOAD_PHONES, LOAD_PHONES_SUCCESS, LOAD_PHONES_ERROR, LoadPhonesSuccessAction, LoadPhonesErrorAction } from "./phones.actions";
import { Actions, Effect } from '@ngrx/effects'
import { Store } from "@ngrx/store";
import { Phone } from "../models/phones.model";

@Injectable()
export class PhonesEffects {
  constructor(  private actions$ : Actions, 
                private state$: Store<any>,
                private phoneService : PhonesService 
            ) {
  }

    @Effect()
    getPhones = this.actions$
    .ofType(LOAD_PHONES)
    .pipe(
      withLatestFrom(this.state$),
      switchMap(([action, state]) => {

        return this.phoneService
          .getPhones()
          .pipe(
            map((res: Phone[]) => new LoadPhonesSuccessAction(res)),
            catchError(error => of(new LoadPhonesErrorAction(error)))
          )
      })
    )
}