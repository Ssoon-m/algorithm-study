// A,B,C,D,E 후보가 있다.
const solution = (arr) => {
  const obj = arr.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] || 0;
    acc[cur]++;
    return acc;
  }, {});
  return Math.max(...Object.values(obj));
};

let arr = 'BACBACCACCBDEDE';
