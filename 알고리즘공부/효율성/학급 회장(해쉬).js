// A,B,C,D,E 후보가 있다.
// const solution = (arr) => {
//   const obj = arr.split('').reduce((acc, cur) => {
//     acc[cur] = acc[cur] || 0;
//     acc[cur]++;
//     return acc;
//   }, {});
//   return Math.max(...Object.values(obj));
// };

const solution = (s) => {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
};

let s = 'BACBACCACCBDEDE';
console.log(solution(s));
