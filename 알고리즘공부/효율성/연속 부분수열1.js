// 내가 푼 풀이
// const solution = (arr, s) => {
//   let result = 0;
//   let n = arr.length;
//   let lt = 0;
//   let rt = 0;
//   let sum = 0;
//   while (rt < n) {
//     sum += arr[rt];
//     if (sum < s) rt++;
//     else if (sum === s) result++;
//     else if (sum > s) {
//       sum = 0;
//       rt = ++lt;
//     }
//   }
//   return result;
// };

const solution = (arr, m) => {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
};

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(arr, 6));
