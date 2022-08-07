
const solution = (s) => {
  let answer;
  for(let i = 0; i < s.length - 1; i++){
    if(s[i].length > s[i+1].length){
      answer = s[i]
    } 
  }
  return answer;
} 

let str = ["teacher","time","student","beautiful","good"];
console.log(solution(str))