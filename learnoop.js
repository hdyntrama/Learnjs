//W5 Js OOP

//polymorphisme & inheritance
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


// encapsulation
function produk(nama, harga){
    //this -> public
    this.diskon = 40/100
    this.nama_pub = nama
    this.harga_pub = harga

    //var -> private
    var nama_pri = nama
    var harga_pri = harga

    this.detail_pub = function(){
        return "nama "+nama + "harga "+(harga-(harga * this.diskon)) 
    }

    function detail_pri(){
       return "nama "+nama + "harga "+harga
    }

}

const transaksi = new produk("lato lato ",3000)
console.log(transaksi.harga_pub)
console.log(transaksi.harga_pri)
console.log(transaksi.detail_pub())
transaksi.diskon = 90/100
console.log(transaksi.detail_pub())
//console.log(transaksi.detail_pri())

//abstraction
class Person{
    constructor(name){
        if(this.constructor === Person){
            throw new Error(
                'tidak boleh menggunakan class ini, karena bersifat abstrak'
                )
        }
        this.name = name
    }
    greet(){
        throw new Error(
            'method abstract belum diimplementasi'
            )
    }
}

class Teacher extends Person{
    constructor(name,age){
        super(name)
        this.age = age
    }
    greet(){
        console.log("Hallo nama saya " +this.name)
    }
}

const informatics = new Teacher("Santoso", 62)
informatics.greet()
//const student = new Person("Rifki")