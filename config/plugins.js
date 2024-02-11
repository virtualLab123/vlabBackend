module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'virtuallab917@gmail.com',
          defaultReplyTo: 'virtuallab917@gmail.com', 
        },
      },
    },
    // ...
  });