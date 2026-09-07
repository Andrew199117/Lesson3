const startCount: number = 100;
const endCount: number = 0;
let step: number = 1;

for (let counter = startCount; counter >= endCount; counter -= step, step++) {
  console.log(counter);
}
console.log(endCount);
