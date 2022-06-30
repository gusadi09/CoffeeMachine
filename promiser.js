const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa Membuat kopi");
        } else {
            reject("Stok tidak cukup!");
        }
    });
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailed = rejectedValue => {
    console.log(rejectedValue);
}

checkStock().then(handleSuccess, handleFailed);