export default function numberToJapanese(number/*: number*/)/*: string*/ {
    return kanjiToKana(numberToKanji(number))
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