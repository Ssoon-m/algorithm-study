// 2:47
// const solution = (size, arr) => {
//   const cache = Array.from({ length: size }, (_v, _i) => 0);
//   arr.forEach((v) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (v === cache[i]) pos = i;
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         cache[i] = cache[i - 1];
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         cache[i] = cache[i - 1];
//       }
//     }
//     cache[0] = v;
//   });
//   return cache;
// };
const solution = (size, arr) => {
  const cache = Array.from({ length: size }, (_v, _i) => 0);
  arr.forEach((v) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (v === cache[i]) pos = i;
    if (pos === -1) {
      cache.unshift(v);
      if (cache.length > size) cache.pop();
    } else {
      cache.splice(pos, 1);
      cache.unshift(v);
    }
    cache[0] = v;
  });
  return cache;
};
// LRU(Least Recently Used) 알고리즘
// 가장 최근에 사용되지 않은 것
// 7, 5, 3, 2, 6 가 답이다.
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
