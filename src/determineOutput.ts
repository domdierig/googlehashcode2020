import { Context } from './Context';
import { Output } from './Output';
import { Library } from './Library';

export function determineOutput(context: Context): Output {
    const output: Output = new Output();
    const libraryIds: Set<number> = new Set<number>();
    const bookIds: Set<number> = new Set<number>();
    const firstLibrary = findFirstLibrary(context.libraries);

    addLibrary(libraryIds, bookIds, output, firstLibrary);

    for (let i = 0; i < context.libraries.length; i++) {
        const library = findNextLibrary(libraryIds, bookIds, context.libraries);

        addLibrary(libraryIds, bookIds, output, library);
    }

    return output;
}

function addLibrary(libraryIds: Set<number>, bookIds: Set<number>, output: Output, library: Library): void {
    libraryIds.add(library.id);

    for (const book of library.books) {
        bookIds.add(book.id);
    }

    output.addLibrary(library.id, library.getSortedBookIds());
}

function findNextLibrary(libraryIds: Set<number>, bookIds: Set<number>, library: Library[]): Library {
    library.sort((a: Library, b: Library) => {
        const scoreA
    });
}

function findFirstLibrary(libraries: Library[]): Library {
    return libraries.reduce((shortestLibrary: Library, library: Library) => {
        if (library.signupProcess > shortestLibrary.signupProcess) {
            return shortestLibrary;
        }

        if (library.getBookScore() < shortestLibrary.getBookScore()) {
            return shortestLibrary;
        }

        return library;
    }, libraries[0]);
}
