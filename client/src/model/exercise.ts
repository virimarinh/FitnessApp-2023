
import data from "../data/exercises.json";
import users from "../data/users.json";

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


export function getExercises(): Exercise[] {
    return data.exercises
}

// export function getExercisesId(): Exercise[] {
//     const getExercises = data.exercises;

//     return this.exercises.userId;
// }

const exercises = getExercises();



