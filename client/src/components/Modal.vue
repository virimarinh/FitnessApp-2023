<script setup lang="ts">

</script>

<template>
<div class="modal is-active">
    <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add Workout</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <form>
                    <div class="field">
                        <label for="name">Type</label>
                        <div class="control">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Date</label>
                        <div class="control">
                            <input type="date" class="input" placeholder="mm/dd/yyyy">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Duration</label>
                        <div class="control">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Location</label>
                        <div class="control">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Picture</label>
                        <div class="control">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div class="select is-fullwidth">
                        <label>Type</label>
                        <select class="form-control">
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
                <button class="button">Cancel</button>
            </footer>
        </div>
</div>

</template>

<style scoped>


</style>