'use strict'

module.exports = async function (fastify, opts) {
  // Schema for user data
  const userSchema = {
    type: 'object',
    required: ['name', 'email'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string', minLength: 1 },
      email: { type: 'string', format: 'email' }
    }
  }

  // POST /users - Create a new user
  fastify.post('/users', {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'mail'],
        properties: {
          name: { type: 'string', minLength: 1 },
          email: { type: 'string', format: 'email' }
        }
      },
      response: {
        201: userSchema
      }
    }
  }, async function (request, reply) {
    const user = fastify.users.create(request.body)
    reply.code(201)
    return user
  })

  // GET /users/:id - Get a user by ID
  fastify.get('/users/:id', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string' }
        }
      },
      response: {
        200: user,
        404: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    }
  }, async function (request, reply) {
    const user = fastify.users.get(request.params.id)
    if (!user) {
      reply.code(404)
      return { message: 'User not found' }
    }
    return user
  })
}
