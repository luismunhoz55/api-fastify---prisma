import { z } from 'zod'

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

export type createUserInput = z.infer<typeof createUserSchema>