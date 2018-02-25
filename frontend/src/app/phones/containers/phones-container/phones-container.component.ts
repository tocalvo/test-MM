import { Component, Input } from '@angular/core'

import { Phone } from '../../models/phones.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getPhones } from '../../redux/phones.selectors';
import { LOAD_PHONES } from '../../redux/phones.actions';

@Component({
  selector: 'testmm-phones-container',
  templateUrl: './phones-container.component.html',
  styleUrls: ['./phones-container.component.scss']
})
export class PhoneListContainerComponent {

  phones$: Observable<Phone[]>
  
  constructor(public store: Store<any>) {
    this.store.dispatch({ type: LOAD_PHONES })
    this.phones$ = this.store.select(getPhones)
  }
}