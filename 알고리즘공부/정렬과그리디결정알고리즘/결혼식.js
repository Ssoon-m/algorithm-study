const solution = (times) => {
  let answer = Number.MIN_SAFE_INTEGER;
  const tmp = [];
  for (let x of times) {
    tmp.push([x[0], 'start']);
    tmp.push([x[1], 'end']);
  }
  tmp.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt(0) - b[1].charCodeAt(0);
    else return a[0] - b[0];
  });
  console.log(tmp);
  let cnt = 0;
  for (let x of tmp) {
    if (x[1] === 'start') cnt++;
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
