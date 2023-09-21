import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const userCore = {
  email: z.string({
    required_error: 'E-mail is required',
    invalid_type_error: 'E-mail must be a string'
  }).email(),
  name: z.string(),
}

const createUserSchema = z.object({
  email: z.string({
    required_error: 'E-mail is required',
    invalid_type_error: 'E-mail must be a string'
  }).email(),
  name: z.string(),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string'
  })
})

const createUserResponseSchema = z.object({
  id: z.number(),
  email: z.string({
    required_error: 'E-mail is required',
    invalid_type_error: 'E-mail must be a string'
  }).email(),
  name: z.string(),
})

export type createUserInput = z.infer<typeof createUserSchema>

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema
})