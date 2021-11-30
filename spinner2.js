let arr = ["|", "/", "-", "\\", "|", "|", "/", "-", "\\", "|","\n"];
for (let i = 0; i < arr.length; i++) {
  let char = i;
  setTimeout(() => {
    process.stdout.write(`\r${arr[char]}   `);
  }, 200 * (char + 1))
}