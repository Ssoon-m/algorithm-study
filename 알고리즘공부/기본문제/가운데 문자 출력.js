
const solution = (s) => {
  let m = Math.floor(s.length / 2);
  if(s.length % 2 === 0){
    return s[m-1] + s[m]
  }else{
    return s[m]
  }
}

console.log(solution("good"))