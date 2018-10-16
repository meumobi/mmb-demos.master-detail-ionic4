import { Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private location: Location,
    //private state: RouterState
  ) {
    //const state: RouterState = router.routerState;
    //const snapshot: RouterStateSnapshot = state.snapshot;

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const state: RouterState = this.router.routerState;
      const snapshot: RouterStateSnapshot = state.snapshot;

      this.authService.authState.subscribe( res => {
        console.log('Auth State changed: ', res);
        console.log('Router snapshot: ', snapshot);
        console.log('Location: ', location.pathname);
        if (res) {
          //this.router.navigate([snapshot.url]);
        } else {
          this.router.navigate(['login']);
        }
      })
    });
  }
}
