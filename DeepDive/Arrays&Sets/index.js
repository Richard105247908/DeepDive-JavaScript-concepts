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

const total= cars.reduce((accumulator, carItems)=>{
    return accumulator + carItems.weight

},0);

console.log(total)