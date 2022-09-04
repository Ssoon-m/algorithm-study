// 5: 30
const solution = (arr) => {
  let answer = 0;
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let et = 0;
  for (let x of arr) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
};
// 끝나는 시간 <= 시작 시간
// 끝나는 시간으로 우선 정렬을 한다.
const arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
// const arr = [
//   [3, 3],
//   [1, 3],
//   [2, 3],
// ];
// 답 : 3
console.log(solution(arr));
