import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { MeteorObservable, ObservableCursor } from "meteor-rxjs";
import { MeteorComponent } from "angular2-meteor";

import { Workout } from "../../../../both/models/workout-and-exercies";
import { WorkoutsCollection } from "../../../../both/collections/workouts.collection";

export class CommonWorkoutsComponent extends MeteorComponent implements OnInit, OnDestroy {

    workoutsSub: Subscription;
    workouts : Observable<Workout[]>;

    private firstAutorun: boolean = true;
    loading: boolean = true;

    ngOnInit() {
        console.log("ngOnInit called");

        this.workoutsSub = MeteorObservable.subscribe('workouts', { sort: { name : -1 } }).subscribe(() => {
            this.workouts = WorkoutsCollection.find({}, { sort: { name : -1 } }).zone();
        });

    }

    ngOnDestroy() {
        console.log("ngOnDestroy called");

        this.workoutsSub.unsubscribe();
    }

}
