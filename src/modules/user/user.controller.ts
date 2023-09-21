import { FastifyReply, FastifyRequest } from "fastify";
import { createUser } from './user.service'
import { createUserInput, loginInput } from "./user.schema";

export async function registerUserHandler(
  request: FastifyRequest<{
    Body: createUserInput // request body is type createUserInput
  }>,
  reply: FastifyReply
) {

  const body = request.body

  try {
    const user = await createUser(body)

    return reply.code(201).send(user)
  } catch (e) {
    console.log(e)
  }

}

export async function loginHandler(request: FastifyRequest<{
  Body: loginInput
}>, reply: FastifyReply) {
  
}