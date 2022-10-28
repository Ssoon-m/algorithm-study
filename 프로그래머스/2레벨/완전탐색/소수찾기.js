//https://velog.io/@9ummy/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Level-2-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0-JavaScript

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const solution = (numbers) => {
  const arr = numbers.split('');
  const answer = new Set();
  // 같은 숫자의 경우 한 번만 세야 하므로 Set 사용해주기

  // 만들 수 있는 모든 순열을 재귀적으로 찾기
  function getPermutation(numbersArray, fixedNumber) {
    if (numbersArray.length) {
      for (let i = 0; i < numbersArray.length; i++) {
        const temp = [...numbersArray];

        // fixedNumber를 제외한 숫자 배열을 재귀함수 호출 시 넘기기 위함
        temp.splice(i, 1);
        if (isPrime(parseInt(fixedNumber + numbersArray[i]))) {
          // 문자열을 parseInt 해서 넣어주어야 '011' 과 '11' 이 같은 숫자로 취급됨
          answer.add(parseInt(fixedNumber + numbersArray[i]));
        }
        getPermutation(temp, fixedNumber + numbersArray[i]);
      }
    }
  }

  getPermutation(arr, '');
  return answer.size;
};

console.log('solution', solution('17'));
