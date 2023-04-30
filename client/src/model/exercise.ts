import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";

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

export function createExercise(exercise: Exercise): Promise<DataEnvelope<Exercise>> {
    return api('exercises', exercise)
}