//W5 Js OOP
class Kendaraan{
    constructor(merek,cc){
        this.merek = merek
        this.cc = cc
    }
    penjualan(){
        console.log("penjualan dengan cc " +this.cc+" merupakan penjualan terbanyak")
    }
}

class Motor extends Kendaraan{
    constructor(merek, cc, warna, panjang){
        super(merek,cc)
        this.warna = warna
        this.panjang = panjang
    }
   
}

const honda = new Motor("Vario",150,"hitam",175)
/*console.log(honda.merek)
console.log(honda.cc)
console.log(honda.warna)
console.log(honda.panjang)
honda.penjualan()*/
console.log(honda)