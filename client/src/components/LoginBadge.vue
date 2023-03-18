<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login, useLogout } from '@/model/session';

const session = useSession();
const logout = useLogout();

function logout2() {
    logout();
}

</script>

<template>
    <div class="navbar-item" v-if="session.user">
        {{ session.user.name }}
        (<a @click="logout2()">Logout</a>)
    </div>
    <div class="navbar-item" v-else>
        <a class="button is-danger">
            <span class="icon">
                <i class="fas fa-user-plus"></i>
            </span>
            <strong>Sign up</strong>
        </a>
        <div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
      <span>Login</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu2" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item" @click="login">
        Viridiana Marin
      </div>
      <hr class="dropdown-divider">
      <div class="dropdown-item">
        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
      </div>
      <hr class="dropdown-divider">
      <a href="/login" class="dropdown-item">
        Other Account
      </a>
    </div>
  </div>
</div>
        <!-- <a class="button" @click="login">
            <span>Login</span>
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </a> -->
    </div>
</template>

<style scoped>

</style>