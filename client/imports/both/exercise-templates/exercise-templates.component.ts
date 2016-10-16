import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ObservableCursor } from "meteor-rxjs";
import { MeteorComponent } from "angular2-meteor";

import { ExerciseTemplate } from "../../../../both/models/workout-and-exercies";
import { ExerciseTemplatesCollection } from "../../../../both/collections/exercise-templates.collection";

export class CommonExerciseTemplatesComponent extends MeteorComponent implements OnInit {

    exerciseTemplates : Observable<ExerciseTemplate[]>;

    loading: boolean = false;

    ngOnInit() {
        this.exerciseTemplates = ExerciseTemplatesCollection.find({}, {
            sort: { name : -1 }
        }).zone();
        this.autorun(() => {
            const options = {
                sort: { name : -1 }
            };

            this.loading = true;

            this.subscribe('exerciseTemplates', options, () => {
                this.loading = false;
            }, true);
        }, true);
    }

}
