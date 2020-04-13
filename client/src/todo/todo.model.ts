export class Todo {
    constructor(
        public readonly _id: string,
        public readonly title: string,
        public readonly isDone: boolean,
        public readonly author: string,
        public readonly date: string,
    ) {
    }
}
