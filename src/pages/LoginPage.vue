<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>

        <q-card-section>
          <q-input filled v-model="username" label="Username" />
          <q-input filled v-model="password" label="Password" type="password" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Login" color="primary" @click="login" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Handle login logic here
      alert(`Logging in with ${this.username} and ${this.password}`)
    }
  }
}
</script>

<style scoped>
.q-pa-md {
  max-width: 400px;
  width: 100%;
}
</style>
