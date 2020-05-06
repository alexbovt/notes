import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';

import {AuthService} from "../auth.service";
import {ClientUser} from "../../users/intefaces/user.inteface";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    public async validate(login: string, password: string): Promise<ClientUser> {
        const user = await this.authService.validateUser(login, password)

        if (!user)
            throw new UnauthorizedException()

        return user
    }
}
