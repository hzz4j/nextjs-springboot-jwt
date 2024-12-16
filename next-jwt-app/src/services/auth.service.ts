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
  }

  async login(email: string, password: string) {
    const res = await this.instance.post('/auth/login', {
      email,
      password
    })
    return res.data.token as string
  }
}

export default AuthService
