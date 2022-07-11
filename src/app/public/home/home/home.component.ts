import { Component, OnInit } from '@angular/core';
import { animFadeIn } from 'src/app/shared/animation/animfadein';

@Component({
  selector: 'wa-home',
  templateUrl: './home.component.html',
  styles: [
  ],
  animations:[
    animFadeIn
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
