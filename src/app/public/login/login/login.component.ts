import { Component, OnInit } from '@angular/core';
import { animFadeIn } from '../../../shared/animation/animfadein';

@Component({
  selector: 'wa-login',
  templateUrl: './login.component.html',
  styles: [
  ],
  animations:[
    animFadeIn
  ]
})
export class LoginComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
