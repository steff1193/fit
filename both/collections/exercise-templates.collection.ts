import { MongoObservable } from 'meteor-rxjs';
import { ExerciseTemplate } from "../models/workout-and-exercies";

export const ExerciseTemplatesCollection = new MongoObservable.Collection<ExerciseTemplate>('exerciseTemplates');

function loggedIn() {
    return !!Meteor.user();
}

/*ExerciseTemplatesCollection.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});*/

Meteor.methods({
    // TODO add some security here - probably sharing stuff with publications
    "insertExerciseTemplate": function (exerciseTemplate: ExerciseTemplate) {
        ExerciseTemplatesCollection.insert(exerciseTemplate);
    },
    "updateExerciseTemplate": function (exerciseTemplate: ExerciseTemplate) {
        ExerciseTemplatesCollection.update({ "_id": exerciseTemplate._id }, exerciseTemplate );
    }
});