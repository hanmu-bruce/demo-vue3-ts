import { defineStore } from 'pinia';

export default defineStore({
  id: 'tagView',
  state: () => {
    return {
      tags: [],
    };
  },
  actions: {
    addTag() {
      this.tags.push([]);
    },
  },
});
