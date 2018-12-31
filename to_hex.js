const windowSize = require('window-size');
const { width } = windowSize;

process.stdin.setEncoding('utf8');

process.stdin.on('data', readInput);
process.stdin.on('end', () => process.exit());

function readInput(input) {
  if (input !== null) {
    toHex(input);
  }
}

function toHex(input) {
  input.split('\n').forEach(parseLine);
}

function parseLine(input) {
  const chunkSize = Math.floor((width - 3) * 0.1);
  let index = 0;

  while (index < input.length) {
    const part = input.substr(index, chunkSize);
    const outHex = Buffer.from(part, 'utf8').toString('hex');
    const x = part.replace(/\t/g, '  ').replace(/\u200B/g,'').padEnd(chunkSize, ' ');
    process.stdout.write(x + ' | ' + outHex.match(/.{1,2}/g).join(' ') + '\n');
    index += chunkSize;
  }
}