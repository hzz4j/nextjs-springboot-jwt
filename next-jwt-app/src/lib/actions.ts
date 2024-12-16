'use server'
import { authService } from '@/services'
import z from 'zod'
import { redirect } from 'next/navigation'

const FormScheme = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  email: z.string().email({ message: 'Email is required' })
})

const LoginForm = FormScheme.omit({ username: true })

type State = {
  errors?: {
    username?: string[] | undefined
    password?: string[] | undefined
    email?: string[] | undefined
  }
  message?: string
}
export async function registerUser(_preState: State, formData: FormData) {
  const rawFormData = Object.fromEntries(formData)
  const validateFields = FormScheme.safeParse(rawFormData)
  if (!validateFields.success) {
    console.log({ rawFormData })
    return {
      errors: validateFields.error.flatten().fieldErrors
    } satisfies State
  }

  const { username, password, email } = validateFields.data
  try {
    await authService.signUp(username, email, password)
  } catch (e) {
    console.error(e)
    return { message: '注册失败' } satisfies State
  }

  redirect('/')
  return {} as State
}
