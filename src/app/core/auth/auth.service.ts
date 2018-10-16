import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = "X-Auth-Token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private platform: Platform
  ) { 
    this.platform.ready().then( _ => {
      this.checkToken();
    })
  }

  login() {
    this.storage.set(TOKEN_KEY, 'Bearer 123456').then( res => {
      this.authState.next(true);
    })
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then( _ => {
      this.authState.next(false);
    })
  }

  isAuthenticated() {
    return this.authState.value;
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then( res => {
      if (res) {
        this.authState.next(true);
      }
    })
  }
}
