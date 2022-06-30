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