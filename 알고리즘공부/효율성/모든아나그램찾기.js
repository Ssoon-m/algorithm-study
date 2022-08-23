const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
};
const solution = (s, t) => {
  let result = 0;
  const sH = new Map();
  const tH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  const len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // 추가
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    // 비교
    if (compareMaps(sH, tH)) result++;
    // 빼기
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return result;
};

// 아나그램은 문자의 구성요소만 똑같으면 된다.
// str2의 길이는 str1보다 작거나 같다.
let str1 = 'bacaAacba';
let str2 = 'abc';
// 정답 : 3

console.log(solution(str1, str2));
