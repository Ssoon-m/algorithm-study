// 9:54
// N일 동안의 매출기록을 주고 "연속된" K일 동안의 최대 매출
// 10일 간의 매출 기록이 아래와 같을 때
// 12 15 11 20 25 10 20 19 13 15
// K = 3이면
// 최대 매출액은 11,20,25  = 56이다.

// 내가 푼 풀이
// const solution = (k, arr) => {
//   const result = [];
//   let lt = 0;
//   for (let rt = k; rt <= arr.length; rt++) {
//     let sum = 0;
//     for (let lt2 = lt; lt2 < rt; lt2++) {
//       sum += arr[lt2];
//     }
//     lt++;
//     result.push(sum);
//   }
//   return result;
// };

const solution = (k, arr) => {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
};

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
// 출력 예제 56
