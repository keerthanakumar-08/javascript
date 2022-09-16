function getFullName(person) {
    return person.firstName + " " + person.lastName;
}
var person_name = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person_name));
