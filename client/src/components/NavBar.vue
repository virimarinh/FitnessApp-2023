<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
import { ref } from 'vue';
import { useSession } from '../model/session'

const session = useSession();
const isMenuActive = ref(false);
    const isCartActive = ref(false);

    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }
</script>

<template>
    <nav class="navbar">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <RouterLink to="/home"> 
                <i class="fa-solid  fa-person-walking-arrow-right fa-bounce" style="color: black;"></i>
            </RouterLink>
          </a>
          <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">

            <RouterLink to="/activity" class="navbar-item">
              <i class="fa-solid fa-person"></i>
               My Activity
            </RouterLink>
            <!-- <RouterLink to="/statistics" class="navbar-item">
              <i class="fa-light fa-chart-line"></i>
              Statistics
            </RouterLink> -->
            <RouterLink to="/friends-activity" class="navbar-item">
              <i class="fa-solid fa-users"></i>
              Friends Activity
            </RouterLink>
            <RouterLink to="/people-search" class="navbar-item">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              People Search
            </RouterLink>

            <div class="navbar-item has-dropdown is-hoverable" v-if="session.user?.admin == true">
              <a class="navbar-link" href="">
                Admin
              </a>
              <div class="navbar-dropdown">
                <RouterLink class="navbar-item" to="/users" >
                  User
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <LoginBadge />
            
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button is-info is-light" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
      </nav>
</template>


<style scoped>
.navbar{ 
  background-color: pink;
}
</style>