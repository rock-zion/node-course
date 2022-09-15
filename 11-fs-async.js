const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) return;
  const first = result;
  console.log("first", result);

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) return;
    const second = result;
    console.log("second", result);

    writeFile(
      "./content/result-async.txt",
      ` Here is the result : ${first} & ${second}`,
      (err, result) => {
        if (err) {
          console.log("Error", err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting new task");
