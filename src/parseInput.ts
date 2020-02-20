import fs from 'fs';
import path from 'path';

export function parseInput(fileName: string) {
    const filePath: string = path.join('input', fileName);
    const content: string = fs.readFileSync(filePath, { encoding: 'utf8' });
    const lines: string[] = content.split('\n');

    console.log(lines);
}
