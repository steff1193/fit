import {WorkoutsCollection} from "../../../both/collections/workouts.collection";
import {ExerciseTemplatesCollection} from "../../../both/collections/exercise-templates.collection";
import {SystemTemplates, ExerciseTemplate} from "../../../both/models/workout-and-exercies";

import '../../imports/publications/exercise-templates.publications';
import '../../imports/publications/workouts.publications';

export class Main {
  start(): void {
    this.initSystemExercises();
    this.initFakeData();
  }

  initSystemExercises() {
    SystemTemplates.forEach((template: ExerciseTemplate) => {
      if (ExerciseTemplatesCollection.find({name: template.name}).cursor.count() === 0) {
        ExerciseTemplatesCollection.insert(template);
      }
    });
  }

  initFakeData(): void {
    const fakeExerciseTemplates: ExerciseTemplate[] = [
      {
        ownerUserId: "__system__",
        availableTrainees: true,
        name: "Jane Fonda",
        description: "Lay on your side, underarm up holding your head. Now move the stretched upper leg up from horizontal at far as you can and down again",
        variables: [{name: "Repetitions", value: 30, unit: "repetitions"}]
      },
      {
        ownerUserId: "__system__",
        availableTrainees: true,
        name: "Down licking, up banging",
        description: "Two hands and two feet on the ground. Always stretched arms and legs. Now move your ass up as far as you can while pulling your head in between your arms, then move your ass forward and all the way down to the ground (remember arms still stretched)",
        variables: [{name: "Repetitions", value: 30, unit: "repetitions"}]
      },
      {
        ownerUserId: "__system__",
        availableTrainees: true,
        name: "Bench",
        description: "Lay down on your back on the bench. Make sure barbell is loaded with the correct amount of weight. Have someone stand above the barbell ready to help if anything goes wrong. Now lift the barbell and then pull it down to your chest and up again in full arms length a number of times",
        variables: [
          {name: "Total weight", value: 50, unit: "kilos"},
          {name: "Repetitions", value: 10, unit: "repetitions"}
        ]
      }
    ]
    fakeExerciseTemplates.forEach((template: ExerciseTemplate) => {
      if (ExerciseTemplatesCollection.find({name: template.name}).cursor.count() === 0) {
        ExerciseTemplatesCollection.insert(template);
      }
    });

  }

}
