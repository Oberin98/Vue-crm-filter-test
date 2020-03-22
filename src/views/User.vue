<template>
  <section class="user">
    <div class="left-side">
      <header class="user-header block">
        <Modal v-if="showModal" v-bind:userValues="user" v-on:close-modal="closeModal" />
        <button type="button" class="update" @click="showModal = true">
          <b>Id:</b>
          {{user.id}}
        </button>
        <h3 class="full-name">{{user.lastName}} {{user.firstName}}</h3>
      </header>
      <p class="age block">Age: {{user.age}}</p>
      <p class="role block">Role: {{user.role}}</p>
      <div class="company-wrapper block">
        <h4 class="company-label">Company:</h4>
        <p class="company">{{user.company}}</p>
      </div>
    </div>
    <div class="right-side">
      <img src="../assets/user.png" alt="photo" class="person-img">
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";

export default {
  name: "User",
  components: {
    Modal
  },
  props: ["user"],
  data() {
    return {
      showModal: false,
      userValues: this.user
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>


<style scoped>
.left-side {
  width: 60%;
}

.right-side {
  width: 40%;
}

.user {
  background-color: rgba(1, 50, 67, .9);
  color: white;
  padding: 20px;
  min-height: 150px;
  width: 100%;
  display: flex;

  transition: all 0.2s;
}

.person-img {
  width: 100%;
  height: 100%;
}

.user:hover {
  box-shadow: 5px 5px 3px 0 rgba(0, 0, 0, 1);
}

.block {
  padding: 5px;
  margin: 5px;
}

.user-header {
  display: flex;
  flex-direction: row;
}

.full-name {
  margin-left: 10px;
}

.update {
  outline: none;
  border: none;
  background-color: transparent;
  padding: 2px 8px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 1px;
  color: white;

  transition: all .2s;
}

.update:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

.company-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.company-label {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
