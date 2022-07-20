import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { User } from './../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  readonly user$: Observable<User | null> = this.user.asObservable();


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User | null> {

    //   private userauth = new (User);

    // if(userauth.email === email && userauth.mdp === mdp) {
    // this.user$.next(userauth);
    // }
    return of(new User());
  }


  register(name: string, email: string, password: string): Observable<User | null> {

    const url: string = `${environment.firebase.auth.baseURL}/signupNewUser?key=${environment.firebase.apiKey}`;

    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(url, data, httpOptions).pipe(
      switchMap((data: any) => {
        const jwt: string = data.idToken;
        const user = new User({
          email: data.email,
          id: data.localId,
          name: name
        });

        return this.http.post<User>(url, data, httpOptions);
      })
    );
  }

  //  logout(): void {
  //   // return of(null);
  //  }
}
