let person = {
    name: "John",
    age: 30,
    gender: "New York"
}
for (const key in person) {
    console.log(key + ":" + person[key]);
}