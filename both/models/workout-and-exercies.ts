export enum ExerciseKind { Time, Repetition }
export enum ExerciseTemplatePrivacy { Public, PersonalTrainees, Private }
export interface ExerciseTemplate {
    _id?: string;
    name: string;
    description: string;
    ownerUserId: string;
    privacy: ExerciseTemplatePrivacy;
    exerciseKind: ExerciseKind;
    duration?: number;
    repetitions?: number;
}

export interface Exercise {
    exerciseTemplateId?: string;
    name?: string;
    description?: string;
    exerciseKind?: ExerciseKind;
    duration?: number;
    repetitions?: number;
}

export interface Workout {
    _id?: string;
    name?: string;
    description?: string;
    creatorUserId: string;
    forUserId: string;
    planedFor?: Period;
    exercises: Exercise[];
}

export interface Period {
    after?: Date;
    before?: Date;
}

export const PauseTemplate: ExerciseTemplate = {
    name: "Pause",
    description: "Have a break",
    ownerUserId: "__system__",
    privacy: ExerciseTemplatePrivacy.Public,
    exerciseKind: ExerciseKind.Time
};

export const SystemTemplates: ExerciseTemplate[] = [
    PauseTemplate
];
