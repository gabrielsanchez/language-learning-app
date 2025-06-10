'use strict'

module.exports = async function (fastify, opts) {
  const schema = {
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' }
        }
      }
    }
  }

  fastify.get('/', { schema }, async function (request, reply) {
    return { status: 'ok' }
  })
}
