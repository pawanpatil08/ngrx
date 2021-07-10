import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isLoggedIn } from './auth/auth.selector';
import { AuthState } from './auth/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store:Store<AuthState>,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> {
   return this.store.pipe(
      select(isLoggedIn),
      tap(isLoggedIn=>{
        if(!isLoggedIn){
          this.router.navigateByUrl('/login');
        }}
      )
    )
  }
  
}
