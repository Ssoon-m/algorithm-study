function solution(numbers, hand) {

  const keypad = [
      ['*','7','4','1'], // 2
      ['0','8','5','2'], // 2  // 3
      ['#','9','6','3']   
  ];
  // 0 index : left
  // 1 index : right
  const currentLocation = ['*','#'];
  let usedHand = [];
  for(let number of numbers){
      isLeftHand(number,keypad,hand,currentLocation,usedHand);
      console.log("currentLocation",currentLocation)
  }
  // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] 
  // hand = "right"
  return usedHand;
}

const isLeftHand = (currentNumber,keypad,hand,currentLocation,usedHand) => {    
  let number = currentNumber + "";
  
  if(keypad[0].includes(number)){
      currentLocation[0] = number;
      usedHand.push('L');
      return;
  }else if(keypad[1].includes(number)){
      const distance = judgeMentDistance(keypad,currentLocation,number);
      switch(distance){
          case 'left' :
              currentLocation[0] = number;
              usedHand.push('L');
              break;
          case 'same' :
              if(hand === 'left'){
                  currentLocation[0] = number;
                  usedHand.push('L');
              }else{
                  currentLocation[1] = number;
                  usedHand.push('R');
              }
              break;
          case 'right' :
              currentLocation[1] = number;
              usedHand.push('R');
              break;
      }
      return;
  }else if(keypad[2].includes(number)){
      currentLocation[1] = number;
      usedHand.push('R');
      return;
  }
}

const judgeMentDistance = (keypad,location,number) => {
  let LEFT = keypad[0].findIndex((v) => v === location[0] + "");
  let MIDDLE = keypad[1].findIndex((v) => v === number + "");
  let RIGHT = keypad[2].findIndex((v) => v === location[1] + "");
  let isM_L = false;
  let isM_R = false;
  if(keypad[1].includes(location[0] + "")){
    LEFT = keypad[1].findIndex((v) => v === location[0] + "");
    isM_R = true;
  }
  if(keypad[1].includes(location[1] + "")){
    RIGHT = keypad[1].findIndex((v) => v === location[1] + "");
    isM_L = true;
  }

  let leftToMiddleDistance = isM_L ? Math.abs(LEFT - MIDDLE) + 1 : Math.abs(LEFT - MIDDLE);
  let rightToMiddleDistance = isM_R ? Math.abs(RIGHT - MIDDLE) + 1 : Math.abs(RIGHT - MIDDLE);
  
  if(leftToMiddleDistance < rightToMiddleDistance){
      return 'left';
  }else if (leftToMiddleDistance === rightToMiddleDistance){
      return 'same';
  }else{
      return 'right';
  }
}

let a = solution(	[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],'left');

console.log("result",a)