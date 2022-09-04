// const solution = (arr) => {
//   const answer = [];
//   const arrCopy = JSON.parse(JSON.stringify(arr));
//   for (let i = 0; i < arr.length - 1; i++) {
//     let tmp = arr[i];
//     let j = 0;
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > tmp) arr[j + 1] = arr[j];
//       else break;
//     }
//     arr[j + 1] = tmp;
//   }
//   for (let i = 0; i < arrCopy.length; i++) {
//     if (arrCopy[i] !== arr[i]) answer.push(i + 1);
//   }
//   return answer;
// };

const solution = (arr) => {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
};

// const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// 출력은 3,8이 나와야 한다.
const arr = [120, 130, 150, 150, 130, 150];
// 출력은 3,5가 나와야 한다.
console.log(solution(arr));
