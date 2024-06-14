import axios from 'axios';

export default ({ app }) => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/api', // Replace with your backend URL
    headers: {
      'Authorization': `Basic ${btoa('user:password')}` // Replace with your username and password
    }
  });

  app.config.globalProperties.$axios = instance;
}
