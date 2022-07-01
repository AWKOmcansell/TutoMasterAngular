import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ProtectedModule } from '../protected/protected.module';
import { PublicModule } from '../public/public.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
     throw new Error('CoreModule is already loaded.');
    }
   }
 }
