import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TodoModule} from './todo/todo.module';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';

@Module({
    imports: [
        //#TODO Move url to .env
        MongooseModule.forRoot('mongodb://localhost/notes', {
            useNewUrlParser: true, useUnifiedTopology: true
        }),
        TodoModule,
        AuthModule,
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
