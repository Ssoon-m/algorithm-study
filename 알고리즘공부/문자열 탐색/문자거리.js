// const solution = (s, t) => {
//   let result = [];
//   let n = s.length;
//   let count = s[0] !== t ? 1000 : 0;
//   for (let i = 0; i < n; i++) {
//     if (s[i] === t) {
//       count = 0;
//       result.push(count);
//     } else {
//       count++;
//       result.push(count);
//     }
//   }
//   count = s[n - 1] !== t ? 1000 : 0;
//   for (let i = n - 1; i >= 0; i--) {
//     if (s[i] === t) {
//       count = 0;
//       result[i] = count;
//     } else {
//       count++;
//       if (result[i] > count) result[i] = count;
//     }
//   }
//   return result;
// };

const solution = (s, t) => {
  let answer = [];
  let p = 1000;
  for (const x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
};

// t e a c h e r m o d e
// 1 0 1 2 1 0 1 2 2 1 0
console.log(solution('teachermode', 'e'));
// 1 0 1 2 1 0 1 2 2 1 0
