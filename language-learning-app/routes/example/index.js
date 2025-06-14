/**
 * Example route module for Fastify.
 *
 * @param {import('fastify').FastifyInstance} fastify - The Fastify instance.
 * @param {Object} opts - Additional options.
 * @returns {Promise<void>}
 *
 * Registers a GET endpoint at '/' that returns a simple example string.
 */
'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}
