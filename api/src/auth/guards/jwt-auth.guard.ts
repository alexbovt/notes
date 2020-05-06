import {Injectable, ExecutionContext, UnauthorizedException, CanActivate} from '@nestjs/common'
import {AuthGuard} from '@nestjs/passport'

import {STRATEGY_NAMES} from "../constants";

@Injectable()
export class JwtAuthGuard extends AuthGuard(STRATEGY_NAMES.JWT) implements CanActivate {
    public canActivate(context: ExecutionContext) {
        return super.canActivate(context)
    }

    public handleRequest(error, user, info) {
        if (error || !user)
            throw error || new UnauthorizedException()

        return user
    }
}
