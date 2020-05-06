import {AuthController} from './auth.controller'
import {Module} from '@nestjs/common'
import {JwtModule} from '@nestjs/jwt'
import {PassportModule} from "@nestjs/passport";

import {UsersModule} from './../users/users.module'
import {AuthService} from './auth.service'
import {JwtStrategy} from './strategies/jwt.strategy'
import {LocalStrategy} from "./strategies/local.strategy";
import {JWT_CONSTANTS} from './constants'

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: JWT_CONSTANTS.secret,
            signOptions: {
                expiresIn: JWT_CONSTANTS.expiresIn,
            },
        }),
        UsersModule
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {
}
