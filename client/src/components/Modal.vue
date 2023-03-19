<script setup lang="ts">
import {modalActive, closeModal} from '@/model/modal'
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
                        <label for="name">Title</label>
                        <div class="control">
                            <input id="title" type="text" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Date</label>
                        <div class="control">
                            <input id="date" type="date" class="input" placeholder="mm/dd/yyyy">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Duration</label>
                        <div class="control">
                            <input id="duration" type="text" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Location</label>
                        <div class="control">
                            <input id="location" type="text" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Picture</label>
                        <div class="control">
                            <input id="picture" type="text" class="input">
                        </div>
                    </div>
                    <div class="select is-fullwidth">
                        <label>Type</label>
                        <select id="type" class="form-control">
                            <option value=""></option>
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
                <button class="button is-success">Save changes</button>
                <button @click="closeModal" class="button">Cancel</button>
            </footer>
        </div>
</div>

</template>

<style scoped>


</style>
<script>

</script>