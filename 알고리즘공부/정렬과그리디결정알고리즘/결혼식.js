const solution = (times) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }
  // 아스키 코드 넘버상 e가 먼저이다.
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt(0) - b[1].charCodeAt(0);
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
};

// 오는 시간 13 , 가는시간 15라면
// 13정각에 피로연 장에 존재한다.
// 15정각엔 존재하지 않는다.
const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
// 답은 2가 나와야 함.
console.log(solution(arr));
