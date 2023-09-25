const swaggerOptionsConfig = {
    swaggerDefinition: {
      swagger: '2.0',
      info: {
        version: '1.0.0',
        title: 'Todo app API Documentation',
        description: 'Todo app API Documentation',
        license: {
          url: 'https://opensource.org/licenses/MIT',
        },
      },
      securityDefinitions: {
        JWT: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
      basePath: '/',
      tags: [
        {
          name: 'Users',
          description: 'API for users',
        },
      ],
      produces: ['application/json'],
      paths: {
        '/users/signup': {
            post: {
              tags: ['Users'],
              summary: 'Signup User',
              parameters: [
                {
                  name: 'body',
                  in: 'body',
                  required: true,
                  schema: {
                    type: 'object',
                    properties: {
                      firstName: {
                        type: 'string',
                      },
                      lastName: {
                        type: 'string',
                      },
                      email: {
                        type: 'string',
                      },
                      password: {
                        type: 'string',
                      },
                    },
                    required: ['firstName', 'lastName','email','password'],
                  },
                },
              ],
              responses: {
                200: {
                  description: 'OK',
                },
              },
            },
          },
        '/users/login': {
          post: {
            tags: ['Users'],
            summary: 'Login User',
            parameters: [
              {
                name: 'body',
                in: 'body',
                required: true,
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                    },
                    password: {
                      type: 'string',
                    },
                  },
                  required: ['email', 'password'],
                },
              },
            ],
            responses: {
              200: {
                description: 'OK',
              },
            },
          },
        },
        '/users': {
          get: {
            tags: ['Users'],
            summary: 'Get all users',
            security: [
                {
                  JWT: [], // Include the JWT security definition here
                },
              ],
            responses: {
              200: {
                description: 'OK',
              },
            },
          },
        },
      },
    },
    apis: ['./routers/*.js'],
  };
  
  module.exports={swaggerOptionsConfig}

