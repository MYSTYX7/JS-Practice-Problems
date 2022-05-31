const divisorFinder = (num) => {
  const arr = [];

  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }

  if (arr.length !== 0) {
    arr.unshift(1);
    arr.push(num);
    console.log(`Divisors of ${num}: ${arr}`);
  } else {
    console.log(`${num} is a Prime Number`);
  }
};

divisorFinder(300);
divisorFinder(97);
divisorFinder(779);
