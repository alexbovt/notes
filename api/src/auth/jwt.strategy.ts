import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { JWT_CONSTANTS } from './constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONSTANTS.secret,
    })
  }

  public validate(payload: { login: string; sub: string }): { userId: string; login: string } {
    return {
      userId: payload.sub,
      login: payload.login,
    }
  }
}
