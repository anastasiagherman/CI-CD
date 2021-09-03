<template>
  <div id="login">
    <v-app>
      <v-container
        grid-list-xl
        text-xs-center
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            xs4
            offset-xs4
          >
            <v-card
              dark
              color="dark"
              elevation-24
              style="padding: 20px; border: 1px; border-radius: 50px;"
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
                    counter="10"
                    required
                    @click:prepend="prependClicked"
                    @click:append-outer="appendClicked"
                  />
                  <v-text-field
                    v-model="password"
                    clearable
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="white"
                    required
                    @click:prepend="prependClicked"
                    @click:append-outer="appendClicked"
                  />
                </v-form>
                <br>
                <v-btn
                  color="grey darken-2"
                  large
                >
                  Enter
                </v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-app />
    </v-app>
  </div>
</template>
<script>
export default {
name: "Auth",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    prependClicked() {
      console.log('prepend clicked');
    },
    appendClicked() {
      console.log('append clicked', this.username);
    }
  }
}
</script>

<style scoped>

</style>