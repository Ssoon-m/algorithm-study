// 9시 35분
// 결정알고리즘은 기본 베이스가 이분검색이다.!

// DVD에 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다.
// 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다.
// 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
// 이 때 DVD의 크기를 최소로 하려고 한다.
// 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.

// 3개의 DVD에 곡을 다 담아야 한다.
// 이때 최소로 필요한 DVD의 크기를 구해야 한다.
// DVD 세개 모두 용량이 17이 답이다.
const count = (songs, capacity) => {
  let cnt = 1;
  let sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
};
const solution = (m, arr) => {
  let answer;
  let sP = Math.max(...arr);
  let eP = arr.reduce((acc, cur) => acc + cur, 0);
  while (sP <= eP) {
    let mP = Math.floor((sP + eP) / 2);
    if (count(arr, mP) <= m) {
      answer = mP;
      eP = mP - 1;
    } else sP = mP + 1;
  }
  return answer;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 3개의 DVD용량이 17분 짜리면 (1,2,3,4,5) (6,7) (8,9) 이렇게 3개의 DVD로 녹음을 할 수 있다.
// 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.
console.log(solution(3, arr));
