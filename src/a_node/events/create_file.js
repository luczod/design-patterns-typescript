import fs from "fs";
const file = fs.createWriteStream("./file.txt");

// big.txt 430M
// bigger.txt 1.7G
// small.txt
/* 
for (let i = 0; i <= 1e6; i++) {
  file.write(
    `${i} - ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n`
  );
}

file.end(); */

const readFileAsArray = function (file, cb) {
  fs.readFile(file, function (err, data) {
    if (err) {
      return cb(err);
    }
    const lines = data.toString().trim().split("\n");
    cb(null, lines);
  });
};

readFileAsArray("./numbers.txt", (err, lines) => {
  if (err) throw err;
  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter((n) => n % 2 === 1);
  console.log("Odd numbers count:", oddNumbers.length);
});
