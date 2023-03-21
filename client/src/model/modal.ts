import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import { exercises, workoutName, workoutType, newExcercise} from './exercise';


export const modalActive = ref(false);

export function toggleModal(){
  return modalActive.value =!modalActive.value;
}

export function closeModal(){
  return modalActive.value = false;
}
