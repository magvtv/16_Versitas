<script>
import auth from "./pages/auth/index.vue";
import chat from "./pages/chat/index.vue";
</script>

<template>
  <auth v-if="!user" @onAuth="handleAuth" />

  <chat v-else v-bind:username="user.username" v-bind:secret="user.secret" />
</template>

<script>
export default {
  data() {
    return {
      user: undefined,
    };
  },
  methods: {
    handleAuth(user) {
      this.user = user;
    },
  },
};
</script>
