import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  save(user: User): Observable<User | null> {
    const url =
      `${environment.firebase.firestore.baseURL}/users?key=
    ${environment.firebase.apiKey}&documentId=${user.id}`;

    const data = this.getDataForFirestore(user);
   
    return this.http.post(url, data, {}).pipe(
      switchMap((data: any) => {
        return of(this.getUserFromFirestore(data.fields));
      })
    );
  }

  update(user: User): Observable<User|null> {
    const url = `${environment.firebase.firestore.baseURL}/users/${user.id}?key=
    ${environment.firebase.apiKey}&currentDocument.exists=true`;
    const data = this.getDataForFirestore(user);
  
    
    return this.http.patch(url, data, {}).pipe(
     switchMap((data: any) => {
      return of(this.getUserFromFirestore(data.fields));
     })
    );
   }


  get(userId: string): Observable<User | null> {
    const url =
      `${environment.firebase.firestore.baseURL}:runQuery?key=
      ${environment.firebase.apiKey}`;
    const data = this.getStructuredQuery(userId);
   

    return this.http.post(url, data, {}).pipe(
      switchMap((data: any) => {
        return of(this.getUserFromFirestore(data[0].document.fields));
      })
    ); 
  }

  private getUserFromFirestore(fields: any): User {
    return new User({
      id: fields.id.stringValue,
      email: fields.email.stringValue,
      pomodoroDuration: fields.pomodoroDuration.integerValue,
      name: fields.name.stringValue,
      avatar: fields.avatar.stringValue
    });
  }

  private getDataForFirestore(user: User): Object {
    return {
      fields: {
        id: { stringValue: user.id },
        email: { stringValue: user.email },
        name: { stringValue: user.name },
        avatar: { stringValue: user.avatar },
        pomodoroDuration: { integerValue: user.pomodoroDuration }
      }
    };
  }

  private getStructuredQuery(userId: string): Object {
    return {
      'structuredQuery': {
        'from': [{
          'collectionId': 'users'
        }],
        'where': {
          'fieldFilter': {
            'field': { 'fieldPath': 'id' },
            'op': 'EQUAL',
            'value': { 'stringValue': userId }
          }
        },
        'limit': 1
      }
    };
  }
}
