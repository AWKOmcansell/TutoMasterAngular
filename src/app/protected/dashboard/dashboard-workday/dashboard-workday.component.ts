import { Component, Input } from '@angular/core';
import { interval, Observable, of, Subject } from 'rxjs';
import { delay, map, takeUntil, takeWhile } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { WorkdaysService } from 'src/app/core/services/workdays.service';
import { Task } from 'src/app/shared/models/task';
import { User } from 'src/app/shared/models/user';
import { Workday } from 'src/app/shared/models/workday';

@Component({
  selector: 'wa-dashboard-workday',
  templateUrl: './dashboard-workday.component.html',
  styleUrls: ['./dashboard-workday.component.scss']
})
export class DashboardWorkdayComponent {

  @Input() workday: Workday;
  isPomodoroActive: boolean;
  startPomodoro$: Subject<string>;
  cancelPomodoro$: Subject<string>;
  completePomodoro$: Subject<string>;
  currentProgress: number;
  maxProgress: number;
  pomodoro$: Observable<number>;
  isWorkdayComplete: boolean;

  constructor(private workdaysService: WorkdaysService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isWorkdayComplete = (this.task === undefined);
    this.isPomodoroActive = false;
    this.startPomodoro$ = new Subject();
    this.cancelPomodoro$ = new Subject();
    this.completePomodoro$ = new Subject();
    this.currentProgress = 0;
    const user: User|null = this.authService.currentUser;
    if(user) {
     this.maxProgress = user.pomodoroDuration;
    }
    this.pomodoro$ = interval(1000).pipe(
      takeUntil(this.cancelPomodoro$),
      takeUntil(this.completePomodoro$),
      takeWhile(progress => progress <= this.maxProgress),
      map(x => x + 1)
    );
  }

  get task(): Task | undefined {
    return this.workday.tasks.find((task: Task) => task.todo > task.done);
  }

  startPodomoro() {
    this.isPomodoroActive = true;
    this.startPomodoro$.next('start');

    this.pomodoro$.subscribe(currentProgress => {
      this.currentProgress = currentProgress;

      if (currentProgress === this.maxProgress) {
        of(0).pipe(delay(500)).subscribe(_ => this.completePomodoro())
      }
    });

  }

  cancelPomodoro() {
    this.isPomodoroActive = false;
    this.cancelPomodoro$.next('cancel');
  }

  completePomodoro() {
    this.isPomodoroActive = false;
    this.completePomodoro$.next('complete');

    if (this.task) {
      this.task.done++;
    }

    this.isWorkdayComplete = (this.task === undefined);

    this.workdaysService.update(this.workday).subscribe();

  }



}
