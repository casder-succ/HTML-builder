const fs = require('fs');
const path = require('path');

process.on('exit', () => console.log('Good luck!'));
process.on('SIGINT', () => process.exit());

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

console.log('Enter your big data: ');

process.stdin.on('data', function (data) {
  const dataStr = data.toString().trim();

  if (dataStr === 'exit') {
    process.exit();
  }

  writeStream.write(dataStr, err => err);
});



