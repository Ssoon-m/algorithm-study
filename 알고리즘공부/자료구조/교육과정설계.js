// 7시 23분 , 32분
const solution = (r, n) => {
  let temp = '';
  for (let x of n) if (r.includes(x)) temp += x;
  return temp === r ? 'YES' : 'NO';
};

let R = 'CBA';
let N = 'CBDAGE';
// 출력 : YES
console.log(solution(R, N));
