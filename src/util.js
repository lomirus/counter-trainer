export function random(lower/*: number*/, upper/*: number*/)/*: number*/ {
    if (lower === undefined) {
        throw new Error("'lower' is undefined in function 'random'")
    }
    if (upper === undefined) {
        throw new Error("'upper' is undefined in function 'random'")
    }
    return Math.random() * (upper - lower) + lower
}

export function speak(text, lang) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = lang;
    speech.rate = 0.8;
    console.log({
        text: speech.text,
        lang: speech.lang,
        rate: Math.round(speech.rate * 100) / 100,
        //pitch: speech.pitch,
        //volume: speech.volume,
    })
    speechSynthesis.speak(speech);
}
