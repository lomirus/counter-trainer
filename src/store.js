import { createStore } from 'redux';

const defaultState = {
    mode: 'Practice',
    type: 'Number',
    preset: {
        number: {
            min: 0,
            max: 100,
            integer: true,
            decimal: false
        },
        time: {
            month: false,
            date: false,
            date_month: false,
            day: false,
            time: true,
        }
    },
    settings: {
        displayLanguage: "English",
        learnLanguage: "日本語",
        autoSpeak: false,
        autoNext: false,
        nightMode: false,
    }
}

const reducer = (state = defaultState, action) => ({
    mode: action.type === "CHANGE_MODE" ? action.payload : state.mode,
    type: action.type === "CHANGE_TYPE" ? action.payload : state.type,
    preset: {
        number: {
            min: action.type === "CHANGE_PRESET_MIN_NUMBER" ?
                action.payload : state.preset.number.min,
            max: action.type === "CHANGE_PRESET_MAX_NUMBER" ?
                action.payload : state.preset.number.max,
            integer: action.type === "CHANGE_PRESET_INTEGER" ?
                !state.preset.number.integer : state.preset.number.integer,
            decimal: action.type === "CHANGE_PRESET_DECIMAL" ?
                !state.preset.number.decimal : state.preset.number.decimal
        },
        time: {
            month: action.type === "CHANGE_PRESET_MONTH" ?
                !state.preset.time.month : state.preset.time.month,
            date: action.type === "CHANGE_PRESET_DATE" ?
                !state.preset.time.date : state.preset.time.date,
            date_month: action.type === "CHANGE_PRESET_DATEMONTH" ?
                !state.preset.time.date_month : state.preset.time.date_month,
            day: action.type === "CHANGE_PRESET_DAY" ?
                !state.preset.time.day : state.preset.time.day,
            time: action.type === "CHANGE_PRESET_TIME" ?
                !state.preset.time.time : state.preset.time.time,
        }
    },
    settings: {
        displayLanguage: action.type === "CHANGE_DISPLAY_LANGUAGE" ?
            action.payload : state.settings.displayLanguage,
        learnLanguage: action.type === "CHANGE_LEARN_LANGUAGE" ?
            action.payload : state.settings.learnLanguage,
        autoSpeak: action.type === "CHANGE_AUTO_SPEAK" ?
            !state.settings.autoSpeak : state.settings.autoSpeak,
        autoNext: action.type === "CHANGE_AUTO_NEXT" ?
            !state.settings.autoNext : state.settings.autoNext,
        nightMode: action.type === "CHANGE_NIGHT_MODE" ?
            !state.settings.nightMode : state.settings.nightMode,
    }
})

const store = createStore(reducer)

export { store };
