<script setup lang="ts">
import { RouterLink } from 'vue-router';
    const isMenuActive = false;
</script>

<template>
    <nav class="navbar is-danger">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
          </a>
          <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="isMenuActive = !isMenuActive" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">

            <RouterLink to="/" class="navbar-item">
              <i class="fa-solid fa-person-walking"></i>
               My Activity
            </RouterLink>
            <RouterLink to="/about" class="navbar-item">
              <i class="fa-light fa-chart-line"></i>
              Statistics
            </RouterLink>
            <RouterLink to="/about" class="navbar-item">
              <i class="fa-solid fa-users"></i>
              Friends Activity
            </RouterLink>


            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                Admin
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                  Users
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-danger" href="">
                    <span>Sign Up</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button" href="">
                    <span>Login</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </p>
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