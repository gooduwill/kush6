arr=[
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ] // 65700

  function budget(arr){

    const result=arr.reduce((acc,cv)=>{
        return acc+cv.budget

    },0)
    return result
  }
  console.log(budget(arr))