import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ProtectedModule } from '../protected/protected.module';
import { PublicModule } from '../public/public.module';
import { FootbarComponent } from './components/footbar/footbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToastrComponent } from './components/toastr/toastr.component';
import { AuthInterceptor } from './interceptors/auth.interceptor.ts.service';

@NgModule({
  declarations: [
    NavbarComponent,
    FootbarComponent,
    PageNotFoundComponent,
    LoaderComponent,
    ToastrComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    FootbarComponent,
    PageNotFoundComponent,
    LoaderComponent,
    ToastrComponent
  ],
  providers: [
    {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true
    }
   ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
     throw new Error('CoreModule is already loaded.');
    }
   }
 }
