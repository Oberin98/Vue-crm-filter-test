<template>
  <main class="users">
    <User v-for="user in getUsersGetter" :key="user.id" v-bind:user="user" />
  </main>
</template>

<script>
import User from "./User";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

export default {
  name: "Users",
  components: {
    User
  },
  data(){
    return {
      users: this.getUsersGetter
    }
  },
  computed: {
    ...mapGetters(["getUsersGetter"]),
    ...mapState(["filteredUsers"])
  },
  methods: {
    ...mapMutations(["filterByAmountMutation"]),
    ...mapActions(["getUsersAction"])
  },
  mounted() {
    this.getUsersAction();
  },
  watch: {
    filteredUsers(newValue){
      console.log(newValue)
    }
  }
};
</script>

<style scoped>
.users {
  width: 50%;
  padding: 10px 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}
</style>
