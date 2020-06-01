import {Injectable} from '@nestjs/common'
import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';

import {JWT_CONSTANTS} from '../constants'
import {ClientUser} from "../../users/intefaces/user.inteface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_CONSTANTS.secret,
        })
    }

    public validate(payload: ClientUser): ClientUser {
        return payload
    }
}
