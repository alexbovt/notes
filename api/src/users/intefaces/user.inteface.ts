import {Document} from 'mongoose'

type UserModel = {
    readonly login: string
    readonly password: string
    readonly name: string
    readonly email: string
}

export type User = UserModel & Document

export type ClientUser = Omit<UserModel, 'password'> & Pick<User, '_id'>
