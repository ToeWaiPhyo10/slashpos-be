module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
    graphql: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      introspection: true,
      apolloServer: {
        tracing: false,
      },
    },
  }
})
