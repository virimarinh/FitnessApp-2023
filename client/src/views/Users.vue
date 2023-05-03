<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogin, useLogout } from '../model/session';
import { getUsers, type User } from '@/model/users';

const users = ref<User[]>([]);
getUsers().then((data) => {
    users.value = data.data;
})

const session = useSession();
const login = useLogin();
const logout = useLogout();

function logout2() {
    logout();
}

</script>

<template>
    <!--breadcrumbs-->
<div class="section pt-4 pb-0">
    <nav class="breadcrumb has-arrow-separator">
        <ul class="container is-size-6">
            <li><a href="#" class="has-text-grey">My Exercise</a></li>
            <li><a href="#" class="has-text-grey">Admin</a></li>
            <li class="is-active"><a href="#">Users</a></li>
        </ul>
    </nav>
    <div 
    class="container">
        <button class="button is-danger"> Add User</button>
        <table class="table is-bordered is-fullwidth">
    <thead>
    <tr>
      <th><abbr title="image"></abbr></th>
      <th> <abbr title="firstName">First Name</abbr></th>
      <th><abbr title="Lname">Last Name</abbr></th>
      <th><abbr title="emails">Emails</abbr></th>
      <th><abbr title="handle">Handle</abbr></th>
      <th><abbr title="admin">Is Admin</abbr></th>
      <th><abbr title="edit/remove"></abbr></th>
    </tr>
  </thead>
  <tbody v-for="user in users" :key="user.id">
     <tr>
       <th>
        <figure>
            <img :src="user.photo">
        </figure>
        </th>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.email}}</td>
      <td>{{ user.handle}}</td>
      <td>{{ user.admin }}</td>
      <td>
        <button>
            <span class="icon is-medium">
                <i class="fa-solid fa-pen-to-square"></i>
            </span>
        </button>
        <button>
            <span class="icon is-medium">
                <i class="fa-solid fa-trash"></i>
            </span>
        </button>
    </td>
    </tr>
  </tbody>
</table>
    </div>
</div>
</template>

<style scoped>
    img{
        width: 70px;
        height: 70px;
    }
</style>