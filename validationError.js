class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let jsonWithAges = '{ "age": 20 }';

try {
    let userNoName = JSON.parse(jsonWithAges);

    if (!userNoName.name) {
        throw new ValidationError("'name' is required.");
    }

    if (!userNoName.age) {
        throw new ValidationError("'age' is required.");
    }

    console.log(userNoName.name);
    console.log(userNoName.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else {
        console.log(error.stack);
    }
    
}

const validateNumberInput = (a, b, c) => {
    if (!(typeof a == "number")) {
        throw new ValidationError('Argumen pertama harus number');
    } else if (!(typeof b == "number")) {
        throw new ValidationError('Argumen kedua harus number')
    } else if (!(typeof c == "number")) {
        throw new ValidationError('Argumen ketiga harus number')
    }
}

const detectTriangle = (a, b, c) => {
    // TODO 3
    try {

        validateNumberInput(a, b, c)
      
        if (a === b && b === c) {
            return 'Segitiga sama sisi';
        }
  
        if (a === b || a === c || b === c) {
            return 'Segitiga sama kaki';
        }
  
        return 'Segitiga sembarang';
    } catch (error) {
        return error.message;
    }
};

console.log(detectTriangle('a', 1, 'c'));