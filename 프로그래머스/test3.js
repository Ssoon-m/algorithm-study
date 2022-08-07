

// resolve 는 class 필드 세터라고 생각해도 될거같다.
const getData = () => {
  return new Promise((res,rej) => {
    setTimeout(()=>{
      res({a : 20});
    },2000)
  })
}

const firstCall = async () => {
  console.log('firstCall')
  const {a} = await getData();
  return a || 'Hello'
}

// promise가 resolve되면 then에 등록된 콜백이 실행됨.
// async함수처럼 promise가 끝날때까지 기다려주지 않음 
// async함수의 return 은 Promise의 resolve다.

// promise를 호출하는쪽에서 어떻게 동작하는가가 중요.

// then에서도 return을 하면 새로운 프로미스 객체가 반환된다.

// firstCall()
//   .then((a)=>{
//     console.log(a)
//     return a;
//   })
//   .then((a)=>{
//     console.log(a+10);
//   });


/**
 * function(res,rej){
 *  res(10)
 * }
 */

//  let add = (a,b,callback) => callback(a+b)
//  add(1,2,console.log)



// class promise{
//   constructor(callback){
//     callback((v) => this.res(v),(err) => this.rej(err))
//   }

//   then(callback){
//     return callback(this.value);
//   }

//   res(value){
//     this.value = value;
//   }

//   rej(value){
//     this.value = value;
//   }
// }

// let foo = () => {
//   return new promise((res,rej)=>{
//     res(10)
//   })
// }

// foo().then(console.log);



class promise{
  constructor(callback){
    callback((v)=>{this.resolve(v)},()=>{})
  }
  then(callback){
    callback(this.value)
    return this;
  }
  resolve(value){
    this.value = value
  }
  reject(value){
    this.value = value
  }
}

function abc(){
  return new promise((resolve,reject)=>{
    resolve("안녕")
  })
}

abc()
  .then((a)=>console.log(a))
  .then((a) => console.log(a + "하이"))
  



  