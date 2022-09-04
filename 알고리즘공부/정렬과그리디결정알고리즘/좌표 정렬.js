const solution = (arr) => {
  return arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
};
// 정렬기준은 먼저 x값에 의해서 정렬
// x값이 같을 경우 y값에 의해 정렬
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(arr));
