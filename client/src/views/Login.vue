<script setup lang="ts">
import { ref } from 'vue';
import { loadScript, rest } from '@/model/myFetch';
import type { User } from '@/model/users';
import { api, useSession, useLogin } from '@/model/session';
// async function googleLogin()
// {
//     await loadScript('https://accounts.google.com/gsi/client', 'google-login');
//     //await loadScript('https://apis.google.com/js/platform.js', 'gapi');
//     const client = google.accounts.oauth2.initTokenClient({
//           client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
//           scope: 'https://www.googleapis.com/auth/calendar.readonly \
//                   https://www.googleapis.com/auth/contacts.readonly',
//           callback: async (tokenResponse) => {
//             console.log(tokenResponse);
//             const me = await rest(
//                 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses',
//                 null, undefined, {
//                     "Authorization": "Bearer " + tokenResponse.access_token
//                 }
                
//                 );
//             console.log(me);
//             const calendar = await rest('https://www.googleapis.com/calendar/v3/calendars/primary/events',
//                 null, undefined, {
//                     "Authorization": "Bearer " + tokenResponse.access_token
//                 })
//             console.log(calendar);
//           },
//         });
//     client.requestAccessToken();
// }

const session = useSession();
const user = ref<User>({} as User)
const email = ref('marinherv1@newpaltz.edu');
const password = ref('password');
let error = ref(false);
const login = useLogin();
async function loginUser() {
  const response = await api(
    'users/login',
    {
      email: email.value,
      password: password.value
    },
    'POST'
  )
  if (response != undefined) {
    session.redirectUrl = '/'
    login(response.data)
    error.value = false
  } else {
    error.value = true
  }
}


// class AuthService {
//   login(username: string, password: string) {
//     return axios
//       .post(API_URL + "signin", {
//         username,
//         password
//       })
//       .then(response => {
//         if (response.data.accessToken) {
//           localStorage.setItem("user", JSON.stringify(response.data));
//         }

//         return response.data;
//       });
//   }
</script>

<template>
    <!-- <div>
        <h1 class="title">
            Login
        </h1>
        <h2 class="subtitle">
            If you got here then you are not logged in. <br>
            To login just click the button on the top right corner.
        </h2>
        <p>
            <button class="button is-primary" @click="googleLogin">
                Login With Google
            </button>
        </p>
    </div> -->
    <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box">
          <h1 class="title has-text-light">login</h1>
          <form @submit.prevent="loginUser">
            <div class="field">
              <label class="label has-text-light">Email</label>
              <div class="control">
                <input v-model="email" class="input" type="text"
                  placeholder="password" />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-light">Password</label>
              <div class="control">
                <input v-model="password" class="input has-text-light" type="password"
                  placeholder="Password" />
                <p class="help is-danger" v-if="error">Invalid email or password</p>
              </div>
            </div>
            <div class="field">
              <button type="submit" class="button is-light is-outlined">Login</button>
            </div>
          </form>
          <p>New User?</p>
          <div class="buttons">
            <router-link to="/signup" class="button is-light is-outlined">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.box {
    background-color: pink;
    position: center;
    margin-top: 50%;
}
</style>