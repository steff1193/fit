import { ExerciseTemplatesCollection } from "../../../both/collections/exercise-templates.collection";

function buildQuery(exerciseTemplateId?: string): Object {
    // TODO find from user/profile database via this.userId/Meteor.user
    const personalTrainersIds = [ "xxx", "yyy" ];

    console.log("personalTrainersIds: " + personalTrainersIds);

    const isAvailable = {
        $or: [
            { ownerUserId: "__system__" },
            {
                $and: [
                    { availableTrainees: true },
                    { ownerUserId: { $in: personalTrainersIds } }
                ]
            },
            { ownerUserId: this.userId }
        ]
    };

    if (exerciseTemplateId) {
        return { $and: [{ _id: exerciseTemplateId }, isAvailable] };
    }

    return isAvailable;
}

Meteor.publish('exerciseTemplates', function(options: any) {
    const selector = buildQuery.call(this, null);

    return ExerciseTemplatesCollection.find(selector, options);;
});

Meteor.publish('exerciseTemplate', function(exerciseTemplateId: string) {
    return ExerciseTemplatesCollection.find(buildQuery.call(this, exerciseTemplateId));
});
