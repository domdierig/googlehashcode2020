export class Library {
    public score: number;
    constructor(
        public readonly id: number,
        public readonly totalBooks: number,
        public readonly signupProcess: number,
        public readonly shippingSpeed: number,
        public readonly books: number[],
    ) {
        this.score = 0;
    }



}
