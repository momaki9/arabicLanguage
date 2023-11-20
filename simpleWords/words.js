const words = [
    {
        word: "قُل",
        def: "Say (command verb)"
    },
    {
        word: "كَتَبَ",
        def: "He/She wrote (past tense)"
    },
    {
        word: "إسمي",
        def: "My name"
    },
    {
        word: "الشَمسْ",
        def: "The sun"
    },
    {
        word: "القَمَرْ",
        def: "The moon"
    },
    {
        word: "صلاة",
        def: "Prayer"
    }
];

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};