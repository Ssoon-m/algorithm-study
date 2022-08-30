//
const solution = (board, moves) => {
  let answer = 0;
  const stack = [];
  for (let m of moves) {
    for (let b of board) {
      if (b[m - 1] === 0) continue;
      if (stack[stack.length - 1] === b[m - 1]) {
        stack.pop();
        answer += 2;
      } else stack.push(b[m - 1]);
      b[m - 1] = 0;
      break;
    }
  }
  return answer;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// 4311324
// 33, 11 사라져서 답은 4가 나와야 한다.
// result = 4

console.log(solution(board, moves));
