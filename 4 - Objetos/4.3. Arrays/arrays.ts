const starks: [string, number][] = [
    ["Robb", 14],
    ["Sansa", 11],
    ["Arya", 9],
    ["Bran", 7]
];

for (let i in starks) {
    console.log(starks[i]);
}

console.log('\n------------------\nAccessing a element inside a object:');

const stark: { name: string, age: number } = {
    name: "Ned",
    age: 40
};

console.log(stark.name);
