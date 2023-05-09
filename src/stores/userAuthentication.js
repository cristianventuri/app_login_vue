import { defineStore } from 'pinia'
export const useUserAuthentication = defineStore('userAuthentication', {
  state: () => {
    return {
      id: null,
      user: null,
      name: null,
      token: null
    }
  },

  actions: {
    logOut() {
      this.id = null;
      this.user = null;
      this.name = null;
      this.token = null;
      sessionStorage.removeItem('userData');
    },
    logIn(id, user, name, token) {
      if (id && user && name && token) {
        this.id = id;
        this.user = user;
        this.name = name;
        this.token = token;
        sessionStorage.setItem('userData', JSON.stringify(this.$state));
      } else {
        this.logOut();
      }
    },
    validateAuthentication() {
      if (this.id && this.user && this.name && this.token) {
        return true;
      } else {
        try {
          var storageSession = sessionStorage.getItem('userData');
          if (storageSession) {
            var objectUserData = JSON.parse(storageSession);
            if (objectUserData.id && objectUserData.user && objectUserData.name && objectUserData.token) {
              this.logIn(objectUserData.id, objectUserData.user, objectUserData.name, objectUserData.token);
              return true;
            } else {
              this.logOut();
              return false;
            }
          } else {
            this.logOut();
            return false;
          }
        } catch (error) {
          console.warn(error)
          this.logOut();
          return false;
        }
      }
    },
  },

  getters: {
    getID: (state) => {
      this.validateAuthentication();
      return state.id;
    },
    getName: (state) => {
      this.validateAuthentication();
      return state.name;
    },
    getUser: (state) => {
      this.validateAuthentication();
      return state.user;
    },
    getToken: (state) => {
      this.validateAuthentication();
      return state.token;
    },
  },
})
