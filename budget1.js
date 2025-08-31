



function getBudget(arr){
    const result=arr.reduce((acc,cv)=>{
        return acc+cv.budget

    },0)
    return result
}
console.log(getBudget([
    { name: "John", age: 222, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]))

