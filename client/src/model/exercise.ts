
import data from "../data/exercises.json";
import users from "../data/users.json";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";

// //create data 
// export const workoutName = ref('');
// export const workoutType = ref('select-workout');
// export const newExcercise = ref("");
// export const statusMsg = ref("");
// export const erronsMsg = ref("");

export interface Exercise {
    userId: number;
    userName: string;
    handle: string;
    name: string;
    date?: string;
    duration?: string;
    location?: string;
    picture?: string;
    type: string
}


export function getExercises(): Promise<DataListEnvelope<Exercise>> {
    return api('exercises')
}

export function getExercise(id: number): Promise<DataListEnvelope<Exercise>> {
    return api('exercises/${id}')
}
// export function getExercisesId(): Exercise[] {
//     const getExercises = data.exercises;

//     return this.exercises.userId;
// }

const exercises = getExercises();

export function createExercise(exercise: Exercise): Promise<DataEnvelope<Exercise>> {
    return api('exercises', exercise)
}