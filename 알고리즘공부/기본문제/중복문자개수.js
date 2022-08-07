
// k의 개수는 몇개인가?

// const solution  = (s) => {
//   let answer = 0;
//   for(let i=0; i<s.length; i++){
//     if(s.indexOf('s') === s.indexOf(s[i])) answer++;
//   }
//   return answer
// }

const solution  = (s) => {
  let answer = 0;
  let pos = s.indexOf('k');
  while(pos !== -1){
    answer++;
    pos = s.indexOf('k',pos+1);
  }
  return answer;
}

console.log(solution("ksekkset"))