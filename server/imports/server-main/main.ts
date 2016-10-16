import {ExerciseTemplatesCollection} from "../../../both/collections/exercise-templates.collection";
import {SystemTemplates} from "../../../both/models/workout-and-exercies";
import {ExerciseTemplate} from "../../../both/models/workout-and-exercies";
import {ExerciseKind} from "../../../both/models/workout-and-exercies";
import {ExerciseTemplatePrivacy} from "../../../both/models/workout-and-exercies";

import '../../imports/publications/exercise-templates.publications';

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
        name: "Jane Fonda",
        description: "Lay on your side, underarm up holding your head. Now move the stretched upper leg up from horizontal at far as you can and down again",
        ownerUserId: "__system__",
        privacy: ExerciseTemplatePrivacy.Public,
        exerciseKind: ExerciseKind.Repetition
      },
      {
        name: "Down licking, up banging",
        description: "Two hands and two feet on the ground. Always stretched arms and legs. Now move your ass up as far as you can while pulling your head in between your arms, then move your ass forward and all the way down to the ground (remember arms still stretched)",
        ownerUserId: "__system__",
        privacy: ExerciseTemplatePrivacy.Public,
        exerciseKind: ExerciseKind.Repetition
      }
    ]
    fakeExerciseTemplates.forEach((template: ExerciseTemplate) => {
      if (ExerciseTemplatesCollection.find({name: template.name}).cursor.count() === 0) {
        ExerciseTemplatesCollection.insert(template);
      }
    });

  }

}
