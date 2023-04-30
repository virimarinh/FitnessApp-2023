<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
   
</script>

<template>
    <nav class="navbar is-danger">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <RouterLink to="/"> 
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
            </RouterLink>
          </a>
          <div class="navbar-burger" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu">
          <div class="navbar-start">

            <RouterLink to="/activity" class="navbar-item">
              <i class="fa-solid fa-person-walking"></i>
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

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="">
                Admin
              </a>
              <div class="navbar-dropdown">
                <RouterLink to="/users" class="navbar-item">
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
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
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
</style>