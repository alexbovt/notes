export type Todo = {
    readonly _id: string;
    readonly title: string;
    readonly isDone: boolean;
    readonly author: string;
    readonly date: string;
};

export type CreateTodoDTO = Omit<Todo, '_id'>;
