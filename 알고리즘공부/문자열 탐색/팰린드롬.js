const solution = (s) => {
  // ^ <- 부정이다. 소문자가 아닌 것들을 다 찾는다는 정규식
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s === s.split('').reverse().join('')) return 'YES';
  else return 'NO';
};

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
