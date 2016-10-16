import { Inject, Component, ViewChild } from '@angular/core';
import {MeteorComponent} from "angular2-meteor";
import { NavController, ViewController, MenuController } from "ionic-angular";

import {LoginComponent} from "./login/login.component";
import {ExerciseTemplatesComponent} from "./exercise-templates/exercise-templates.component";

import template from './app.component.html';

@Component({
  template
})
export class AppComponent extends MeteorComponent {

  @ViewChild('content') nav: NavController;

  public root: any;
  public navBarTitle: string;

  constructor(public menuCtrl: MenuController) {
    super();
    this.navBarTitle = "Fit, me and you"
    this.root = (Meteor.loggingIn())?ExerciseTemplatesComponent:LoginComponent;
  }

  logout() {
    Meteor.logout();
    this.nav.setRoot(LoginComponent);
    this.menuCtrl.close();
  }

  ngAfterViewInit() {
    this.nav.viewDidEnter.subscribe(function(value) {
      if (value instanceof ViewController) {
        var vc: ViewController = <ViewController>value;
        if (typeof vc.instance !== 'undefined') {
          if (typeof vc.instance.getTitle === 'function') {
            this.navBarTitle = vc.instance.getTitle();
          }
          if (vc.instance instanceof LoginComponent) {
            this.menuCtrl.enable(false, 'authenticated');
            this.menuCtrl.enable(true, 'unauthenticated');
          } else {
            this.menuCtrl.enable(true, 'authenticated');
            this.menuCtrl.enable(false, 'unauthenticated');
          }
        }
      }
    }.bind(this));
  }

}

export interface TitleController {
  getTitle();
}

