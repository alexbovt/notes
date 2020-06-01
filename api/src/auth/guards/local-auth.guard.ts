import {Injectable} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";

import {STRATEGY_NAMES} from "../constants";

@Injectable()
export class LocalAuthGuard extends AuthGuard(STRATEGY_NAMES.LOCAL) {
}
