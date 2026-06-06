const tokenManager = {
  getToken: () => {
    return localStorage.getItem('token');
  },

  setToken: (token) => {
    localStorage.setItem('token', token);
  },

  removeToken: () => {
    localStorage.removeItem('token');
  },

  isTokenValid: () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  },
};

export default tokenManager;
