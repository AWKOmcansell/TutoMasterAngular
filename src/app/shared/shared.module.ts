import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';



@NgModule({
  declarations: [
    SidenavComponent,
  
  ],
  imports: [
    CommonModule,
    NgxBootstrapModule
  ],
  exports: [
    CommonModule,
    NgxBootstrapModule,
    SidenavComponent
  ]
})
export class SharedModule { }
