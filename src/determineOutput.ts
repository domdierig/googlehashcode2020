import { Context } from './Context';
import { Output } from './Output';
import { Library } from './Library';

export function determineOutput(context: Context): Output {
    const output: Output = new Output();
    const libraryIds: Set<number> = new Set<number>();
    const bookIds: Set<number> = new Set<number>();
    const firstLibrary = findFirstLibrary(context.libraries);

    addLibrary(libraryIds, bookIds, output, firstLibrary);

    let filteredLibraries: Library[] = filterDuplicateLibraries(context.libraries, libraryIds);

    while (filteredLibraries.length > 0) {
        const library = findNextLibrary(libraryIds, bookIds, context.libraries);

        addLibrary(libraryIds, bookIds, output, library);

        filteredLibraries = filterDuplicateLibraries(filteredLibraries, libraryIds);
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

function findNextLibrary(libraryIds: Set<number>, bookIds: Set<number>, libraries: Library[]): Library {
    for (const library of libraries) {
        library.filterDuplicates(bookIds);
    }

    return libraries.reduce((nextLibrary: Library, library: Library) => {
        return library.getBookScore() > nextLibrary.getBookScore()
            ? library
            : nextLibrary;
    }, libraries[0]);
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

function filterDuplicateLibraries(libraries: Library[], libraryIds: Set<number>): Library[] {
    return libraries.filter((library: Library) => !libraryIds.has(library.id));
}
