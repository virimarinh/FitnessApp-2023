import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

export const modalActive = ref(false)

export function toggleModal(){
  return modalActive.value =!modalActive.value;
}

export function closeModal(){
  return modalActive.value = false;
}
