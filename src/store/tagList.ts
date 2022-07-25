import { defineStore } from 'pinia';

export default defineStore({
  id: 'tagList',
  state: () => {
    return {
      tags: [],
    };
  },
  persist: true,
  actions: {
    addTag(tag) {
      if (!this.tags.some((item) => item.name == tag.name)) {
        this.tags.push(tag);
      }
    },
  },
});
