<script setup lang="ts">
import { ref } from 'vue';
import GeneralModals from '@/components/GeneralModals.vue';
import type { Exercise } from '@/model/exercise';
import { useRoute } from 'vue-router';
import { getExercises } from '@/model/exercise';
import { useSession } from '@/model/session';

const session = useSession();
const route = useRoute();

const exercise = ref<Exercise>({} as Exercise);
</script>

<template>
    <div>
        Hello
    </div>
</template>


<style scoped>

</style>