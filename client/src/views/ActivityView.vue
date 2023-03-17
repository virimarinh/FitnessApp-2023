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
  </div>
</template>
