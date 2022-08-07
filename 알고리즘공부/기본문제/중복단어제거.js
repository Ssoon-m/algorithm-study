
// const solution = (s) => {
//   const ans = [];
//   for(let i=0; i<s.length;i++){
//     if(i === s.indexOf(s[i])) ans.push(s[i])
//   }
//   return ans;
// }

// const solution = (s) => {
//   return s.filter((str,i)=>s.indexOf(str) === i)
// }

const solution = (s) => {
  return [...new Set(s)]
}

let str = ["good","time","good","time","student"]
console.log(solution(str))