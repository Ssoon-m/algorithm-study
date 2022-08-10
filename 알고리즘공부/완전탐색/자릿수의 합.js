// const solution = (arr) => {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = String(arr[i])
//       .split('')
//       .reduce((acc, cur) => acc + parseInt(cur), 0);
//   }
//   const max = Math.max(...Object.values(obj));
//   const maxValueArr = [];
//   for (const [key, value] of Object.entries(obj)) {
//     if (value === max) maxValueArr.push(key);
//   }
//   return Math.max(...maxValueArr);
// };

// const solution = (arr) => {
//   let answer = 0;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0;
//     let tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// };

const solution = (arr) => {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((a, b) => a + parseInt(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
};

let arr = [128, 460, 603, 30, 521, 137, 123];
// 11 10 9 3 8 11 6
console.log(solution(arr));
