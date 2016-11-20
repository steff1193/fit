import { MeteorComponent } from "angular2-meteor";
import { ExerciseTemplate } from "../../../../both/models/workout-and-exercies";
import { ExerciseTemplatesCollection } from "../../../../both/collections/exercise-templates.collection";

export class CommonExerciseComponent extends MeteorComponent {

    creatingNew: boolean;

    constructor(private exercise: ExerciseTemplate) {
        super();
        if (!this.exercise) {
            console.log("exercise not passed to constructor - creating new");
            this.creatingNew = true;
            this.exercise = {
                ownerUserId: Meteor.userId(),
                availableTrainees: false,
                name: "",
                description: "",
                variables: [
                    {name: "Total weight", value: 30, unit: "kilos"},
                    {name: "Repetitions", value: 10, unit: "repetitions"}
                ]
            };
        } else {
            console.log("exercise passed to constructor");
            this.creatingNew = false;
            this.exercise = Object.assign({}, this.exercise);
        }
    }

    ok() {
        if (this.creatingNew) {
            console.log("inserting new exercise: " + JSON.stringify(this.exercise));
            Meteor.call("insertExerciseTemplate", this.exercise);
        } else {
            console.log("updating exercise: " + JSON.stringify(this.exercise) + ", for _id = " + this.exercise._id);
            Meteor.call("updateExerciseTemplate", this.exercise);
        }
    }

}