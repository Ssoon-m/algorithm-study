// N개의 숫자중 3개를 뽑을 수 있는 모든 경우의 수를 찾아서 더한다.
// 예를 들어서 25 25 23 23 22 이고 3번 째 큰 값을 찾으라고 한다면
// 22가 정답이다.

// n장의 카드중 3장을 뽑아야 하니까 3중 for문으로 돌려야 한다.
const solution = (k, arr) => {
  let answer;
  let n = arr.length;
  let tmp = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return [...tmp].sort((a, b) => b - a)[k - 1];
};

// 13,15,34 / 13,34,23 / 13,23,45 / 13,45,65 / 13,65,33
// 13,33,11 / 13,11,26 / 13,26,42

// for (let i = 1; i < 10; i++) {
//   for (let j = i + 1; j < 10; j++) {
//     console.log(i, j, j + 1);
//   }
// }
// 1,2,3,4,5,7,8,9,10

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
