class Person{
  constructor(height,weight){
    this.height = height;
    this.weight = weight;
  }
  heightFilter(){
    if(this.height < 180){
      this.height = 200;
    }
  }
}

class PersonList{
  items = [];
  constructor(...personList){
    personList.forEach((item)=>{
      this.items.push(item)
    })
  }
  Add(person){
    this.items.push(person)
  }
  Remove(index){
    this.items.splice(index,1)
  }
}

let personList = new PersonList(
  new Person(180,70),
  new Person(175,78)
)
personList.Add(new Person(166,48))

personList.items.forEach((item)=>{
  item.heightFilter()
})
console.log("personList",personList)


