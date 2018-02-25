import { NgModule } from '@angular/core'
import { PhoneListContainerComponent } from './containers/phones-container/phones-container.component';
import { PhoneListComponent } from './components/phones-list/phones-list.component';
import { CommonModule } from '@angular/common';
import { PhonesService } from './services/phones.services';
import * as fromPhones from './redux/phones.reducer'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PhonesEffects } from './redux/phones.effects';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
    imports:[
        CommonModule,
        HttpClientModule,
        NgHttpLoaderModule,
        LazyLoadImageModule,
        StoreModule.forFeature('phonesState', fromPhones.reducer),
        EffectsModule.forFeature([PhonesEffects])
    ],
    declarations: [
        PhoneListContainerComponent,
        PhoneListComponent,
        PhoneDetailComponent
    ],
    exports:[
        PhoneListContainerComponent
    ],
    providers:[
        PhonesService
    ]
  })
  export class PhonesModule {}