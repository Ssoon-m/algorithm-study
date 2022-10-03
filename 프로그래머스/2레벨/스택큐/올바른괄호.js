const solution = (s) => {
  const stack = [];
  if (s[0] === ')') return false;
  for (let x of s) {
    if (x === '(') stack.push(x);
    else if (x === ')') stack.pop();
  }
  return stack.length === 0;
};

let bracket = ')()(';
console.log(solution(bracket));
