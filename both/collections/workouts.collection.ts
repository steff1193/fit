import { MongoObservable } from 'meteor-rxjs';
import { Workout } from "../models/workout-and-exercies";

export const WorkoutsCollection = new MongoObservable.Collection<Workout>('workouts');

function loggedIn() {
    return !!Meteor.user();
}

/*WorkoutsCollection.allow({
 insert: loggedIn,
 update: loggedIn,
 remove: loggedIn
 });*/

Meteor.methods({
    // TODO add some security here - probably sharing stuff with publications
    "insertWorkout": function (workout: Workout) {
        WorkoutsCollection.insert(workout);
    },
    "updateWorkout": function (workout: Workout) {
        WorkoutsCollection.update({ "_id": workout._id }, workout );
    }
});