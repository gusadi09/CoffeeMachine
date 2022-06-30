let json = '{ "name": "Yoda", "age": 20 }';

try {
    let user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

let errorJson = '{ bad json }'

try {
    let errorModel = JSON.parse(errorJson);

    console.log(errorModel.name);
    console.log(errorModel.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

let jsonWithAge = '{ "age": 20 }';

try {
    let userNoName = JSON.parse(jsonWithAge);

    if (!userNoName.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(userNoName.name);
    console.log(userNoName.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

let jsonWithAges = '{ "age": 20 }';

try {
    let userNoName = JSON.parse(jsonWithAges);

    errorCode;

    if (!userNoName.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(userNoName.name);
    console.log(userNoName.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
    
}