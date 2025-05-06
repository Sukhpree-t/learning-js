const marvel_heros = ["Ironman","Spiderman","Thor"]
const dc_heros = ["Flash","Superman","Batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// console.log(marvel_heros.concat(dc_heros));

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6,7],8,[9,10,11]];
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Sukhpreet"));
console.log(Array.from("Sukhpreet"));
console.log(Array.from({name : "sukhpreet"}));




// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3));


