function solution(n, lost, reserve) {
  let map = new Map();
  let count = 0;
  for (let i = 1; i <= n; i++) map.set(i, 1);
  for (let x of lost) if (map.has(x)) map.set(x, map.get(x) - 1);
  for (let x of reserve) if (map.has(x)) map.set(x, map.get(x) + 1);
  for (let i = 1; i <= map.size; i++) {
    if (map.get(i) === 2 && map.get(i + 1) === 0) {
      map.set(i, map.get(i) - 1);
      map.set(i + 1, map.get(i + 1) + 1);
    } else if (map.get(i) === 0 && map.get(i + 1) === 2) {
      map.set(i, map.get(i) + 1);
      map.set(i + 1, map.get(i + 1) - 1);
    }
  }
  for (let [key, value] of map) {
    if (value >= 1) count++;
  }
  return count;
}

console.log(solution(5, [4, 2], [3, 5]));

// 1번 학생이 2번 학생에게 체육복을 빌려주고,
// 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.
