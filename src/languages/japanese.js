function numberToJapanese(number/*: number*/)/*: string*/ {
    return kanjiToKana(numberToKanji(number))
}

function randomMonth(){
    const r = Math.round(Math.random() * 11) + 1
    switch(r) {
        case 1: return { text: "一月", speak: "いちがつ" };
        case 2: return { text: "二月", speak: "にがつ" };
        case 3: return { text: "三月", speak: "さんがつ" };
        case 4: return { text: "四月", speak: "よんがつ" };
        case 5: return { text: "五月", speak: "ごがつ" };
        case 6: return { text: "六月", speak: "ろくがつ" };
        case 7: return { text: "七月", speak: "なながつ" };
        case 8: return { text: "八月", speak: "はちがつ" };
        case 9: return { text: "九月", speak: "きゅうがつ" };
        case 10: return { text: "十月", speak: "じゅうがつ" };
        case 11: return { text: "十一月", speak: "じゅういちがつ" };
        case 12: return { text: "十二月", speak: "じゅうにがつ" };
        default: throw Error("Unexpected 'r': " + r);
    }
}

function randomDate(){
    const r = Math.round(Math.random() * 30) + 1
    switch(r) {
        case 1: return { text: "一日", speak: "ついにち" };
        case 2: return { text: "二日", speak: "ふつか" };
        case 3: return { text: "三日", speak: "みっか" };
        case 4: return { text: "四日", speak: "よっか" };
        case 5: return { text: "五日", speak: "いつか" };
        case 6: return { text: "六日", speak: "むいか" };
        case 7: return { text: "七日", speak: "なのか" };
        case 8: return { text: "八日", speak: "ようか" };
        case 9: return { text: "九日", speak: "ここのか" };
        case 10: return { text: "十日", speak: "とおか" };
        case 11: return { text: "十一日", speak: "じゅういちにち" };
        case 12: return { text: "十二日", speak: "じゅうににち" };
        case 13: return { text: "十三日", speak: "じゅうさんにち" };
        case 14: return { text: "十四日", speak: "じゅうよっか" };
        case 15: return { text: "十五日", speak: "じゅうごにち" };
        case 16: return { text: "十六日", speak: "じゅうろくにち" };
        case 17: return { text: "十七日", speak: "じゅうしちにち" };
        case 18: return { text: "十八日", speak: "じゅうはちにち" };
        case 19: return { text: "十九日", speak: "じゅうくにち" };
        case 20: return { text: "十日", speak: "はつか" };
        case 21: return { text: "二十一日", speak: "にじゅういちにち" };
        case 22: return { text: "二十二日", speak: "にじゅうににち" };
        case 23: return { text: "二十三日", speak: "にじゅうさんにち" };
        case 24: return { text: "二十四日", speak: "にじゅうよっか" };
        case 25: return { text: "二十五日", speak: "にじゅうごにち" };
        case 26: return { text: "二十六日", speak: "にじゅうろくにち" };
        case 27: return { text: "二十七日", speak: "にじゅうしちにち" };
        case 28: return { text: "二十八日", speak: "にじゅうはちにち" };
        case 29: return { text: "二十九日", speak: "にじゅうくにち" };
        case 30: return { text: "三十日", speak: "さんじゅうにち" };
        case 31: return { text: "三十一日", speak: "さんじゅういちにち" };
        default: throw Error("Unexpected 'r': " + r);
    }
}

function randomDay(){
    const r = Math.round(Math.random() * 6) + 1
    switch(r) {
        case 1: return { text: "月曜日", speak: "げつようび" };
        case 2: return { text: "火曜日", speak: "かようび" };
        case 3: return { text: "水曜日", speak: "すいようび" };
        case 4: return { text: "木曜日", speak: "もくようび" };
        case 5: return { text: "金曜日", speak: "きんようび" };
        case 6: return { text: "土曜日", speak: "どようび" };
        case 7: return { text: "日曜日", speak: "にちようび" };
        default: throw Error("Unexpected 'r': " + r);
    }
}

function randomDateMonth() {
    const date = randomDate()
    const month = randomMonth()
    return {
        text: `${month.text}${date.text}`,
        speak: `${month.speak}${date.speak}`
    }
}

function randomHour(){
    const r = Math.round(Math.random() * 12)
    switch(r) {
        case 0: return { text: "０時", speak: "れいじ"};
        case 1: return { text: "１時", speak: "いちじ"};
        case 2: return { text: "２時", speak: "にじ"};
        case 3: return { text: "３時", speak: "さんじ"};
        case 4: return { text: "４時", speak: "よじ"};
        case 5: return { text: "５時", speak: "ごじ"};
        case 6: return { text: "６時", speak: "ろくじ"};
        case 7: return { text: "７時", speak: "しちじ"};
        case 8: return { text: "８時", speak: "はちじ"};
        case 9: return { text: "９時", speak: "くじ"};
        case 10: return { text: "１０時", speak: "じゅうじ"};
        case 11: return { text: "１１時", speak: "じゅういちじ"};
        case 12: return { text: "１２時", speak: "じゅうにじ"};
        default: throw Error("Unexpected 'r': " + r);
    }
}

function randomMinute() {
    const r = Math.round(Math.random() * 58) + 1;
    let text = ''
    let speak = ''
    switch(r % 10) {
        case 0: text = '０分'; speak = 'じゅっぷん'; break;
        case 1: text = '１分'; speak = 'いっぷん'; break;
        case 2: text = '２分'; speak = 'にふん'; break;
        case 3: text = '３分'; speak = 'さんぷん'; break;
        case 4: text = '４分'; speak = 'よんぷん'; break;
        case 5: text = '５分'; speak = 'ごふん'; break;
        case 6: text = '６分'; speak = 'ろっぷん'; break;
        case 7: text = '７分'; speak = 'ななふん'; break;
        case 8: text = '８分'; speak = 'はっぷん'; break;
        case 9: text = '９分'; speak = 'きゅうふん'; break;
        default: throw new Error("Unexpected 'r % 10': " + r % 10)
    }
    if (r >= 10 && r % 10 !== 0) {
        speak = 'じゅう' + speak;
    }
    switch(Math.floor(r / 10)) {
        case 0: break;
        case 1: text = '１' + text; break;
        case 2: text = '２' + text; speak = 'に' + speak; break;
        case 3: text = '３' + text; speak = 'さん' + speak; break;
        case 4: text = '４' + text; speak = 'よん' + speak; break;
        case 5: text = '５' + text; speak = 'ご' + speak; break;
        default: throw new Error("Unexpected 'r % 10': " + r % 10)
    }
    return { text, speak }
}

function randomTime() {
    const hour = randomHour()
    const minute = randomMinute()
    return {
        text: `${hour.text}${minute.text}`,
        speak: `${hour.speak}　${minute.speak}`
    }
}

function digitsToKanji(number/*: string*/)/*: string*/ {
    switch (number) {
        case '0': return '零';
        case '1': return '一';
        case '2': return '二';
        case '3': return '三';
        case '4': return '四';
        case '5': return '五';
        case '6': return '六';
        case '7': return '七';
        case '8': return '八';
        case '9': return '九';
        default: return '';
    }
}

function numberToKanji(number/*: number*/)/*: string*/ {
    let text = ''
    let arabicNumber = number.toString()
    UnshiftDirect__(1, ''); if (arabicNumber.length === 1) return text;
    UnshiftCheckOne(2, '十'); if (arabicNumber.length === 2) return text;
    UnshiftCheckOne(3, '百'); if (arabicNumber.length === 3) return text;
    UnshiftCheckOne(4, '千'); if (arabicNumber.length === 4) return text;
    UnshiftCarry___(5, '万'); if (arabicNumber.length === 5) return text;
    UnshiftCheckOne(6, '十'); if (arabicNumber.length === 6) return text;
    UnshiftCheckOne(7, '百'); if (arabicNumber.length === 7) return text;
    UnshiftDirect__(8, '千'); if (arabicNumber.length === 8) return text;
    UnshiftCarry___(9, '億'); if (arabicNumber.length === 9) return text;
    UnshiftCheckOne(10, '十'); if (arabicNumber.length === 10) return text;
    UnshiftCheckOne(11, '百'); if (arabicNumber.length === 11) return text;
    UnshiftDirect__(12, '千'); if (arabicNumber.length === 12) return text;
    UnshiftDirect__(13, '兆'); return text;
    function UnshiftDirect__(pos/*: number*/, kanji/*: string*/) {
        if (arabicNumber.length >= pos && arabicNumber[arabicNumber.length - pos] !== '0') {
            text = digitsToKanji(arabicNumber[arabicNumber.length - pos]) + kanji + text
        }
    }
    function UnshiftCheckOne(pos/*: number*/, kanji/*: string*/) {
        if (arabicNumber.length >= pos && arabicNumber[arabicNumber.length - pos] !== '0') {
            if (arabicNumber[arabicNumber.length - pos] === '1') {
                text = kanji + text
            } else {
                text = digitsToKanji(arabicNumber[arabicNumber.length - pos]) + kanji + text
            }
        }
    }
    function UnshiftCarry___(pos/*: number*/, kanji/*: string*/) {
        if (arabicNumber.length === pos) {
            text = digitsToKanji(arabicNumber[arabicNumber.length - pos]) + kanji + text;
        } else if (number[number.length - pos] === '0') {
            text = kanji + text
        } else {
            text = digitsToKanji(arabicNumber[arabicNumber.length - pos]) + kanji + text
        }
    }
}

function kanjiToKana(text/*: string*/)/*: string*/ {
    return text
        .replace(/三百/g, 'さんびゃく')
        .replace(/六百/g, 'ろっぴゃく')
        .replace(/八百/g, 'はっぴゃく')
        .replace(/三千/g, 'さんぜん')
        .replace(/八千/g, 'はっせん')
        .replace(/一兆/g, 'いっちょう')
        .replace(/一/g, 'いち')
        .replace(/二/g, 'に')
        .replace(/三/g, 'さん')
        .replace(/四/g, 'よん')
        .replace(/五/g, 'ご')
        .replace(/六/g, 'ろく')
        .replace(/七/g, 'なな')
        .replace(/八/g, 'はち')
        .replace(/九/g, 'きゅう')
        .replace(/十/g, 'じゅう')
        .replace(/百/g, 'ひゃく')
        .replace(/千/g, 'せん')
        .replace(/万/g, 'まん')
        .replace(/億/g, 'おく')
        .replace(/兆/g, 'ちょう')
        .replace(/零/g, 'れい')
}

const convert = numberToJapanese

export default {
    convert,
    randomMonth,
    randomDate,
    randomDateMonth,
    randomDay,
    randomTime
}