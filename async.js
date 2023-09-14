//Set timeout logic
/*
console.log("Step 1")
setTimeout(function(){
    console.log("Step 3")
},5000)
console.log("Step 2")
*/
//Callback
const notify = () =>{
    console.log("sudah selesai")
}

const startPlayGame = (nama, callback)=>{
    console.log("start game "+nama+" sekarang!")
    callback()
}
//Nested Callback
let nama1 = "valorant"
let nama2 = "dota 2"
let nama3 = "point blank"

startPlayGame(nama1, function(){
    startPlayGame(nama2, function(){
        startPlayGame(nama3, function(){
            console.log('Main Game Selesai!')
        })
    })
})

//Promise resolve error
let tabungan = 30
const belanja = new Promise((resolve, reject)=>{
    if (tabungan > 50){
        resolve("bisa beli tamiya")
    }else{
        reject("uang belum cukup")
    }
})

belanja.then((result)=>{
    console.log(result)
    
}).catch((error)=>{
    console.log(error)
})

//Promise All
const firstProgress = new Promise((resolve,rejet)=>{
    resolve('0%')
})
const secondProgress = new Promise((resolve,rejet)=>{
    resolve('75%')
})
const lastProgress = new Promise((resolve,rejet)=>{
    resolve('100%')
})

Promise.all([firstProgress,secondProgress,lastProgress]).then((result)=>{
    console.log(result)
})

let status = 0
const belajar = new Promise((resolve,reject)=>{
    status += 30
    resolve(status)
})

belajar.then((result)=>{
    console.log("status sudah "+result+" %")
    return result + 30
}).then((result)=>{
    console.log("status sudah "+result+" %")
    return result + 30
}).then((result)=>{
    console.log("status sudah "+result+" %")
    return result + 30
}).then((result)=>{
    if(result >= 100){
        console.log("Belajar sudah selesai!")
    }
})