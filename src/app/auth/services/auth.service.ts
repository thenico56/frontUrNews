import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { LoginUser } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = ''
  private _auth: LoginUser | undefined

  constructor(private http: HttpClient) { }

  get auth(): LoginUser {
    return { ...this._auth! }
  }

  //añadir peticion get para comprobar el usuario a través de un token
  public login(user: LoginUser): Observable<LoginUser> { 
    return this.http.post<LoginUser>(this.URL, user).pipe(
      tap(resp => this._auth = resp),
      tap(resp => { localStorage.setItem('token', resp.token ) })
    )
  }

  public logout() { this._auth = undefined }

  //Añadir peticion get para comprobar usuario
  public verifeAuthentication() {
    if (!localStorage.getItem('token')) {
      return of(false)
    }
    
    return this.http.get<LoginUser>(`${this.URL}`).pipe(
        map(auth => {
          this._auth = auth
          return true
        })
      )

  }


}
