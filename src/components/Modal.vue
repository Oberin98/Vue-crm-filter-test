<template>
  <div class="container">
    <form class="update-user" @submit.prevent="updateUser">
      <label for="firstName">Change firs name</label>
      <input
        type="text"
        name="firstName"
        placeholder="Change name"
        id="firstName"
        v-model="firstName"
        class="inpt"
      />

      <label for="lastName">Change last name</label>
      <input
        type="text"
        name="lastName"
        placeholder="Change last name"
        id="lastName"
        v-model="lastName"
        class="inpt"
      />

      <label for="age">Change age</label>
      <input type="text" name="age" class="inpt" placeholder="Change age" id="age" v-model="age" />

      <label for="role">Change role</label>
      <select name="role" id="role" v-model="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
      </select>

      <label for="company">Change company</label>
      <input
        type="text"
        class="inpt"
        name="company"
        placeholder="Enter company"
        id="company"
        v-model="company"
      />

      <div class="buttons">
        <button type="submit" class="btn-modal">Change</button>
        <button type="button" class="btn-modal" @click="closeModal">Close</button>
      </div>
    </form>
  </div>
</template>


<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Modal",
  props: ["userValues"],
  data() {
    return {
      ...this.userValues
    };
  },
  methods: {
    ...mapActions(["updateUserAction"]),
    ...mapMutations(["filterByAmountMutation"]),

    closeModal() {
      this.$emit("close-modal");
    },

    updateUser() {
      console.log(this.userValues);
      const {
        firstName,
        lastName,
        role,
        age,
        company,
        id,
        updateUserAction,
        isActive,
        createdAt
      } = this;
      updateUserAction({
        firstName,
        lastName,
        role,
        age,
        company,
        id,
        isActive,
        createdAt
      });

      this.$emit("close-modal");
    }
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.update-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 30px;
  min-width: 20vw;
  background-color: rgba(1, 50, 67, 1);
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
}

label {
  margin: 5px;
}

.inpt {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px;
  outline: none;
  background-color: rgba(171, 183, 183, 1);
  border: none;
  outline: none;
}

select {
  padding: 3px 20px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  background-color: transparent;
  color: white;
}

option {
  border: none;
  border-bottom: 1px solid white;
  background-color: rgba(1, 50, 67, 1);
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.btn-modal {
  outline: none;
  padding: 5px 10px;
  color: white;
  font-size: 120%;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
