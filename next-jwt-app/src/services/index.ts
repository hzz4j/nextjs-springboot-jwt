import 'server-only'

import AuthService from './auth.service'
export const createAuthServiceManager = () => {
  let authService: Readonly<AuthService> | undefined

  return () => {
    if (!authService) {
      authService = new AuthService(process.env.API_URL)
    }
    return authService
  }
}

export const authService = createAuthServiceManager()()
