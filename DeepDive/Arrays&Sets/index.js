//Challenge array
// favouriteSongs=[];

// favouriteSongs.push("Billy_jean");
// favouriteSongs.push(`This is how we do`);
// favouriteSongs.push(`Dipset`);

// console.log(favouriteSongs)
// console.log(favouriteSongs[favouriteSongs.length - 1])

// favouriteSongs.pop();

// console.log(favouriteSongs[favouriteSongs.length - 1])

//Challenge: .some and .every
// const songs = [
//     {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
//     {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
//     {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
//     {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
//     {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
// ]

// // const result = songs.some(song=>song.wonGrammy)
// // console.log(result)

// const allMegaHits = songs.every(song=>song.timesStreamed > 1.5)
// console.log(result)

//Challenge: .reduce()
const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];

const results = cars.filter(electricCar=> 
  electricCar.isElectric===true
  );
  console.log(results)


const total= results.reduce((accumulator, carItems)=>{
    return accumulator + carItems.weight

},0);

console.log(total)

//better way without needing filter

const totalWeight = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0)

console.log(totalWeight);

//challenge: Array destructuring
const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let [chefsFishDishes, ...regularFishDishes] = fishDishes;

let [regularMeatDishes ,...chefsMeatDishes] = meatDishes;

// console.log(chefsFishDishes);
// console.log(regularFishDishes);
// console.log(regularMeatDishes);
// console.log(chefsMeatDishes);

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsMeatDishes, chefsFishDishes]
let regularDishes = [...regularFishDishes, regularMeatDishes];
console.log(chefsDishes);
console.log(regularDishes);