import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from './action-types';

@Injectable({
  providedIn: 'root'
})
export class AuthEfects {

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.login),
      tap(action => localStorage.setItem("User", JSON.stringify(action.user)))
    ),
    { dispatch: false });

  logout$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.logout),
      tap(action => {
        localStorage.removeItem('User');
        this.router.navigateByUrl('./login')
      })
    ), { dispatch: false });

  constructor(private action$: Actions, private router: Router) {
    // action$.subscribe(action => {
    //   if (action.type === "[Login Page] User Login") {
    //     localStorage.setItem("User", JSON.stringify(action['user']));
    //   }
    // })
  }
}
