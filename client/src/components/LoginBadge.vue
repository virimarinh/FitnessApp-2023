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
        <a class="button" @click="login">
            <span>Login</span>
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </a>
    </div>
</template>

<style scoped>

</style>