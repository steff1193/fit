import 'angular2-meteor-polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Meteor } from "meteor/meteor";
import { AppModule as WebAppModule } from './imports/app';
import { AppModule as MobileAppModule } from './imports/mobileapp';
import ionicSelector from 'ionic-selector';

enableProdMode();

if (Meteor.isCordova) {
   runMobile();
} else {
   runWeb();
}

function runWeb() {
   Meteor.startup(() => {
      platformBrowserDynamic().bootstrapModule(WebAppModule);
   });
}

function runMobile() {
   document.addEventListener('deviceready', () => {
      ionicSelector('app');
      platformBrowserDynamic().bootstrapModule(MobileAppModule);
   });
}
