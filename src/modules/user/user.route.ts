import { FastifyInstance } from "fastify";
import { registerUserHandler } from './user.controller'

async function userRoutes(server: FastifyInstance) {
  server.post('/', registerUserHandler) // Default route is api/users
}

export default userRoutes