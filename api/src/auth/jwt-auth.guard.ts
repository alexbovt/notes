import { User } from './../users/intefaces/user.inteface';
import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  public canActivate(context: ExecutionContext) {
    return super.canActivate(context)
  }

  public handleRequest(error, user, info){
    if (error || !user) {
      throw error || new UnauthorizedException()
    }

    return user
  }
}
