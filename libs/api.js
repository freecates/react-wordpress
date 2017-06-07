import 'isomorphic-fetch';

const siteName = 'reactwordpresstest.wordpress.com';
const baseUrl = `https://public-api.wordpress.com/wp/v2/sites/${siteName}`;

const api = {
  site: {
    async getInfo() {
      const response = await fetch(baseUrl);
      const data = await response.json();
      return data;
    },
  },
  posts: {
    async getList() {
      const response = await fetch(`${baseUrl}/posts`);
      const data = await response.json();
      return data;
    },
    async getSingle(id) {
      const response = await fetch(`${baseUrl}/posts/${id}`);
      const data = await response.json();
      return data;
    },
  },
};


export default api;
