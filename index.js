console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

const { robusta } = require('./state');
const coffeeStock = require('./state');

const makeCoffee = (types, milligram) => {
    if (coffeeStock[types] >= milligram) {
        console.log('kopi berhasil dibuat');
    } else {
        console.log('Biji kopi habis!')
    }
}

makeCoffee('robusta', 80)