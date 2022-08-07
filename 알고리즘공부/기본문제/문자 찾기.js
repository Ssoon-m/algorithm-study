
const solution = (s) =>{
  let answer = 0;
  for(let st of s){
    if(st.charCodeAt(0) === st.toUpperCase().charCodeAt(0)) answer++
  }
  return answer;
}


console.log(solution("KoreaTimeGood"))