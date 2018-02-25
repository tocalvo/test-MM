import { Component, Input } from '@angular/core'

import { Phone } from '../../models/phones.model';

@Component({
  selector: 'testmm-phone-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.scss']
})
export class PhoneListComponent {
  @Input() phones: Phone[]

  constructor() {
  }
}