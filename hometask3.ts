const startCount: number = 100;
const endCount: number = 0;
let step: number = 1;

for (let counter = startCount; counter >= endCount; ) {
  console.log(counter);
  counter = counter - step;
  step++;
  if (endCount < 0) {
    console.log(0);
    break;
  }
}
