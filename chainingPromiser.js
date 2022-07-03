const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan:)");
            } else {
                reject("Mesin kopi sedang sibuk!");
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;

        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup untuk membuat kopi");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const brewCofee = () => {
    console.log("Membuat kopi anda....")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi berhasil dibuat");
        }, 2000);
    });
};

function makeEspresso() {
    checkAvailability()
    .then((value) => {
        console.log(value);
        return checkStock();
    })
    .then((value) => {
        console.log(value);
        return brewCofee();
    })
    .then((value) => {
        console.log(value);
        state.isCoffeeMachineBusy = false;
    })
    .catch( reason => {
        console.log(reason);
        state.isCoffeeMachineBusy = false;
    });
};

makeEspresso()