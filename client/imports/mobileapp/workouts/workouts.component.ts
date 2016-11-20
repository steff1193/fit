import { Component } from '@angular/core';
import { TitleController } from "../app.component";
import { CommonWorkoutsComponent } from "../../both/workouts/workouts.component";
import { NavController } from "ionic-angular";
import { Workout } from "../../../../both/models/workout-and-exercies";

import template from './workouts.component.html';

@Component({
    selector: 'workouts',
    template
})
export class WorkoutsComponent extends CommonWorkoutsComponent implements TitleController {

    constructor(private navCtrl: NavController) {
        super();
    }

    getTitle() {
        return "Workouts";
    }

    add() {
        // this.navCtrl.push(WorkoutComponent);
    }

    edit(workout: Workout) {
        console.log(JSON.stringify(workout));
        // this.navCtrl.push(WorkoutComponent, { "workout": workout });
    }

}
