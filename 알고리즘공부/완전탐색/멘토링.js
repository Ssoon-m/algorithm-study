// 7시 10분

// A학생이 B학생보다 한 번이라도 뒤쳐지는지 판단 해야 함. -> 테스트의 기준을 잡음
// 자기보다 앞 선 학생의 번호를 배열에 담는다.
// 단, 배열에 이미 존재하는 학생이면 추가를 안 함
// {4 : [3,1] , 3 : [4] , 1 : [3,4,2] , 2 : [3,4,1]}

// 몇 번 학생까지 있는지 저장하는 배열이 있어야함. -> 객체의 key만 뽑아서 판단 가능
// 총 학생의 수 에서 객체 value의 length를 뺴주면 된다. 자기 자신인 -1 도 해주면 return 값이 된다.

// 내가 푼 것
// const solution = (arr) => {
//   let n = arr.length;
//   let std = {};
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       let count = j;
//       std[arr[i][j]] = std[arr[i][j]] || [];
//       while (count) {
//         count--;
//         if (std[arr[i][j]].includes(arr[i][count])) continue;
//         std[arr[i][j]].push(arr[i][count]);
//       }
//     }
//   }
//   const StudentNumber = Object.keys(std).length;
//   let result = 0;
//   for (const [key, value] of Object.entries(std)) {
//     result += StudentNumber - value.length - 1; // -1 은 자기 자신
//   }
//   return result;
// };

// const solution = (test) => {
//   let answer = 0;
//   let m = test.length;
//   let n = test[0].length;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       let cnt = 0;
//       for (let k = 0; k < m; k++) {
//         let pi = (pj = 0);
//         for (let s = 0; s < n; s++) {
//           if (test[k][s] === i) pi = s;
//           if (test[k][s] === j) pj = s;
//         }
//         if (pi < pj) cnt++;
//       }
//       if (cnt === m) answer++;
//     }
//   }
//   return answer;
// };

// const solution = (arr) => {
//   let result = 0;
//   let n = arr.length;
//   let m = arr[0].length;
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= m; j++) {
//       let cnt = 0;
//       for (let k = 0; k < n; k++) {
//         let pi = 0;
//         let pj = 0;
//         for (let q = 0; q < m; q++) {
//           if (arr[k][q] === i) pi = q;
//           if (arr[k][q] === j) pj = q;
//         }
//         if (pi < pj) cnt++;
//       }
//       if (cnt === n) result++;
//     }
//   }
//   return result;
// };

// giftiel이 아닌경우는 무조건 false로 나오게 처리
// giftiel인 경우엔 isAvailable을 return

const solution = (data) => {
  if (!data.giftielCouponCode) return false;
  return data.isAvailable !== undefined ? data.isAvailable : true;
};
let objData = {
  giftielCouponCode: 'hello',
  isAvailable: false,
};

const data = console.log(solution(objData));
