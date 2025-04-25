import User from '#models/user'
import { createLoginUserValidator } from '#validators/auth_login_validator'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(createLoginUserValidator)
    const user = await User.verifyCredentials(email, password)

    return User.accessTokens.create(user)
  }

  async logout({ request, auth, response }: HttpContext) {
    await auth.use('api').invalidateToken()
  }
}
