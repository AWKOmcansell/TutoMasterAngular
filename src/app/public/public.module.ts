import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeModule } from './home/home.module';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule
  ]
})
export class PublicModule { }
