import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wa-workday-form-tasks-add',
  templateUrl: './workday-form-tasks-add.component.html',
  styles: [
  ]
})
export class WorkdayFormTasksAddComponent implements OnInit {
  
  @Output() addedTask = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.addedTask.emit();
   }

}
