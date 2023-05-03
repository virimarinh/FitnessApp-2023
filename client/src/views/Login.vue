<script setup lang="ts">
import { useLogin, useSession } from '@/model/session'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const session = useSession()
const user = reactive({
  email: '' as string,
  password: '' as string
})

const login = useLogin()
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
        <button class="button">Sign Up</button>
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
  margin-top: 50%;
}
</style>