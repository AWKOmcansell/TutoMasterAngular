import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProtectedModule } from '../protected/protected.module';
import { PublicModule } from '../public/public.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootbarComponent } from './components/footbar/footbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FootbarComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent,
    FootbarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
     throw new Error('CoreModule is already loaded.');
    }
   }
 }
