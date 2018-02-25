import { Component, Input } from '@angular/core'

import { Phone } from '../../models/phones.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'testmm-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent {
  @Input() phone: Phone

  imagesUrl:string = '';
  constructor() {
      console.log(environment)
      this.imagesUrl = environment.imagesBaseUrl
  }
}