export class Context {

    constructor(
        public readonly totalBooks: number,
        public readonly totalLibraries: number,
        public readonly daysForScanning: number,
        public readonly books: number[]
    ) {
    }

}
