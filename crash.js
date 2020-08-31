var values = ["often":10,"medium":1000,"rare":10000"];
var crashrarity
var crashSound = new Audio("https://github.com/EventCubeMap/crashcript/blob/master/Nintendo%20Wii%20-%20The%20Sound%20of%20Death.mp3")
function crash(rarity) {
    function getCrashRarity() {
        if (rarity == "often") {
            crashrarity = values.often;
        } else if (rarity == "medium") {
            crashrarity = values.medium;
        } else if (rarity == "rare") {
            crashrarity = values.rare;
        } else {
            throw "java.lang.illegalArgumentException: " + rarity + " is not a valid crash rarity.";
        }
    }
    if (Math.round(Math.random()*crashrarity) == 7) {
        crashSound.play();
        throw "ERROR:\nA fatal exception has occured and has caused the system to shutdown."
        this.puase();
        
    }
}
