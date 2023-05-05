<script setup lang="ts">

import {modalActive, closeModal} from '@/model/modal';
import { useSession } from '@/model/session';
import { createExercise, type Exercise } from '@/model/exercise';
import { reactive, ref } from 'vue';

const session = useSession();
const props = defineProps<{
        title?: string;
        isOpen: boolean;
    }>();

    const emit = defineEmits<{
        (e: 'update:isOpen', value: boolean): void;
    }>();

const exerciseForm = reactive({
    userId: 0,
    name: '',
    date: '',
    duration: '',
    location: '',
    picture: '',
    type: '',
})

async function handleSubmit() {
    try{
        const newExercise: Exercise = {
_id: '',
userId: session.user?.id,
name: exerciseForm.name,
date: exerciseForm.date,
duration: exerciseForm.duration,
location: exerciseForm.location,
picture: exerciseForm.picture,
type: exerciseForm.type,
handle: ''
}

    const result = await createExercise(newExercise)

    if (result.isSuccess){
        console.log('New user created:', result.data)

        // Reset the input fields and close the modal
      exerciseForm.name = ''
      exerciseForm.date = ''
      exerciseForm.duration = ''
      exerciseForm.location = ''
      exerciseForm.picture = ''

      closeModal()
    } else {
      console.error('Failed to create user:', result.error)
    }
  } catch (error) {
    console.error('Error creating user:', error)
  }
}

 
</script>

<template>
<div v-if="modalActive" class="modal is-active">
    <div @click="closeModal" class="modal-background"></div>
        <div v-if="modalActive" class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add Workout</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <form>
                    <div class="field">
                        <label for="name">Name</label>
                        <div class="control">
                            <input v-model="exerciseForm.name" id="workout-name" type="text" required class="input" placeholder="Name of Your Workout">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Date</label>
                        <div class="control">
                            <input v-model="exerciseForm.date" id="date" type="date" class="input" placeholder="mm/dd/yyyy">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Duration</label>
                        <div class="control">
                            <input v-model="exerciseForm.duration" id="duration" type="text" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Location</label>
                        <div class="control">
                            <input v-model="exerciseForm.location" id="location" type="text" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Picture</label>
                        <div class="control">
                            <input v-model="exerciseForm.picture" id="picture" type="text" class="input">
                        </div>
                    </div>
                    <div class="select is-fwidth">
                        <label for="workout-type">Type</label>
                        <select v-model="exerciseForm.type" id="workout-type" required class="form-control">
                            <option value="select Workout">Select Workout</option>
                            <option value="run">Run</option>
                            <option value="walk">Walk</option>
                            <option value="bike">Bike</option>
                            <option value="cardio">Cardio</option>
                            <option value="strength">Strength</option>
                        </select>
                    </div>
                </form>
            </section>
            <footer class="modal-card-foot">
                <!-- @click="saveWorkout -->
                <button @click="handleSubmit" class="button is-success">Save changes</button>
                <button @click="closeModal" class="button">Cancel</button>
            </footer>
        </div>
</div>

</template>

<style scoped>
</style>
<script>
</script>