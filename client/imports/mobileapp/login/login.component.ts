import { Component, AfterViewInit } from '@angular/core';
import { MeteorComponent } from "angular2-meteor";
import { NavController, MenuController } from "ionic-angular";
import { ExerciseTemplatesComponent } from "../exercise-templates/exercise-templates.component";
//import { WorkoutsComponent } from "../workouts/workouts.component";
import { TitleController } from "../app.component";

import template from './login.component.html';

@Component({
  template
})
export class LoginComponent extends MeteorComponent implements AfterViewInit, TitleController {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {
    super();
  }

  getTitle() {
    return "Sign in";
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    if (Meteor.loggingIn()) {
      this.navCtrl.push(ExerciseTemplatesComponent /*WorkoutsComponent*/);
    }
  }

  loginFacebook() {
    Meteor.loginWithFacebook(
        {
          requestPermissions: ["email"]
        },
        function(err) {
          //button.removeClass('disabled loading');
          if (err) {
            //pageSession.set("errorMessage", err.message);
            return false;
          } else {
            this.navCtrl.push(ExerciseTemplatesComponent /*WorkoutsComponent*/);
            this.menuCtrl.close();
            this.menuCtrl.enable(true, 'authenticated');
            this.menuCtrl.enable(false, 'unauthenticated');
          }
        }.bind(this)
    );
  }
}
