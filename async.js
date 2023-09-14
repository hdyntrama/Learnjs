//Set timeout logic
/*
console.log("Step 1")
setTimeout(function(){
    console.log("Step 3")
},5000)
console.log("Step 2")
*/

const notify = () =>{
    console.log("sudah selesai")
}

const startPlayGame = (nama, callback)=>{
    console.log("start game "+nama+" sekarang!")
    callback()
}

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