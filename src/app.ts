import { parseInput } from './parseInput';
import { Context } from './Context';
import { Output } from './Output';
import { writeOutput } from './writeOutput';
import consola from 'consola';

const inputFileNames: string[] = [
    'a_example.txt',
    'b_read_on.txt',
    'c_incunabula.txt',
    'd_tough_choices.txt',
    'e_so_many_books.txt',
    'f_libraries_of_the_world.txt',
];

for (const inputFileName of inputFileNames) {
    consola.start(`Start working on ${inputFileName}...`);

    const context: Context = parseInput(inputFileName);
    const output: Output = new Output();

    for (const library of context.libraries) {
        output.addLibrary(library.id, library.books);
    }

    consola.start(`Writing output for ${inputFileName}...`);

    writeOutput(inputFileName, output);

    consola.success(`Finished ${inputFileName}!`);
}
