import { Component, OnInit } from '@angular/core';
import { animFadeIn } from '../../../shared/animation/animfadein';

@Component({
  selector: 'wa-register',
  templateUrl: './register.component.html',
  styles: [
  ],
  animations:[
    animFadeIn
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
