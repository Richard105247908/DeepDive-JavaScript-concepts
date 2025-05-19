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
const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

// const result = songs.some(song=>song.wonGrammy)
// console.log(result)

const allMegaHits = songs.every(song=>song.timesStreamed > 1.5)
console.log(result)

