// const solution = (s) => {
//   let count = 0;
//   let obj = {};
//   let result = '';
//   for (const x of s) {
//     obj[x] = obj[x] || 0;
//     obj[x]++;
//   }
//   for (let [key, value] of Object.entries(obj)) {
//     if (value === 1) value = '';
//     result += key + value;
//   }
//   return result;
// };

const solution = (s) => {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) {
        answer += String(cnt);
      }
      cnt = 1;
    }
  }
  return answer;
};

console.log(solution('KKHSSSSSSSE'));
// K2HS7E
