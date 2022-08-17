// 9:54
// N일 동안의 매출기록을 주고 "연속된" K일 동안의 최대 매출
// 10일 간의 매출 기록이 아래와 같을 때
// 12 15 11 20 25 10 20 19 13 15
// K = 3이면
// 최대 매출액은 11,20,25  = 56이다.

// 내가 푼 풀이
const solution = (k, arr) => {
  const result = [];
  let lt = 0;
  for (let rt = k; rt <= arr.length; rt++) {
    let sum = 0;
    for (let lt2 = lt; lt2 < rt; lt2++) {
      sum += arr[lt2];
    }
    lt++;
    result.push(sum);
  }
  return result;
};

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
// 출력 예제 56
