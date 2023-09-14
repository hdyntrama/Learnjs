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

let nama = "valorant"
startPlayGame(nama,notify)