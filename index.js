'use strict'

const fastify = require('fastify')()

fastify.get('/regular', function (req, reply) {
  reply.send({hello: 'world'})
})

fastify.get('/async', async function (req, reply) {
  return {hello: 'world'}
})

fastify.listen(2000, (err) => {
  if (err) throw err
})
