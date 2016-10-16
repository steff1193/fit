import { Component } from '@angular/core';
import { TitleController } from "../app.component";
import { CommonExerciseTemplatesComponent } from "../../both/exercise-templates/exercise-templates.component";

import template from './exercise-templates.component.html';

@Component({
    selector: 'exercise-templates',
    template
})
export class ExerciseTemplatesComponent extends CommonExerciseTemplatesComponent implements TitleController {

    getTitle() {
        return "Exercise Templates";
    }

}
