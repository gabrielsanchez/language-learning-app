'use strict'

const fp = require('fastify-plugin')
const crypto = require('node:crypto')

// In-memory storage for users
const users = new Map()

// Plugin to provide users store functionality
module.exports = fp(async function (fastify, opts) {
  // Decorate fastify instance with users store methods
  fastify.decorate('users', {
    // Create a new user
    create: (userData) => {
      const id = crypto.randomUUID()
      const user = { id, ...userData }
      users.set(id, user)
      return user
    },
    
    // Get user by ID
    get: (id) => {
      return users.get(id)
    },
    
    // Check if user exists
    exists: (id) => {
      return users.has(id)
    }
  })
})
