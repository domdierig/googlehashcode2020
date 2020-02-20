import { parseInput } from './parseInput';
import { Context } from './Context';

const context: Context = parseInput('a_example.txt');

console.dir(context.libraries);