<script setup lang="ts">
    import { useSession, useLogin, useLogout } from '@/model/session';

    const session = useSession();
    const logout = useLogout();

    function logout2(){
        logout();
    }
</script>

<template>
    <div class="navbar-item" v-if="session.user">
                Welcome, {{ session.user.photo }} {{ session.user.firstName}}
                (<a @click="logout2()">logout</a>)
            </div>
            <div class="navbar-item" v-else>
                <a class="button is-primary" @click="$router.push('/login')">
                    <span class="icon">
                        <i class="fas fa-user"></i>
                    </span>
                    <strong>Login</strong>
                </a>
                <a class="button is-info" @click="$router.push('/signup')" >
                    <span class="icon">
                        <i class="fas fa-user-plus"></i>
                    </span>
                    <strong>Sign up</strong>
                </a>
            </div>
</template>



<style scoped>
img{
    width: 30px;
    height: 40px;
    border-radius: 50%;
}
</style>