<script setup lang="ts">

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
    <div class="container">
        <button class="button is-danger"> Add User</button>
        <table class="table is-bordered is-fullwidth">
    <thead>
    <tr>
      <th><abbr title="image"></abbr></th>
      <th> <abbr title="fisrtName">First Name</abbr></th>
      <th><abbr title="Lname">Last Name</abbr></th>
      <th><abbr title="emails">Emails</abbr></th>
      <th><abbr title="handle">Handle</abbr></th>
      <th><abbr title="admin">Is Admin</abbr></th>
      <th><abbr title="edit/remove"></abbr></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>
        <img src="../assets/adminPicture.JPG" alt="">
      </th>
      <td>Viridiana</td>
      <td>Marin</td>
      <td>marinhev1@newpaltz.edu</td>
      <td>virimarin</td>
      <td>true</td>
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
      <tr>
      <th>1</th>
      <td>Viridiana</td>
      <td>Marin</td>
      <td>marinhev1@newpaltz.edu</td>
      <td>virimarin</td>
      <td>yes</td>
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
      <tr>
      <th>1</th>
      <td>Viridiana</td>
      <td>Marin</td>
      <td>marinhev1@newpaltz.edu</td>
      <td>virimarin</td>
      <td>yes</td>
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