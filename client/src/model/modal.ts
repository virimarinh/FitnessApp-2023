import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

export const workout = ref([]);
export const newWorkout = ref([]);
export const modalActive = ref(false);

export function toggleModal(){
  return modalActive.value =!modalActive.value;
}

export function closeModal(){
  return modalActive.value = false;
}
