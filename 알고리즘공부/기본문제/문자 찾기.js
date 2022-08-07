
const solution = (s,t) =>{
  return s.split("").filter((al)=>al===t).length
}


console.log(solution("COMPUTERPROGRAMMING","R"))