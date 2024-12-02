const version = "14.23"; // Current patch version
const baseUrl = "https://ddragon.leagueoflegends.com/cdn";

// Data for randomization
const champions = [
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", 
    "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", 
    "Caitlyn", "Camille", "Cassiopeia", "Cho'gath", "Corki", "Darius", "Diana", 
    "Dr Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", 
    "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", 
    "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", 
    "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", 
    "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'zix", 
    "Kindred", "Kled", "Kog'Maw", "Leblanc", "Lee Sin", "Leona", "Lillia", "Lissandra", 
    "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", 
    "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", 
    "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", 
    "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", 
    "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", 
    "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", 
    "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", 
    "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", 
    "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", 
    "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", 
    "Volibear", "Warwick", "Monkey King", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", 
    "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
];

const roles = ["Top", "Jungle", "Mid", "ADC", "Support"];
const primaryRunes = ["Domination", "Precision", "Resolve", "Sorcery", "Inspiration"];
const secondaryRunes = ["Domination", "Precision", "Resolve", "Sorcery", "Inspiration"];
const spells = [
    "SummonerFlash", "SummonerHeal", "SummonerDot", "SummonerTeleport", "SummonerExhaust", "SummonerBarrier"
];

const items = [
    { id: "3153", name: "Blade of The Ruined King" },
    { id: "3026", name: "Guardian Angel" },
    { id: "3046", name: "Phantom Dancer" },
    { id: "3031", name: "Infinity Edge" },
    { id: "6675", name: "Navori Quickblades" },
    { id: "3508", name: "Essence Reaver" },
    { id: "6673", name: "Kraken Slayer" },
    { id: "3036", name: "Lord Dominik’s Regards" },
    { id: "6672", name: "Immortal Shieldbow" },
    { id: "6676", name: "The Collector" },
    { id: "3094", name: "Rapid Firecannon" },
    { id: "3124", name: "Guinsoo's Rageblade" },
    { id: "3095", name: "Stormrazor" },
    { id: "3087", name: "Statikk Shiv" },
    { id: "6692", name: "Sundered Sky" },
    { id: "3074", name: "Ravenous Hydra" },
    { id: "3053", name: "Sterak’s Gage" },
    { id: "3181", name: "Hullbreaker" },
    { id: "6631", name: "Stridebreaker" },
    { id: "6653", name: "Experimental Hexplate" },
    { id: "3091", name: "Wit’s End" },
    { id: "6693", name: "Eclipse" },
    { id: "3078", name: "Trinity Force" },
    { id: "3071", name: "Black Cleaver" },
    { id: "3161", name: "Spear of Shojin" },
    { id: "4644", name: "Dawncore" },
    { id: "6617", name: "Echoes of Helia" },
    { id: "6616", name: "Staff of Flowing Water" },
    { id: "3504", name: "Ardent Censer" },
    { id: "3089", name: "Rabadon's Deathcap" },
    { id: "3190", name: "Locket of the Iron Solari" },
    { id: "3099", name: "Knight's Vow" },
    { id: "3050", name: "Zeke's Convergence" },
    // Añade el resto de ítems según sea necesario
];

// Helper function to retrieve images, handling apostrophes, spaces, and capitalization
function getChampionImage(champion) {
    const formattedChampion = champion
        .replace("'", "")              // Remove apostrophes
        .replace(/\s+/g, '')           // Remove spaces (join names with no space)
        .replace(/'(\w)/g, (match, letter) => letter.toLowerCase()) // Make the letter after apostrophe lowercase
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
    return `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${formattedChampion}.png`;
}

function getItemImage(itemId) {
    return `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/item/${itemId}.png`;
}

function getSpellImage(spell) {
    return `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/spell/${spell}.png`;
}

// Randomizer function
function randomize(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate random build with non-repeating runes and spells
document.getElementById("generate-btn").addEventListener("click", () => {
    const champion = randomize(champions);
    const role = randomize(roles);

    // Randomize primary and secondary runes, ensuring they are not the same
    let primaryRune = randomize(primaryRunes);
    let secondaryRune = randomize(secondaryRunes);

    // Ensure primary and secondary runes are not the same
    while (primaryRune === secondaryRune) {
        secondaryRune = randomize(secondaryRunes);
    }

    // Randomize summoner spells
    let summonerSpells = [];

    if (role === "Jungle") {
        // Ensure Smite is one of the spells for Jungle role
        summonerSpells = ["SummonerSmite", randomize(spells)];
        // Ensure the second spell is not Smite
        while (summonerSpells[1] === "SummonerSmite") {
            summonerSpells[1] = randomize(spells);
        }
    } else {
        // For other roles, ensure the spells are not the same
        summonerSpells = [randomize(spells), randomize(spells)];
        while (summonerSpells[0] === summonerSpells[1]) {
            summonerSpells[1] = randomize(spells);
        }
    }

    const item = randomize(items);

    // Render output
    document.getElementById("output").innerHTML = `
        <p>
            <img src="${getChampionImage(champion)}" alt="${champion}"> 
            <strong>Champion:</strong> ${champion}
        </p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Runes:</strong> ${primaryRune} + ${secondaryRune}</p>
        <p><strong>Summoner Spells:</strong> 
            <img src="${getSpellImage(summonerSpells[0])}" alt="${summonerSpells[0]}"> 
            <img src="${getSpellImage(summonerSpells[1])}" alt="${summonerSpells[1]}">
        </p>
        <p><strong>Starting Item:</strong> 
            <img src="${getItemImage(item.id)}" alt="${item.name}"> ${item.name}
        </p>
    `;
});