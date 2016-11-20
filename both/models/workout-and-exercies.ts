export interface ExerciseVariable {
    name: string;
    value: number;
    unit: string;
}

export interface ExerciseTemplate {
    _id?: string;
    ownerUserId: string;
    availableTrainees: boolean;
    name: string;
    description: string;
    variables: ExerciseVariable[];
}

export interface Exercise {
    exerciseTemplateId?: string;
    name?: string;
    description?: string;
    variables: ExerciseVariable[];
}

export interface Workout {
    _id?: string;
    creatorUserId: string;
    forUserId: string;
    name?: string;
    description?: string;
    planedFor?: Period;
    exercises: Exercise[];
}

export interface Period {
    after?: Date;
    before?: Date;
}

export const PauseTemplate: ExerciseTemplate = {
    ownerUserId: "__system__",
    availableTrainees: true,
    name: "Pause",
    description: "Have a break",
    variables: [{name: "Duration", value: 30, unit: "seconds"}]
};

export const SystemTemplates: ExerciseTemplate[] = [
    PauseTemplate
];
