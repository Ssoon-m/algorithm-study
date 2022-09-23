// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
// 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하라

const count = (stable, dist) => {
  let cnt = 1;
  let sP = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - sP >= dist) {
      cnt++;
      sP = stable[i];
    }
  }
  return cnt;
};
const solution = (c, coordinate) => {
  let answer;
  coordinate.sort((a, b) => a - b);
  let lt = 1;
  let rt = coordinate[coordinate.length - 1];
  while (lt <= rt) {
    let mid = Math.ceil((lt + rt) / 2);
    if (count(coordinate, mid) >= C) {
      lt = mid + 1;
      answer = mid;
    } else rt = mid - 1;
  }
  return answer;
};
// 1 2 4 8 9
// C = 3
const arr = [1, 2, 8, 4, 9];
const C = 3;
console.log(solution(C, arr));

// 기준.
// 가장 가까운 말의 거리가 ? 일때 C 마리를 배치할수 있느냐가 키 포인트!
