const faker = require("faker");
const fs = require("fs");

const generateString = (length) => {
    const characters = "0123456789";
    const num = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const rndInt = num(1, 6);
    let result = "18" + rndInt + "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
};

const product = (berapa) => {
    const data = [];
    for (let i = 0; i < berapa; i++) {
        data.push({
            // _id: generateString(12),
            id: i+1,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
        });
    }
    return data;
};

const email = (berapa) => {
    const data = [];
    for (let i = 0; i < berapa; i++) {
        data.push({
            // _id: generateString(12),
            id: i+1,
            name: faker.name.findName(),
            price: faker.internet.email(),
            price: faker.internet.password(),
            description: faker.address.country(),
        });
    }
    return data;
};

const customers = email(50);
const products = product(50);

fs.writeFileSync(
    "commerce.json",
    JSON.stringify(
        {
            customers,
            products,
        },
        null,
        2
    )
);
