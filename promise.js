// promise--------------------------------------------

// let ankit= new Promise((resolve,reject)=>
// {   setTimeout(()=>
//     {
//          console.log("i am ankit dubey")
//         resolve(10)
//     },3000)
// })
// ankit.then((item)=>{
//     console.log(item)
//     return item*5;
// }).then((item)=>{
//     console.log(item)
// })
// console.log(ankit)


// using fetch function which creates promise to call Api----------------------

// let ankit=fetch('https://jsonplaceholder.typicode.com/todos/1')
// ankit.then((item)=>{
//     return item.json();
// }).then((item1)=>{
//     console.log(item1)
// })

// async await-----------------------
async function getItem(){
    let ankit=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    anikt= await ankit.json()
    console.log(anikt)
}
getItem()