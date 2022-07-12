import { defineStore } from 'pinia';
export const testStore = defineStore({
  id: 'userInfo',
  state: () => {
    return {
      userInfo: {}
    };
  },
  actions: {
    setUserInfo(data) {
      // 可以直接通过 this 访问 state 属性
      this.userInfo = data;
    }
  }
});
