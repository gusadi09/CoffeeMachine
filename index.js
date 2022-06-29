import {coffeeStock, isCoffeeMachineReady} from './state.js';

console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

const makeCoffee = (types, milligram) => {
    if (coffeeStock[types] >= milligram) {
        console.log('kopi berhasil dibuat');
    } else {
        console.log('Biji kopi habis!')
    }
}

makeCoffee('robusta', 80);

console.log(isCoffeeMachineReady)