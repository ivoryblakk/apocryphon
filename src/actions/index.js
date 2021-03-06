export const changeOriginLanguage = language => {
    return {
        type: 'CHANGE_ORIGIN_LANGUAGE',
        language
    }
}

export const changeLevel = level => {
    return {
        type: 'CHANGE_LEVEL',
        level
    }
}

export const updateWordList = words => {
    return {
        type: 'UPDATE_WORD_LIST',
        words
    }
}

export const updateTranslations = (words, translations) => {
    return {
        type: 'UPDATE_TRANSLATIONS',
        words,
        translations
    }
}