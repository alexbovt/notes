import {Document} from 'mongoose';

export interface  Todo extends  Document{
    readonly title: string,
    readonly isDone: boolean,
    readonly author: string;
    readonly date: string
}
