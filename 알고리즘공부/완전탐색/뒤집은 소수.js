// const solution = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let prime = parseInt(arr[i].toString().split('').reverse().join(''));
//     if ((prime % 2 !== 0 || prime === 2) && prime > 1) result.push(prime);
//   }
//   return result;
// };

// 약수의 가장 큰 것은 그 숫자의 절반이다. (1과 자기 자신을 빼면)
// 예) 16의 약수 1,2,4,8,16
// 제곱근으로 판단이 가능한 이유는
// 아래와 같이 제곱근 이상은 어차피 2 x 8 에서 뒤집은 8 x 2
// 이므로 제곱근으로 소수를 판단해도 된다.
// 1 x 16
// 2 x 8
// 4 x 4
// ------
// 8 x 2
const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
const solution = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let s = arr[i];
    let res = 0;
    while (s) {
      let t = s % 10;
      res = res * 10 + t;
      s = Math.floor(s / 10);
    }
    if (isPrime(res)) result.push(res);
  }
  return result;
};

// 32 % 10 = 2

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
