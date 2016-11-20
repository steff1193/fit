import { Component } from '@angular/core';
import { CommonExerciseComponent } from "../../both/exercise/exercise.component";
import { TitleController } from "../app.component";
import { NavController, NavParams } from "ionic-angular";

import template from './exercise.component.html';

@Component({
    selector: 'exercise',
    template
})
export class ExerciseComponent extends CommonExerciseComponent implements TitleController {

    constructor(private navCtrl: NavController, private params: NavParams) {
        super((params && params.get("exerciseTemplate"))?params.get("exerciseTemplate"):null);
    }

    getTitle() {
        return "Exercise";
    }

    ok() {
        super.ok();
        this.navCtrl.pop();
    }

    cancel() {
        this.navCtrl.pop();
    }

}
