// 4시 30분
const counter = (alpha, target, prevPos) => {
  if (prevPos < 0) prevPos = 0;
};

const solution = (name) => {
  // ▲ - 다음 알파벳
  // ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
  // ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
  // ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
  let answer = 0;
  // 26자
  //
  for (let i = 0; i < name.length; i++) {
    answer += counter(al, name[i], i - 1);
  }
  return answer;
};
console.log(solution('JEROEN'));
