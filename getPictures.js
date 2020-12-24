let catsImages = [
    "24324523153215.jpg",
    "31231232118.jpeg",
    "3123123213121c76621ba273915.jpg",
    "312312321312s_main-1028x579.jpg",
    "312312321321320-80.jpg",
    "312312321384555e8250ae5f9.jpg",
    "312321312376-696x391.jpg",
    "3123213213123213.jpg",
    "312321321321319.jpg",
    "312321321cat-500x300.jpg",
    "312421421421424124120x428.jpg",
    "3213213213213129325.jpg",
    "321321321481780.jpg",
    "3213412412143489763.jpg",
    "3213421421421.jpg",
    "4321412341234123c-Ivan.jpg",
    "Thinking-of-getting-a-cat.png"
]

let dogsImages = [
    "1134-Opioid_Crisis_Hitting_Dogs_Now-766x415_thumb-732x415.jpg",
    "13213213221421421.jpg",
    "1634325325235.jpg",
    "16412412412351jpg.jpg",
    "2312313212132141.jpg",
    "312312312321321312.jpg",
    "3123123213123213m.jpg",
    "31231232132131233123123.png",
    "31231234124214120x290.jpg",
    "3123123421412s.jpg",
    "31231242134124.jpg",
    "312321321321321321od.jpg",
    "31241242142141.jpg",
    "32132143214214.jpg",
    "3213214321421412.jpg",
    "42341234231.jpg",
    "43534531455132.jpg",
    "81e9bbc1fe445afd4c888497d6e8e4d8abcd9029-450x274.jpg",
    "dogue-de-bordeaux-1047521__340.webp",
    "fsdfsdafsdaf.jpg",
    "IMG_5256-2_57d8c063a8b1b1a77bb21a2afa954d6e.jpg",
    "p0558xqm.jpg",
    "RoverOfficeDogImage2-e1560346609660.jpg",
    "shelter-dog-cropped-1-632x329.jpg",
    "white-dog-lab-retriever-sad-sick-human-hand-1600x900_0.jpg"
]

exports.getRandomDogImage = () => {
    let len =dogsImages.length; 
    return dogsImages[Math.floor(Math.random() * len)];
}

exports.getRandomCatImage = () => {
    let len =catsImages.length; 
    return catsImages[Math.floor(Math.random() * len)];
}