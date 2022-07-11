import { Component, OnInit } from '@angular/core';
import { animFadeIn } from 'src/app/shared/animation/animfadein';

@Component({
  selector: 'wa-planning',
  templateUrl: './planning.component.html',
  styles: [
  ],
  animations: [
    animFadeIn
  ]
})
export class PlanningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
