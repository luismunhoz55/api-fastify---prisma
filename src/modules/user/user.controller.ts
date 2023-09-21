import { FastifyReply, FastifyRequest } from "fastify";
import { createUser } from './user.service'
import { createUserInput } from "./user.schema";

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