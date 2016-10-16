import { ExerciseTemplatePrivacy } from "../../../both/models/workout-and-exercies";
import { ExerciseTemplatesCollection } from "../../../both/collections/exercise-templates.collection";

function buildQuery(exerciseTemplateId?: string): Object {
    // TODO find from user/profile database via this.userId/Meteor.user
    const personalTrainersIds = [ "xxx", "yyy" ];

    const meAndPersonalTrainersIds = personalTrainersIds.concat([this.userId]);
    console.log("meAndPersonalTrainersIds: " + meAndPersonalTrainersIds);

    const isAvailable = {
        $or: [
            { privacy: ExerciseTemplatePrivacy.Public },
            {
                $and: [
                    { privacy: ExerciseTemplatePrivacy.PersonalTrainees },
                    { ownerUserId: { $in: meAndPersonalTrainersIds } },
                    { ownerUserId: { $exists: true } }
                ]
            }, {
                $and: [
                    { privacy: ExerciseTemplatePrivacy.Private },
                    { ownerUserId: this.userId },
                    { ownerUserId: { $exists: true } }
                ]
            }
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
