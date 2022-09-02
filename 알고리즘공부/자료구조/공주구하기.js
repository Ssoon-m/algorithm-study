// 6시 10분
// const solution = (N, K) => {
//   const queue = [];
//   for (let i = 1; i <= N; i++) queue.push(i);
//   let count = 1;
//   while (queue.length > 1) {
//     if (count === K) count = 1;
//     else {
//       queue.push(queue[0]);
//       count++;
//     }
//     queue.shift();
//   }
//   return queue[0];
// };

const solution = (N, K) => {
  let answer;
  let queue = Array.from({ length: N }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < K; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
};

// 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외친다.
// 한 왕자가 K(특정숫자)를 외치면 그 왕자는 원 밖으로 나간다.
// 밖으로 나간 다음 왕자부터 1부터 시작하여 번호를 다시 외친다.

console.log(solution(8, 3));
