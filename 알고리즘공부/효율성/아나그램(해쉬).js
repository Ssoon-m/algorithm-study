// const solution = (arr1, arr2) => {
//   const obj1 = arr1.split('').reduce((acc, cur) => {
//     acc[cur] = acc[cur] || 0;
//     acc[cur]++;
//     return acc;
//   }, {});
//   const obj2 = arr2.split('').reduce((acc, cur) => {
//     acc[cur] = acc[cur] || 0;
//     acc[cur]++;
//     return acc;
//   }, {});
//   let flag = false;
//   for (const [key, value] of Object.entries(obj1)) {
//     if (obj1[key] !== obj2[key]) flag = true;
//   }
//   return flag ? 'NO' : 'YES';
// };

const solution = (str1, str2) => {
  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
};

const str1 = 'AbaAeCe';
const str2 = 'baeeACA';

console.log(solution(str1, str2));
