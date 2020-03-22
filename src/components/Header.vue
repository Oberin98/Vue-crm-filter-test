<template>
  <header class="header">
    <div class="header-left-side">
      <button
        v-if="mainPage"
        type="button"
        class="btn filter-child"
        @click="redirectToCreateUser"
      >Create New User</button>
      <button
        v-if="!mainPage"
        type="botton"
        class="btn filter-child main-page"
        @click="redirectToMainPage"
      >Main page</button>
    </div>
    <div class="header-right-side" v-if="mainPage">
      <form @submit.prevent="filter" class="filter-form">
        <select class="users-amount filter-child filter-select" v-model="amount">
          <option value="5" class="filter-option">5 Users</option>
          <option value="10" class="filter-option">10 Users</option>
          <option class="filter-option">All</option>
        </select>
        <select class="user-role filter-child filter-select" v-model="role">
          <option value="user" class="filter-option">user</option>
          <option value="admin" class="filter-option">admin</option>
          <option value="manager" class="filter-option">manager</option>
        </select>
        <div class="checkbox filter-child">
          <label for="isActive" class="checkbox-label">Show active users</label>
          <input type="checkbox" name="isActive" id="isActive" @click="checkboxHandler" />
        </div>
        <button type="submit" class="filter-child btn">Filter</button>
        <button type="button" class="filter-child btn" @click="resetFilters">Reset</button>
      </form>
    </div>
  </header>
</template>
  
<script>
import { mapMutations } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      amount: 10,
      roles: ["user", "manager", "admin"],
      role: "",
      activityTypes: [true, false],
      isActive: "",
      checked: false,
      mainPage: true
    };
  },
  methods: {
    ...mapMutations(["filterMutation", "filterByAmountMutation"]),

    filter() {
      const {
        isActive,
        activityTypes,
        checked,
        role,
        roles,
        filterMutation
      } = this;
      this.amount === "All" ? (this.amount = undefined) : null;
      filterMutation({
        amount: this.amount,
        role: role ? [role] : roles,
        isActive: checked ? [isActive] : activityTypes
      });
    },

    checkboxHandler() {
      this.checked = true;
      this.isActive = !this.isActive;
    },

    resetFilters() {
      this.amount = 10;
      this.role = "";
      this.checked = false;
      this.isActive = "";
      this.filterByAmountMutation(10);
    },

    redirectToCreateUser() {
      this.$router.push("/user");
      this.mainPage = false;
    },

    redirectToMainPage() {
      this.$router.push("/");
      this.mainPage = true;
    }
  }
};
</script>

<style scoped>
.header {
  background-color: rgba(1, 50, 67, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
}

.header-right-side {
  margin-right: 4vw;
}

.header-left-side {
  margin-left: 4vw;
}

.filter-form {
  display: flex;
  padding: 5px;
}

.filter-child + .filter-child {
  margin-top: 0;
  margin-left: 12px;
}

.filter-select {
  padding: 3px 20px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  background-color: transparent;
  color: white;
}

.filter-option {
  border: none;
  border-bottom: 1px solid white;
  background-color: rgba(1, 50, 67, 1);
}

.checkbox {
  color: white;
  display: flex;
  align-items: center;
}

.checkbox-label {
  padding-right: 10px;
}

.btn {
  outline: none;
  padding: 5px 10px;
  color: white;
  font-size: 120%;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: all 0.2s;
}

.btn:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
</style>
