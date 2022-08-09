// const solution = (str) => {
//   str = str.toLowerCase();
//   if (str.length % 2 !== 0) return 'NO';
//   else {
//     for (let i = 0; i < str.length / 2; i++) {
//       if (str[i] !== str[str.length - i - 1]) return 'NO';
//     }
//     return 'YES';
//   }
// };

const solution = (str) => {
  str = str.toLowerCase();
  if (str === str.split('').reverse().join('')) return 'YES';
  else return 'NO';
};

console.log(solution('gooG'));
