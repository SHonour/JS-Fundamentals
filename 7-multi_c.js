const count = Number(process.argv[2]);

if (!Number.isInteger(count)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < count) {
    console.log("C is fun");
    i++;
  }
}
