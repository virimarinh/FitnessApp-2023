<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(true)
</script>

<template> 
  <div class="container">
    <h1 class="title">My Activity</h1>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <button class="button is-danger is-fullwidth">Add Workout</button>
      </div>
    </div>
    <div class="modal">
      <div class="madal-content has-background py-5 px-5"></div>
      <h3 class="title"></h3>
      <form>
        <div class="field">
          <label for="name">Type</label>
          <div class="control">
            <input type="text" class="input">
          </div>
        </div>
        <div class="field">
          <label for="name"></label>
          <div class="control">
            <input type="text" class="input">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
