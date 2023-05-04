<script setup lang="ts">

import {modalActive, closeModal} from '@/model/modal';
import { addMessage } from '@/model/session';
import { createUser, type User } from '@/model/users';
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let error = ref(false);
const user = ref<User>({} as User)
const route = useRoute();

function save(){
    createUser(user.value).then((data) => {
      if(user.value){
        addMessage('User created', 'success')
        alert("User created")
        router.push('/login')
      } else {
        addMessage('User already exists', 'danger')
        error.value = true;
      }
    })
}
</script>

<template>
<div v-if="modalActive" class="modal is-active">
    <div @click="closeModal" class="modal-background"></div>
        <div v-if="modalActive" class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Register</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <form>
                    <div class="field">
            <label class="label is-size-3">Sign Up</label>
          </div>
          <div class="field">
            <label for="" class="label">First Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="First Name" v-model="user.firstName"/>
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-user" style="color: #a3005f;"></i>
                    </span>
                </div>
            </div>
            <div class="field">
            <label for="" class="label">Last Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Last Name" v-model="user.lastName" />
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-user" style="color: #a3005f;"></i>
                    </span>
                </div>
            </div>
          <div class="field">
            <label for="" class="label">Email</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Email" v-model="user.email" />
          <span class="icon is-small is-left">
            <i class="fa-solid fa-envelope" style="color: #a3005f;"></i>
          </span>
          </div>
        </div>
    <div class="field">
      <label for="" class="label">Password</label>
      <div class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="user.password" />
        <span class="icon is-small is-left">
          <i class="fas fa-key" style="color: #a3005f;"></i>
        </span>
      </div>
    </div>
    <div class="field">
    <label for="" class="label">Username</label>
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="Username" v-model="user.handle" />
        <span class="icon is-small is-left">
          <i class="fas fa-key" style="color: #a3005f;"></i>
        </span>
      </div>
    </div>
                </form>
            </section>
            <footer class="modal-card-foot">
                <!-- @click="saveWorkout -->
                <button class="button is-success">Save changes</button>
                <button @click="closeModal" class="button">Cancel</button>
            </footer>
        </div>
</div>

</template>

<style scoped>
</style>
<script>
</script>