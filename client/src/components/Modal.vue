<script setup lang="ts">

</script>

<template>
    <div class="modal"> 
        <div class="modal-background"></div>
        <header class="modal-card-header">
          <p class="modal-card-title">Add Workout</p>
          <button class="close">Close</button>
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
            <input type="text" class="input" placeholder="mm/dd/yyyy">
          </div>
        </div>
        <div class="field">
          <label for="name">Duration</label>
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
        <div class="select is-normal">
            <label>Type</label>
            <select>
                <option></option>
                <option>Run</option>
                <option>Walk</option>
                <option>Bike</option>
                <option>Cardio</option>
            </select>
        </div>
        <div class="footer">
            <button>Save Workout</button>
            <button>Cancel</button>
        </div>
      </form>
        </section>
        <footer class="nodal-card-footer">
          <button class="button is-warning">Save Workout</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
</template>