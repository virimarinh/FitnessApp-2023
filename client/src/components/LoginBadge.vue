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
        <img :src="session.user?.photo">  Welcome, {{ session.user.firstName}}
                (<a @click="logout2()">logout</a>)
            </div>
            <div class="navbar-item" v-else>
                <a class="button is-warning is-light" @click="$router.push('/login')">
                    <span class="icon">
                        <i class="fas fa-user "></i>
                    </span>
                    <strong>Login</strong>
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