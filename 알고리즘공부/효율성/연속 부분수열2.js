const solution = (m, arr) => {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
    // lt = 0 rt = 1
    // rt가 증가해서 새로운 숫자가 sum에 추가되면
    // 그 숫자가 포함된 연속 부분 수열을 구해야 한다
  }

  return answer;
};

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
