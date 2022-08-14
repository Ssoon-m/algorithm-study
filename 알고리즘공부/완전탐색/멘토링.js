// 7시 10분

// A학생이 B학생보다 한 번이라도 뒤쳐지는지 판단 해야 함. -> 테스트의 기준을 잡음
// 자기보다 앞 선 학생의 번호를 배열에 담는다.
// 단, 배열에 이미 존재하는 학생이면 추가를 안 함
// {4 : [3,1] , 3 : [4] , 1 : [3,4,2] , 2 : [3,4,1]}

// 몇 번 학생까지 있는지 저장하는 배열이 있어야함. -> 객체의 key만 뽑아서 판단 가능
// 총 학생의 수 에서 객체 value의 length를 뺴주면 된다. 자기 자신인 -1 도 해주면 return 값이 된다.
//

const solution = (arr) => {
  let n = arr.length;
  let std = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let count = j;
      std[arr[i][j]] = std[arr[i][j]] || [];
      while (count) {
        count--;
        if (std[arr[i][j]].includes(arr[i][count])) continue;
        std[arr[i][j]].push(arr[i][count]);
      }
    }
  }
  const StudentNumber = Object.keys(std).length;
  let result = 0;
  for (const [key, value] of Object.entries(std)) {
    result += StudentNumber - value.length - 1; // -1 은 자기 자신
  }
  return result;
};

const arr = [
  [4, 3],
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
