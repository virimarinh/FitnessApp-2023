import { ref } from "vue";
import { closeModal }from '../model/modal';


// //create data
// export const workoutName = ref('');
// export const workoutType = ref('select-workout');
// export const newExcercise = ref("");
// export const statusMsg = ref("");
// export const erronsMsg = ref("");

export interface Exercise {
    name: string;
    date?: string;
    duration?: string;
    location?: string;
   // picture?: [];
    type: string
}

export const exercise = ref<Exercise>(
    {
        name: "Bike",
        date: "12/12/23",
        duration: "1 hour",
        location: "New Paltz",
       // picture: [],
        type: "cardio",
    }
);

export const exercises = ref([{
    "name": "Biked through campus",
    "date": "03/20/2023",
    "duration": "1 hour",
    "location": "New Paltz",
  //  "picture": ["http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTTmrxYuiGmw6nmOCKjjSHdtRWLq6Upml3Kb__p9ihakdUwUoxVYKfi4GD5X52Us0X1"],
    "type": "bike"
},
{
    "name": "Morning Run",
    "date": "03/19/2023",
    "duration": "1.5 hour",
    "location": "New Paltz",
  //  "picture": ["https://www.boboandchichi.com/wp-content/uploads/Downtown-New-Paltz-New-York-836x558.jpg"],
    "type": "run"
},
{
    "name": "Walked the Mid-Hudson Bridge",
    "date": "03/17/2023",
    "duration": "1.5 hour",
    "location": "Highland, NY",
  //  "picture": ["https://s.hdnux.com/photos/01/24/52/51/22194754/6/rawImage.jpg"],
    "type": "walk"
},
]);

export function saveWorkout() {
    //exercises.value.push({...exercise.value})
    closeModal();

    exercise.value = {
        name: "",
        date: "",
        duration: "",
        location: "",
    //    picture: [],
        type: "",
    };
} 