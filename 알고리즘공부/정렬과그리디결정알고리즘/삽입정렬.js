//
const solution = (arr) => {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]; //11
    let j = 0;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
};

// function solution(arr) {
//   let answer = arr;
//   for (let i = 1; i < answer.length; i++) {
//     for (let j = i; j >= 0; j--) {
//       if (answer[j] < answer[j - 1])
//         [answer[j], answer[j - 1]] = [answer[j - 1], answer[j]];
//       else break;
//     }
//   }
//   return answer;
// }

const arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
