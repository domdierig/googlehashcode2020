export class Library {

    constructor(
        public readonly id: number,
        public readonly totalBooks: number,
        public readonly signupProcess: number,
        public readonly shippingSpeed: number,
        public readonly books: number[]
    ) {
    }

}
