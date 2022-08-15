// 4시 18
// 선생님이 가지고 있는 예산으로 최대 몇 명의 학생에게 선물을
// 사줄 수 있는지 구하라

// 상품 하나를 50% 할인해서 살 수 있는 쿠폰이 있다.
// 단, 배송비는 할인에 포함X

// 5,28
// 예산을 넘는지 안 넘는지 판단하는 분기문
//가장 비싼 상품을 50% 할인 시키는 로직

// 1. 50% 할인을 했을때 가장 효율이 좋은 것을 찾는다.
//  -> 가장 비싼 상품에서 50%를 해줌.
// 생각 해보니 비싼걸 할인 받는다고 해서 많이 사는건 아니다!! 이 조건을 생각 해야 함...
// 모든 경우를 다 생각해야 함! -> 완전탐색에서 중요한 부분이다.

// 2. 배송비와 상품가격을 더한 기준으로 오름차순 정렬을 한다.
// 3. 더했을 때 28을 초과하지 않는 개수를 찾는다.

// 내가 푼 문제.. 할인에 대한 조건이 잘못 됐다.
// const solution = (m, arr) => {
//   const s_arr = [];
//   let maxPriceIndex = 0;
//   let max = Number.MIN_SAFE_INTEGER;
//   let result = 0;
//   // 최대 가격 찾기
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i][0]) {
//       max = arr[i][0];
//       maxPriceIndex = i;
//     }
//   }
//   // 50% 할인
//   arr[maxPriceIndex][0] = arr[maxPriceIndex][0] / 2;
//   // 배송비와 상품가격 더하기
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//     s_arr.push(sum);
//   }
//   // 오름차순 정렬
//   s_arr.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += s_arr[i];
//     if (sum <= m) result++;
//   }
//   return result;
// };

// 문제 설명 듣고 내가 푼 문제
// const solution = (m, product) => {
//   let n = product.length;
//   const c_arr = [];

//   product.sort((a, b) => a[0] + b[1] - (b[0] + b[1]));

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     let count = 0;
//     let temp = product[i][0];
//     product[i][0] = product[i][0] / 2;
//     for (let j = 0; j < n; j++) {
//       sum += product[j][0] + product[j][1];
//       if (sum <= m) {
//         count++;
//       } else if (j !== n - 1) {
//         sum = sum - (product[j][0] + product[j][1]);
//       }
//     }
//     c_arr.push(count);
//     product[i][0] = temp;
//   }
//   return Math.max(...c_arr);
// };

const solution = (m, product) => {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    // money는 남은 예산
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
};

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
