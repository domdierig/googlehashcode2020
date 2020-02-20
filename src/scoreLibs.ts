import { Library } from './Library';

export const scoreLibs = (arrayOfLibs: Library[], booksTotal:number) => {
    for(let lib of arrayOfLibs) {
        lib.score += lib.signupProcess;
        lib.score += lib.shippingSpeed;
        let bookDelta = booksTotal - lib.totalBooks;
        lib.score += bookDelta;
    }
}