
const solution = (s) => {
  let ans = "";
  for(let x of s){
    let num = x.charCodeAt();
    if(num >= 97 && num <= 122) ans += String.fromCharCode(num - 32);
    else ans += x;
  }
  return ans
}

console.log(solution("ItisTimeToStudy"))