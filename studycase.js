//The case is from 2 cases in HW Week 2

//Case BBM
//create class Kendaraan
class Kendaraan {
    constructor(jenisKendaraan, kapasitasMesin) {
        this.jenisKendaraan = jenisKendaraan;
        this.kapasitasMesin = kapasitasMesin;
    }
    checkSubsidi() {
        if (this.jenisKendaraan === "plat kuning" || this.jenisKendaraan === "motor") {
            return "BBM subsidi";
        } else if (this.jenisKendaraan === "mobil" && this.kapasitasMesin < 1500) {
            return "PERTAMAX";
        } else if (this.jenisKendaraan === "mobil" && this.kapasitasMesin >= 1500) {
            return "PERTAMAX Turbo";
        } else {
            return "Tidak ada keputusan yang diambil.";
        }
    }
}

// Create Object Kendaraan
const kendaraanSaya = new Kendaraan("mobil", 2000);
// ^^it can change up to you based on the condition checkSubsidi

// Call method to check the result
console.log(kendaraanSaya.checkSubsidi());