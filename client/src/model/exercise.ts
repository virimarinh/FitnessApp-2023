import { ref } from "vue";
import data from '../data/exercises.json'

        //create data
    export const workoutName = ref('');
    export const workoutType = ref('select-workout');
    export const exercises = ref([]);
    export const newExcercise = ref("");
    export const statusMsg = ref("");
    export const erronsMsg = ref("");

export interface Exercises {
    name: string;
    date?: Date;
    duration?: string;
    location?: string;
    picture?: [];
    type: string
}
