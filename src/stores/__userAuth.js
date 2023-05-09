import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserAuth = defineStore('userAuth', () => {
  const userData = ref({});

  function setUser(id, username, name, token) {
    if (id && username && name && token) {
      userData.value = {
        "id": id,
        "user": username,
        "name": name,
        "token": token
      };
    } else {
      this.logout();
    }
  }

  function logout() {
    userData.value = {};
  }

  return { userData, setUser, logout }
})
