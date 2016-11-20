import { Component } from '@angular/core';
import { TitleController } from "../app.component";
import { CommonExerciseTemplatesComponent } from "../../both/exercise-templates/exercise-templates.component";
import { NavController } from "ionic-angular";
import { ExerciseComponent } from "../exercise/exercise.component";
import { ExerciseTemplate } from "../../../../both/models/workout-and-exercies";

import template from './exercise-templates.component.html';

@Component({
    selector: 'exercise-templates',
    template
})
export class ExerciseTemplatesComponent extends CommonExerciseTemplatesComponent implements TitleController {

    constructor(private navCtrl: NavController) {
        super();
    }

    getTitle() {
        return "Exercise Templates";
    }

    add() {
        this.navCtrl.push(ExerciseComponent);
    }

    edit(exerciseTemplate: ExerciseTemplate) {
        console.log(JSON.stringify(exerciseTemplate));
        this.navCtrl.push(ExerciseComponent, { "exerciseTemplate": exerciseTemplate });
    }

}
