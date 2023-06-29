const a = new Set([4, 5, 8, 9]);
const b = new Set([3, 4, 5, 7]);

// Find the union of set a and set b
const union = new Set([...a, ...b]);
console.log(union);

// Find the intersection of set a and set b
const intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection);

// Find the elements in set a that are not in set b
const difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);
