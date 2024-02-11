module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/greeting',
     handler: 'greeting.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
