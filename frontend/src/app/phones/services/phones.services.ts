
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Phone } from '../models/phones.model';
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";

@Injectable()
export class PhonesService {
  constructor(private http: HttpClient) {}

  getPhones() {
    return this.http.get<Phone[]>(
      `${environment.backendEndPoint}/v1/phones`
    )
  }
}