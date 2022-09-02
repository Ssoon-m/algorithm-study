// 9시 55
const solution = (str) => {
  let result = 0;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === '(') result += stack.length;
      else result += 1;
    }
  }
  return result;
};

const str = '()(((()())(())()))(())';
// 답은 17이 나와야 한다.
// (((()(()()))(())()))(()())
// 위는 24
console.log(solution('(((()(()()))(())()))(()())'));w
