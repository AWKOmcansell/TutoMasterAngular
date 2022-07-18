import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from './../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  readonly user$: Observable<User | null> = this.user.asObservable();


  constructor() { }

  login(email: string, password: string): Observable<User|null> {

  //   private userauth = new (User);

  // if(userauth.email === email && userauth.mdp === mdp) {
  // this.user$.next(userauth);
  // }
  return of(new User());
  }


  register(name: string, email: string, password: string): Observable<User|null> {
    return of(new User());
   }

   logout(): void {
    // return of(null);
   }

}
