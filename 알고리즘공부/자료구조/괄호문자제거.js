// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고
// 남은 문자만 출력하는 프로그램을 작성하세요.

// 내 풀이
// const solution = (s) => {
//   const stack = [];
//   let result = '';
//   for (let x of s) {
//     if (x === '(') stack.push(x);
//     else {
//       if (stack.length === 0) result += x;
//       if (x === ')') stack.pop();
//     }
//   }
//   return result;
// };
// 강의 풀이
const solution = (s) => {
  let answer;
  const stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  return stack.join('');cc
};

const s = '(A(BC)D)EF(G(H)(LJ)K)LM(N)';
// result => 'EFLM'
console.log(solution(s));
