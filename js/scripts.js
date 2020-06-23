const stations = [{
        name: "Chance the Rapper radio",
        songs: [
            {
                title: "All Day Long",
                artist: "by Chance the Rapper",
                background: "#4a482c",
                image: "assets/all-day-long.jpeg",
                track: "assets/all-day-long.mp3"
            },
            {
                title: "All Night",
                artist: "by Chance the Rapper (feat. Knox fortune)",
                background: "#7e3334",
                image: "assets/all-night.jpeg",
                track: "assets/all-night.mp3"
            },
            {
                title: "Juice",
                artist: "by Chance the Rapper",
                background: "#351b7e",
                image: "assets/juice.jpeg",
                track: "assets/juice.mp3"
            }
        ]
    },
    {
        name: "Blink 182 radio",
        songs: [
            {
                title: "Cynical",
                artist: "by Blink 182",
                background: "#4c4a0c",
                image: "assets/cynical.jpeg",
                track: "assets/cynical.mp3"
            },
            {
                title: "Always",
                artist: "by Blink182",
                background: "#7f1b51",
                image: "assets/always.jpeg",
                track: "assets/always.mp3"
            },
            {
                title: "I Really Wish I Hated You",
                artist: "by Blink182",
                background: "#7f2221",
                image: "assets/hated-you.jpeg",
                track: "assets/hated-you.mp3"
            }
        ]
    },           
    {
        name:"SAINt JHN radio",
        songs: [
            {
                title:"Roses Remix",
                artist:"by SAINt JHN (feat. Future)",
                background: "#804032",
                image: "assets/roses-remix.jpeg",
                track: "assets/roses-remix.mp3"
            },
            {
                title: "God Bless the Internet",
                artist: "by SAINt JHN",
                background: "#653e3f",
                image: "assets/internet.jpeg",
                track: "assets/internet.mp3"
            },
            {
                title: "Trap",
                artist: "by SAINt JHN (feat. Lil Baby)",
                background: "#e9312c",
                image: "assets/trap.jpeg",
                track: "assets/trap.mp3"
            }
        ]
    },
    {
        name:"Wiley's Radio",
        songs: [
            {
                title:"Feel Good Inc.",
                artist:"Gorillaz",
                background: "#384f67",
                image: "assets/feel-good.jpeg",
                track: "assets/feel-good.mp3"
            },
            {
                title: "Clint Eastwood",
                artist: "Gorillaz",
                background: "#723c36",
                image: "assets/clint.jpeg",
                track: "assets/clint-eastwood.mp3"
            },
            {
                title: "Demon Days",
                artist: "Gorillaz",
                background: "#593f49",
                image: "assets/demon-days.jpeg",
                track: "assets/demon-days.mp3"
            }
        ]
    },
    {
        name:"Jessica's radio",
        songs: [
            {
                title:"Ongeveer",
                artist:"Eefje de Visser",
                background: "#606060",
                image: "assets/ongeveer.jpeg",
                track: "assets/ongeveer.mp3"
            },
            {
                title: "forever rain",
                artist: "RM",
                background: "#595959",
                image: "assets/forever-rain.jpeg",
                track: "assets/forever-rain.mp3"
            },
            {
                title: "Time in a Tree",
                artist: "Raleigh Ritchie",
                background: "#12147e",
                image: "assets/time-tree.jpeg",
                track: "assets/time-tree.mp3"
            }
        ]
    },    
]


let nextTrack = document.getElementById("next-btn");
let prevTrack = document.getElementById("back-btn");

let songName = document.getElementById("song-name");
let artistName = document.getElementById("artist-name");
let currentRadio = document.getElementById("current-radio");

let nextStationCounter = document.getElementById("next-station");
let prevStationCounter = document.getElementById("prev-station");
let randomStation = document.getElementById("random-btn");
let bodyBackground = document.getElementById("body");
let trackImage = document.getElementById("track-img");
let playTrack = document.getElementById("audio-src");


let trackIndex = -1;
let stationsIndex = 0;
let chanceRadio = stations[0].songs;
let blinkRadio = stations[1].songs;



function nextSongCounter() {
    trackIndex++;
    console.log(trackIndex);
    console.log(stations[stationsIndex].songs.length);
    if (trackIndex > stations[stationsIndex].songs.length - 1) {
        trackIndex = 0;
    }
};

function prevSongCounter() {
    trackIndex--;
    if (trackIndex < 0) {
        trackIndex = stations[stationsIndex].songs.length - 1;
    }
};

function nextStation() {
    trackIndex = 0;
    stationsIndex++;
    if (stationsIndex > stations.length - 1) {
        stationsIndex = 0;
    }
};

function prevStation() {
    stationsIndex--;
    if (stationsIndex < 0) {
        stationsIndex = stations.length - 1;
    }
};

function randomizeStation() {
    if (stationsIndex < stations.length) {
        stationsIndex = Math.floor(Math.random()*5); // This is saying stations index = 2 [random #];
    }
    console.log(stationsIndex);
}


nextTrack.onclick = () => {
    nextSongCounter()
    currentRadio.innerHTML = stations[stationsIndex].name;
    songName.innerHTML = stations[stationsIndex].songs[trackIndex].title;
    artistName.innerHTML = stations[stationsIndex].songs[trackIndex].artist;
    trackImage.src = stations[stationsIndex].songs[trackIndex].image;
    bodyBackground.style.backgroundColor = stations[stationsIndex].songs[trackIndex].background;
    playTrack.src = stations[stationsIndex].songs[trackIndex].track;
}

prevTrack.onclick = () => {
    prevSongCounter()
    currentRadio.innerHTML = stations[stationsIndex].name;
    songName.innerHTML = stations[stationsIndex].songs[trackIndex].title;
    artistName.innerHTML = stations[stationsIndex].songs[trackIndex].artist;
    trackImage.src = stations[stationsIndex].songs[trackIndex].image;
    bodyBackground.style.backgroundColor = stations[stationsIndex].songs[trackIndex].background;
    playTrack.src = stations[stationsIndex].songs[trackIndex].track;
}

nextStationCounter.onclick = () => {
    nextStation()
    currentRadio.innerHTML = stations[stationsIndex].name;
    songName.innerHTML = stations[stationsIndex].songs[0].title;
    artistName.innerHTML = stations[stationsIndex].songs[0].artist;
    trackImage.src = stations[stationsIndex].songs[trackIndex].image;
    bodyBackground.style.backgroundColor = stations[stationsIndex].songs[trackIndex].background;
    playTrack.src = stations[stationsIndex].songs[trackIndex].track;
}

prevStationCounter.onclick = () => {
    prevStation()
    currentRadio.innerHTML = stations[stationsIndex].name;
    songName.innerHTML = stations[stationsIndex].songs[0].title;
    artistName.innerHTML = stations[stationsIndex].songs[0].artist;
    trackImage.src = stations[stationsIndex].songs[trackIndex].image;
    bodyBackground.style.backgroundColor = stations[stationsIndex].songs[trackIndex].background;
    playTrack.src = stations[stationsIndex].songs[trackIndex].track;
}

randomStation.onclick = () => {
    randomizeStation()
    console.log(stationsIndex);
    currentRadio.innerHTML = stations[stationsIndex].name;
    songName.innerHTML = stations[stationsIndex].songs[0].title;
    artistName.innerHTML = stations[stationsIndex].songs[0].artist;
    trackImage.src = stations[stationsIndex].songs[0].image;
    bodyBackground.style.backgroundColor = stations[stationsIndex].songs[0].background;
    playTrack.src = stations[stationsIndex].songs[0].track;
}
