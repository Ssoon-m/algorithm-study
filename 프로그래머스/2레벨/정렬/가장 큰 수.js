const solution = (numbers) => {
  let strings = numbers.map((num) => num + '');
  strings.sort((a, b) => +(b + a) - +(a + b));
  return strings[0] === '0' ? '0' : strings.join('');
};
const arr = [6, 10, 2];

// result = 6210
console.log(solution(arr));
