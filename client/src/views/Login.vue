<script setup lang="ts">

</script>

<template>
    <div>
        <h1 class="title">
            Login
        </h1>
        <h2 class="subtitle">
            In the meantime you can login using the login menu on the top right.
        </h2>
        <p>
            Logging in as Viri should give you access to the Activity pages 
            as well as the admin pages (right now just users). 
            Loggin in as other should give you only the Activity page
        </p>

        <div class="column is-half is-offset-one-quarters">

        <div class="field ">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="username" value="">
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" value="">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>
            <div class="field">
            
            </div>
            
    </div>
</div>
</template>