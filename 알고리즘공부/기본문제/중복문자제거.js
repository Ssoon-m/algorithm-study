
const solution = (s) => {
  let answer = "";
  for(let i=0; i<s.length;i++){
    // indexOf는 똑같은 값이 존재하면 가장 작은 index가 중복되어 나온다.
    // k는 indexOf로 뽑았을 때 0만 나온다.
    console.log(s[i],i,s.indexOf(s[i]))
    if(s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer
}

console.log(solution("ksekkset"))