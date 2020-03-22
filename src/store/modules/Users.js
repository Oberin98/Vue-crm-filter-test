import axios from 'axios';
import moment from 'moment';


const actions = {
  async getUsersAction(ctx) {
    try {
      const response = await axios.get(`http://localhost:3000/users`);
      ctx.commit('updateUsers', response.data)
    } catch (err) {
      return ({ err: 'Some troubles!!!' })
    }
  },

  createUserAction(ctx, { firstName, lastName, age, role, company }) {
    axios.post('http://localhost:3000/users', {
      firstName,
      lastName,
      age,
      role,
      company,
      isActive: false,
      createdAt: moment().format('MMMM Do YYYY, h:mm a')
    }).then(newUser => {
      ctx.commit('addUserMutation', newUser.data)
    })
  },

  updateUserAction(ctx, userValues) {
    axios({
      method: 'put',
      url: `http://localhost:3000/users/${userValues.id}`,
      data: {
        ...userValues,
        updatedAt: moment().format('MMMM Do YYYY, h:mm a')
      }
    }).then(user => {
      ctx.commit('updateUserMutation', user.data)
    })
  }
};

const mutations = {
  updateUsers(state, users) {
    state.users = users;
    state.filteredUsers = users.slice(0, 10);
  },


  filterByAmountMutation(state, amount) {
    if (amount) {
      state.filteredUsers = state.users.slice(0, amount)
    } else {
      state.filteredUsers = state.users
    }
  },

  filterMutation(state, { amount = state.users.length, role, isActive }) {
    const quantity = state.users.slice(0, amount);
    state.filteredUsers = quantity.filter(user => {
      return (role.some(role => role === user.role) &&
        isActive.some(activity => activity === user.isActive))
    })
  },

  updateUserMutation(state, updatedUser) {
    
    const index = state.users.findIndex(user => user.id === updatedUser.id);
    const indexFiltered = state.filteredUsers.findIndex(user => user.id === updatedUser.id);
    state.users[index] = updatedUser;
    state.filteredUsers[indexFiltered] = updatedUser;    
  },

  addUserMutation(state, newUser){
    state.users.push(newUser);
  }
};

const state = {
  users: [],
  filteredUsers: []
};

const getters = {
  getUsersGetter: state => state.filteredUsers,
};

export default {
  state,
  actions,
  mutations,
  getters
}
