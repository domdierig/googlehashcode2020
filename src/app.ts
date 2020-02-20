import { parseInput } from './parseInput';
import { Context } from './Context';
import { scoreLibs } from './scoreLibs';
 
const context: Context = parseInput('a_example.txt');

scoreLibs(context.libraries, context.totalBooks);

console.dir(context.libraries);