const friends = ['Michael', 'Steven', 'Peter'];
// Add elements
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();//Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();// First
console.log(friends);
// Find the number of elements in the array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
console.log(friends.includes('23'));

if(friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}