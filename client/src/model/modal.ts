import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import { reactive } from "vue";
//import { exercise, type Exercise, workoutName, workoutType, newExcercise} from './exercise';


export const modalActive = ref(false);
export const state = reactive({
  isModalOpen: false,
  message: "",
  title: "",
  resolve: (x:any) => {},
  reject: (x:any) => {},
})

export function toggleModal(){
  return modalActive.value =!modalActive.value;
}

export function openModal(message: string, title: string) {
  state.isModalOpen = true;
  state.message = message;
  state.title = title;
}

export function closeModal() {
  state.isModalOpen = false;
}

export function confirm(message: string, title: string) {
  return new Promise((resolve, reject) => {

      openModal(message, title);

      state.resolve = resolve;
      state.reject = reject;
  })
  .finally(() => {
      state.isModalOpen = false;
  });
}

