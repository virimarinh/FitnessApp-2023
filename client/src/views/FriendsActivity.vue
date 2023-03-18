<script setup lang="ts">

</script>

<template>
    <div class="container">
        <h1 class="title">Friends Activity</h1>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <button class="button is-danger is-fullwidth">Add Workout</button>
                    <div class="box">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                    <strong>John Smith</strong> <small>@johnsmith</small> <small> 2 DAYS AGO</small>
                                    <br>
                                        "Ran through campus - location"
                                    </p>
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
                </article>
            </div>
            </div>
        </div>
    </div>
</template>