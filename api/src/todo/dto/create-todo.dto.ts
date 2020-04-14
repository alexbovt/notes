export class CreateTodoDTO {
    constructor(
        public readonly title: string,
        public readonly author: string,
        public readonly date: string,
        public readonly isDone: boolean,
    ) {
    }
}
