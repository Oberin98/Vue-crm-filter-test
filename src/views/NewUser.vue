<template>
  <section class="user-page">
    <form @submit="createUser" class="create-user-form">
      <label for="firstName">Firs Name</label>
      <input
        type="text"
        placeholder="Enter first name"
        autofocus
        id="firstName"
        v-model="firstName"
        class="new-user-item"
      />
      <label for="lastName">Last Name</label>
      <input
        type="text"
        placeholder="Enter last name"
        id="lastName"
        v-model="lastName"
        class="new-user-item"
      />
      <label for="age">Age</label>
      <input type="text" placeholder="Enter age" class="new-user-item" id="age" v-model="age" />
      <label for="role">Role</label>
      <select id="role" @change="selectHandler">
        <option selected disabled />
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
      </select>
      <label for="company">Company</label>
      <input
        type="text"
        class="new-user-item"
        placeholder="Enter company"
        id="company"
        v-model="company"
      />
      <button type="submit">create</button>
    </form>
    <div class="err" v-if="errFlag">{{err}}</div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      age: "",
      role: "",
      company: "",
      err: "All the fields are required",
      errFlag: false
    };
  },
  methods: {
    ...mapActions(["createUserAction"]),
    selectHandler(event) {
      this.role = event.target.value;
    },

    createUser(event) {
      event.preventDefault();
      const { firstName, lastName, age, role, company } = this;
      if (!firstName || !lastName || !age || !role || !company) {
        this.errFlag = true;
      } else {
        this.createUserAction({ firstName, lastName, age, role, company });
        this.errFlag = false;
        this.$router.push('/');
      }
      this.firstName = "";
      this.lastName = "";
      this.age = "";
      this.role = "";
      this.company = "";
    }
  }
};
</script>

<style scoped>
.user-page {
  margin: auto auto;
}

.create-user-form {
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin: 0 auto;
  background-color: rgba(1, 50, 67, 1);
  padding: 30px;
  margin-top: 20vh;
  color: white;
}

.new-user-item {
  margin-bottom: 10px;
  padding: 5px 5px;
  background-color: rgba(171, 183, 183, 1);
  color: white;
  font-size: 110%;
  outline: none;
  border: none;
}

select {
  padding: 3px 20px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 110%;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 10px;
}

option {
  border: none;
  border-bottom: 1px solid white;
  background-color: rgba(1, 50, 67, 1);
}

label {
  margin-bottom: 5px;
}

button {
  outline: none;
  padding: 5px 10px;
  color: white;
  font-size: 120%;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.err {
  font-size: 120%;
  text-align: center;
  color: red;
  font-weight: bold;
  margin-top: -30px;
}
</style>
