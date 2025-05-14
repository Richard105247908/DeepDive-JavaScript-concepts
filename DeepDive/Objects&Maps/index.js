//Challenge object destructuring
const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

const { beer, coffe } = recommendations;

const { music: { traditional, jazz } } = recommendations;

console.log(jazz)

function displayMusicPlaces({ music: { traditional, jazz } }) {
    console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)
}

displayMusicPlaces(recommendations);

// Challenge: Your First Map
const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

const favPlaceMap=new Map ([
    ["music","jazz"],
    ["name","Paris House"],
    ["isVisited",true],
    ["averageBill", 50]
]);