const solution = (bracket) => {
  const stack = [];
  for (let x of bracket) {
    if (x === '(') stack.push(x);
    else if (x === ')') {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  return stack.length > 0 ? 'NO' : 'YES';
};

// const bracket = '(()(()))(()';
const bracket = '(()(()))(())))';
// no 가 나와야함
console.log(solution(bracket));

// ((()))
