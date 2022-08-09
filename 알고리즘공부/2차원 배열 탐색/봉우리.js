// 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.
// 자신보다 상하좌우 숫자가 다 작으면 봉우리 지역이다.

// const solution = (arr) => {
//   let result = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (
//         arr[i][j] > (j - 1 < 0 ? 0 : arr[i][j - 1]) &&
//         arr[i][j] > (j + 1 > arr.length - 1 ? 0 : arr[i][j + 1]) &&
//         arr[i][j] > (i - 1 < 0 ? 0 : arr[i - 1][j]) &&
//         arr[i][j] > (i + 1 > arr.length - 1 ? 0 : arr[i + 1][j])
//       ) {
//         result++;
//       }
//     }
//   }
//   return result;
// };

const solution = (arr) => {
  let result = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = false;
          break;
        }
      }
      if (flag) result++;
    }
  }
  return result;
};

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
