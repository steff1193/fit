import { WorkoutsCollection } from "../../../both/collections/workouts.collection";

function buildQuery(workoutId?: string): Object {
    // TODO find from user/profile database via this.userId/Meteor.user
    const isAvailable = {
        $or: [
            { creatorUserId: this.userId },
            { forUserId: this.userId }
        ]
    };

    if (workoutId) {
        return { $and: [{ _id: workoutId }, isAvailable] };
    }

    return isAvailable;
}

Meteor.publish('workouts', function(options: any) {
    const selector = buildQuery.call(this, null);

    return WorkoutsCollection.find(selector, options);;
});

Meteor.publish('workout', function(workoutId: string) {
    return WorkoutsCollection.find(buildQuery.call(this, workoutId));
});
