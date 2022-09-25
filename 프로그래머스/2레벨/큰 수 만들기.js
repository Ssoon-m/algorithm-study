// number.length - (number.length - k) 까지 for문 돌면서 가장 큰 수를 찾음
// 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하라
const solution = (number, k) => {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    const el = number[i];
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    stack.push(el);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
};

console.log(solution('4177252841', 4));
