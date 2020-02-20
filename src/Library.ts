import { Book } from './Book';

export class Library {

    public score: number = 0;

    constructor(
        public readonly id: number,
        public readonly totalBooks: number,
        public readonly signupProcess: number,
        public readonly shippingSpeed: number,
        public readonly books: Book[],
    ) {}

    public getBookScore(): number {
        return this.books.reduce((score: number, book: Book) => score + book.score, 0);
    }

    public getSortedBookIds(): number[] {
        return this.books
            .sort((a: Book, b: Book) => b.score - a.score)
            .map((book: Book) => book.id);
    }

}
