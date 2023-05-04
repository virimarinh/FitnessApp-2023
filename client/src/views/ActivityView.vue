<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import img from '@/assets/adminPicture1.jpg'
import { modalActive, toggleModal, closeModal } from '@/model/modal';
import { getExercises, type Exercise } from '@/model/exercise';
import { useSession } from '@/model/session';


const session = useSession();

const exercises = ref<Exercise[]>([]);
getExercises().then((data) => {
    console.log(exercises.value);
    exercises.value = data.data;
})


// function getUserExercises() {
//     if (session.user == getExercisesId(session)) {

//     }
// }
// const userId = session.user?.id;

</script>
<template>
    <div class="container">
        <h1 class="title">My Activity</h1>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <Modal :modalActive="modalActive"></Modal>
                <button @click="toggleModal" class="button is-danger is-fullwidth">Add Workout</button>
                <br>
                <div v-for="exercise in exercises" :key="exercise.userId">
                <div class="box" v-if="exercise.handle == session.user?.handle">
                <!-- if(exercise.userId === userId)" > -->
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img :src="session.user?.photo" alt="" class="img">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ exercise.handle }}</strong>
                                    <small></small>
                                    <small> {{ exercise.date }}</small>
                                    <br>
                                    {{ exercise.name }}
                                </p>
                                <div class="columns">
                                    <div
                                        class="column is-flex is-justify-content-space-between is-justify-content-center is-justify-content-space-evenly">
                                        <div>
                                            <div class="title">{{ exercise.location }}</div>
                                            <div class="heading">Location</div>
                                        </div>
                                        <div>
                                            <div class="title">{{ exercise.duration }}</div>
                                            <div class="heading">Duration</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="columm">
                                    <Figure>
                                         <img :src="exercise.picture" alt="" style="max-height: 100%;">
                                    </Figure>
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
    </div>
</template>