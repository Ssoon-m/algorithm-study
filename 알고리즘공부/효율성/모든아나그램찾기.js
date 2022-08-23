const compareMaps = (map1, map2) => {
  // 둘이 아나그램 이라면 당연히 key의 사이즈가 같아야함.
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
};
const solution = (s, t) => {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  // sliding window 를 위한 기준점을 하나 만든다.
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
    if (compareMaps(sH, tH)) answer++;
    // 빼고
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
};

// 아나그램은 문자의 구성요소만 똑같으면 된다.
// str2의 길이는 str1보다 작거나 같다.
let str1 = 'bacaAacba';
let str2 = 'abc';
// 정답 : 3

console.log(solution(str1, str2));
