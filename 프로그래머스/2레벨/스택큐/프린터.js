// 30
// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.

//예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고
//중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.
// 1 -> 3 순으로 중요도가 올라간다.

// 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities
// 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location
// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return
const solution = (priorities, location) => {
  let cnt = 0;
  while (priorities.length > 0) {
    let max = Math.max(...priorities);
    let n = priorities.shift();
    if (n === max) {
      cnt++;
      if (location === 0) return cnt;
    } else {
      priorities.push(n);
    }
    location--;
    if (location == -1) {
      location = priorities.length - 1;
    }
  }
  return cnt;
};

// A B C D
// 2 1 3 2
// 1. B C D A
// 2. C D A B

// A B C D E F
// 1 1 9 1 1 1
// 1. B C D E F A
// 2. C D E F A B
// C보다 중요도가 높은 문서는 없으므로 C 인쇄
// 그 후 D E F A B는 중요도가 다 똑같으므로 쭉 인쇄

// A B C D
// 2 1 3 4
// 1. B C D A
// 2. C D A B
// 3. D A B C
// 4.

// 결과는? C D E F A B
const priorities = [1, 1, 9, 1, 1, 1];
const loc = 0;

console.log(solution(priorities, loc));
