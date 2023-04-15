<script setup lang="ts">
import Modal from './Modal.vue';
import { ref } from 'vue';
import { state } from '@/model/generalModals';
</script>
<template>
    <Modal :is-open="true">
    <h1 class="title"></h1>
    <template #footer>
        <button class="button is-sucess">Save Changes</button>
        <button class="button">Cancel</button>
    </template>
    </Modal>
</template>

<style scoped>

</style>