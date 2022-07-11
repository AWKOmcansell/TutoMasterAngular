import { Component, OnInit } from '@angular/core';
import { animFadeIn } from '../shared/animation/animfadein';

@Component({
  selector: 'wa-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss'],
  animations: [
    animFadeIn
  ]
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
