const ENV = {
    dev: {
      // apiUrl: 'http://192.168.1.128:3000',
      apiUrl: 'http://10.0.2.2:3000',
    },  
    prod: {
      apiUrl: 'http://18.101.2.354',
    },
  };
  
  const getEnvVars = () => {
    if (process.env.NODE_ENV === 'development') {
      return ENV.dev;
    } else {
      return ENV.prod;
    }
  };
  
  module.exports = getEnvVars();
  