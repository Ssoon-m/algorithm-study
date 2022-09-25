// 5:04
// 문제의 조건을 보면 보트는 최대 2명씩 탈 수 있다고 나와있음.
// 몸무게가 가장 무거운 사람과 가장 가벼운 사람을 더했을 때 무게 초과가 난다면? => 무거운 사람은 혼자 태운다. 해당 사람은 리스트에서 제거해준다.
// 몸무게가 가장 무거운 사람과 가장 가벼운 사람을 더했을 때 무게 초과가 나지 않는다면? => 그 둘을 함게 태운 뒤에 보트 카운트를 늘린다.
// 반복문은 언제까지? => 태울 수 있는 최대 인원은 2명이므로 people deque의 길이가 1이 될 때까지.
// 몸무게가 가장 적게 나가는 사람이 limit보다 커지게 된다면? => 다시 그 사람을 people deque에 추가시켜줌
const solution = (people, limit) => {
  let count = 0;
  people.sort((a, b) => a - b);
  while (people.length) {
    if (people[0] + people[people.length - 1] > limit) {
      people.pop();
    } else {
      people.shift();
      people.pop();
    }
    count++;
  }
  return count;
};

console.log(solution([70, 50, 80, 50], 100));
