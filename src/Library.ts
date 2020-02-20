export class Library {

    constructor(
        public readonly signupProcess: number, //after how many days shipping begins
        public readonly shippingSpeed: number, //how many books by day are shipped
        public readonly books: number[] 
    ) {
    }

}
