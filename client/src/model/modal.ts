import { ref } from 'vue';


export const modalActive = ref(false);

export function toggleModal(){
  return modalActive.value =!modalActive.value;
}

export function closeModal(){
  return modalActive.value = false;
}


export function openModal() {
 return modalActive.value = true;
}

