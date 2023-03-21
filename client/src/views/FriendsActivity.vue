<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import { modalActive, toggleModal, closeModal } from '@/model/modal';
</script>

<template>
    <div class="container">
        <h1 class="title">Friends Activity</h1>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <Modal :modalActive="modalActive"></Modal>
                <button @click="toggleModal" class="button is-danger is-fullwidth">Add Workout</button>
                <br>
                    <div class="box">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img src="../assets/adminPicture1.jpg" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>Viri Marin</strong> 
                                        <small>@virimarin</small> 
                                        <small> 2 DAYS AGO</small>
                                        <br>
                                        "Ran through campus - location"
                                    </p>
                                <div class="columns">
                                    <div class="column is-flex is-justify-content-space-between is-justify-content-center is-justify-content-space-evenly">
                                        <div>
                                            <div class="title">0ft</div>
                                            <div class="heading">Distance</div>
                                        </div>
                                        <div>
                                            <div class="title">0ft</div>
                                            <div class="heading">Distance</div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <a class="level-item" aria-label="reply">
                                            <span class="icon is-small">
                                                <i class="fas fa-reply" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                        <a class="level-item" aria-label="retweet">
                                            <span class="icon is-small">
                                                <i class="fas fa-retweet" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                        <a class="level-item" aria-label="like">
                                            <span class="icon is-small">
                                                <i class="fas fa-heart" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                            <div class="media-right">
                                <button class="delete"></button>
                            </div>
                        </article>
                    </div>
            </div>
        </div>
    </div>
</template>