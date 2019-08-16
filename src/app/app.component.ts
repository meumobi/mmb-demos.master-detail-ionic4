import { Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { ItemDetailPage } from '@items/pages/item-detail/item-detail.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';

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
    private deeplinks: Deeplinks,
    private oneSignal: OneSignal,
    // private state: RouterState
  ) {
    // const state: RouterState = router.routerState;
    // const snapshot: RouterStateSnapshot = state.snapshot;

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.oneSignal.startInit('e83fce5e-ebc8-475b-b615-fa5f1e11a129', '236514035211');
      this.oneSignal.handleNotificationOpened().subscribe(
        data => {
        console.log(data);
      });
      this.oneSignal.endInit();
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const state: RouterState = this.router.routerState;
      const snapshot: RouterStateSnapshot = state.snapshot;
      console.log(snapshot.url);
      this.deeplinks.route({
        '/items/detail/:id': ItemDetailPage,
      }).subscribe(match => {
        console.log('Successfully matched route', match);
        console.log(match.$args);
        this.router.navigate([match.$link.path]);
      }, nomatch => {
        console.warn('Got a deeplink that didn\'t match', nomatch);
      });
      this.authService.authState.subscribe( res => {
        console.log('Auth State changed: ', res);
        console.log('Router snapshot: ', snapshot);
        console.log('Location: ', location.pathname);
        if (res) {
          this.router.navigate([location.pathname]);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
}
