<script setup lang="ts">
import { modalActive, toggleModal, closeModal } from '@/model/modal';
import { useLogin, useSession } from '@/model/session'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Register from '@/components/SignupModal.vue'
import { createUser, type User} from '@/model/users'

const router = useRouter()
const session = useSession()
const user = reactive({
  email: '' as string,
  password: '' as string
})

const login = useLogin()

// Define a reactive form object to hold the user input data
const userForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  handle: ''
})


</script>

<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box is-half">
          <div class="field">
            <label class="label is-size-3">Login</label>
          </div>
          <div class="field">
            <label for="" class="label">Email</label>
          <div class="control has-icons-left">
          <input class="input" type="text" name="" id="" placeholder="Email" v-model="user.email" />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          </div>
        </div>
    <div class="field">
      <label for="" class="label">Password</label>
      <div class="control has-icons-left">
        <input class="input" type="password" name="" id="" placeholder="Password" v-model="user.password"/>
        <span class="icon is-small is-left">
          <i class="fas fa-key"></i>
        </span>
      </div>
    </div>

    <div class="field is-grouped">
      <p class="control">
        <button class="button" @click="login(user)">Login</button>
      </p>
      <p class="control">
        <Register :isOpen="modalActive"></Register>
          <button @click="toggleModal" class="button is-danger is-fwidth">Sign Up</button>
      </p>
    </div>
    </div>
      </div>
    </div>
  </div>
          
</template>

<style scoped>
.box{
  background: pink;
  margin-top: 25%;
}
</style>