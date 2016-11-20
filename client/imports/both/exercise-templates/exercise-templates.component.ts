import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { MeteorObservable, ObservableCursor } from "meteor-rxjs";
import { MeteorComponent } from "angular2-meteor";

import { ExerciseTemplate } from "../../../../both/models/workout-and-exercies";
import { ExerciseTemplatesCollection } from "../../../../both/collections/exercise-templates.collection";

export class CommonExerciseTemplatesComponent extends MeteorComponent implements OnInit, OnDestroy {

    exerciseTemplatesSub: Subscription;
    exerciseTemplates : Observable<ExerciseTemplate[]>;

    private firstAutorun: boolean = true;
    loading: boolean = true;

    ngOnInit() {
        console.log("ngOnInit called");

        this.exerciseTemplatesSub = MeteorObservable.subscribe('exerciseTemplates', { sort: { name : -1 } }).subscribe(() => {
            this.exerciseTemplates = ExerciseTemplatesCollection.find({}, { sort: { name : -1 } }).zone();
        });

        /*this.autorun(() => {
            console.log("autorun called");

            if (this.firstAutorun) {
                this.exerciseTemplates = ExerciseTemplatesCollection.find({}, { sort: { name : -1 } }).zone();
                this.firstAutorun = false;
            }

            this.subscribe('exerciseTemplates', { sort: { name : -1 } }, () => {
                console.log("subscribe callback called");
                this.loading = false;
            }, true);
        }, true);*/
    }

    ngOnDestroy() {
        console.log("ngOnDestroy called");

        this.exerciseTemplatesSub.unsubscribe();
    }

}
