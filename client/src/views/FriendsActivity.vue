<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card has-background-white">
            <header class="modal-card-head">
                <p class="modal-card-title">Add Workout</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <form>
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                            <input type="date" class="input" placeholder="mm/dd/yyyy">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Duration</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Location</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Picture</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Type</label>
                        <div class="select">
                            <select id="type" class="form-control">
                                <option value="run">Run</option>
                                <option value="bike">Bike</option>
                                <option value="walk">Walk</option>
                                <option value="cardio">Cardio</option>
                                <option value="strength">Strength</option>
                            </select>
                        </div>
                    </div>
                </form>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-warning">Save Workout</button>
                <button class="button">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<style scoped>


</style>