<script setup lang = ts>

</script>
<template>
   <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box is-half">
          <div class="field">
            <label class="label is-size-3">Sign Up</label>
          </div>
          <div class="field">
            <label for="" class="label">First Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="name" name="" id="" placeholder="First Name"/>
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-user" style="color: #a3005f;"></i>
                    </span>
                </div>
            </div>
            <div class="field">
            <label for="" class="label">Last Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="name" name="" id="" placeholder="Last Name"/>
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-user" style="color: #a3005f;"></i>
                    </span>
                </div>
            </div>
          <div class="field">
            <label for="" class="label">Email</label>
          <div class="control has-icons-left">
          <input class="input" type="text" name="" id="" placeholder="Email"  />
          <span class="icon is-small is-left">
            <i class="fa-solid fa-envelope" style="color: #a3005f;"></i>
          </span>
          </div>
        </div>
    <div class="field">
      <label for="" class="label">Password</label>
      <div class="control has-icons-left">
        <input class="input" type="password" name="" id="" placeholder="Password"/>
        <span class="icon is-small is-left">
          <i class="fas fa-key" style="color: #a3005f;"></i>
        </span>
      </div>
    </div>

    <div class="field is-grouped">
      <p class="control">
        <button class="button" >Login</button>
      </p>
      <p class="control">
        <button class="button">Sign Up</button>
      </p>
    </div>
    </div>
      </div>
    </div>
  </div>
          
</template>

<style scoped>
.box{
  background: pink;
  margin-top: 50%;
}
</style>