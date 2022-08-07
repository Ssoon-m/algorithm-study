
const solution = (s) => {
  // let ans = ""
  // for(let x of s){
  //   let num = x.charCodeAt();
  //   if(num >= 97 && num <= 122){
  //     ans += String.fromCharCode(num - 32)
  //   }else{
  //     ans += String.fromCharCode(num + 32)
  //   }
  // }
  // return ans;
  let ans = ""
  for(let x of s){
    if(x === x.toUpperCase()) ans += x.toLowerCase();
    else ans += x.toUpperCase();
  }
  return ans
}

console.log(solution('StuDY'))