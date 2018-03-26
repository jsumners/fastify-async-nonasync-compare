'use strict'

const fastify = require('fastify')()

fastify.get('/regular', function (req, reply) {
  setTimeout(() => reply.send({hello: 'world'}), 100)
})

async function dbQuery () {
  return new Promise((resolve) => {
    setTimeout(() => resolve({hello: 'world'}), 100)
  })
}

fastify.get('/async', async function (req, reply) {
  return await dbQuery()
})

fastify.listen(2000, (err) => {
  if (err) throw err
})
