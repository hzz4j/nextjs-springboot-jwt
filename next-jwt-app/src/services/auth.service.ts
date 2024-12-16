import axios, { AxiosInstance } from 'axios'

class AuthService {
  protected readonly instance: AxiosInstance
  constructor(server: string) {
    this.instance = axios.create({
      baseURL: server,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async signUp(username: string, email: string, password: string) {
    const msg: String = await this.instance.post('/auth/signup', {
      username,
      email,
      password
    })
    console.log(`注册成功: => `, msg)
  }

  async login(email: string, password: string) {
    return this.instance.post('/auth/login', {
      email,
      password
    })
  }
}

export default AuthService
