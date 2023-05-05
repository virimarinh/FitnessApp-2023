<script setup lang="ts">

import {modalActive, closeModal} from '@/model/modal';
import { reactive } from 'vue'
import { createUser, type User } from '@/model/users'

const userForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  handle: ''
})

async function handleSubmit() {
  try {
    const newUser: User = {
      id: 0, 
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      admin: false,
      email: userForm.email,
      password: userForm.password,
      handle: userForm.handle
    }

    const result = await createUser(newUser)

    if (result.isSuccess) {
      console.log('New user created:', result.data)

      // Reset the input fields and close the modal
      userForm.firstName = ''
      userForm.lastName = ''
      userForm.email = ''
      userForm.password = ''
      userForm.handle = ''
      closeModal()
    } else {
      console.error('Failed to create user:', result.error)
    }
  } catch (error) {
    console.error('Error creating user:', error)
  }
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
                  <input class="input" type="text" placeholder="First Name" v-model="userForm.firstName" />
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-user" style="color: #a3005f;"></i>
                    </span>
                </div>
            </div>
            <div class="field">
            <label for="" class="label">Last Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Last Name" v-model="userForm.lastName"/>
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-user" style="color: #a3005f;"></i>
                    </span>
                </div>
            </div>
          <div class="field">
            <label for="" class="label">Email</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Email" v-model="userForm.email" />
          <span class="icon is-small is-left">
            <i class="fa-solid fa-envelope" style="color: #a3005f;"></i>
          </span>
          </div>
        </div>
    <div class="field">
      <label for="" class="label">Password</label>
      <div class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="userForm.password" />
        <span class="icon is-small is-left">
          <i class="fas fa-key" style="color: #a3005f;"></i>
        </span>
      </div>
    </div>
    <div class="field">
    <label for="" class="label">Handle</label>
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="Username" v-model="userForm.handle"/>
        <span class="icon is-small is-left">
          <i class="fas fa-key" style="color: #a3005f;"></i>
        </span>
      </div>
    </div>
          </form>
            </section>
            <footer class="modal-card-foot">
                <!-- @click="saveWorkout -->
                <button @click="handleSubmit" class="button is-success">Save changes</button>
                <button @click="closeModal" class="button">Cancel</button>
            </footer>
        </div>
</div>

</template>

<style scoped>

</style>
