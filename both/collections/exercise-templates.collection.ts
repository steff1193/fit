import { MongoObservable } from 'meteor-rxjs';
import { ExerciseTemplate } from "../models/workout-and-exercies";

export const ExerciseTemplatesCollection = new MongoObservable.Collection<ExerciseTemplate>('exerciseTemplates');

function loggedIn() {
    return !!Meteor.user();
}

ExerciseTemplatesCollection.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
