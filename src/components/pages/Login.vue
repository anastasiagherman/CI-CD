<template>
  <v-card
    dark
    color="dark"
    elevation-24
    style="padding: 20px; border: 1px; border-radius: 50px; text-align: center"
  >
    <v-card-text>
      <h4 class="display-2 font-weight-bold">
        Login
      </h4>
      <hr>
      <br>
      <v-form>
        <v-text-field
          v-model="username"
          clearable
          label="Username"
          prepend-icon="mdi-account-circle"
          type="text"
          color="white"
          required
        />
        <v-text-field
          v-model="password"
          clearable
          label="Password"
          prepend-icon="mdi-lock"
          type="password"
          color="white"
          required
        />
      </v-form>
      <br>
      <v-btn
        color="grey darken-2"
        large
        @click="login"
      >
        Enter
      </v-btn>
      <p class="mt-3">
        Don't have an account?
        <router-link
          :to="{name: 'register'}"
          style="text-decoration: none"
        >
          <span
            class="orange--text"
            style="cursor:pointer"
          >
            Register
          </span>
        </router-link>
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
import {mapActions} from 'vuex';
export default {
name: "Login",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
  login() {
    this.loginUser({
      username: this.username,
      password: this.password
    });
    this.$router.push({
      name: 'products'
    })
  },
    ...mapActions({
      loginUser: 'auth/login'
    })
  }
}
</script>

<style scoped>

</style>