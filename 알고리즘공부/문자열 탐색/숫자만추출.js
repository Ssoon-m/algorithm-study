const solution = (s) => {
  s = s.replace(/[^0-9]/g, '');
  return parseInt(s);
};

console.log(solution('g000en2T0s8eSoft'));
