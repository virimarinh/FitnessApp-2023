//import ModalVue from "@/components/Modal.vue";
import { computed, ref } from "vue";

const modalActive = ref(false);

export function toggleM () {
    return !modalActive.value
};
