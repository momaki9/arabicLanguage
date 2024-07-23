const words = [
    {
        word: "النَّاس",
        def: "Humankind"
    },
    {
        word: "الَّذي",
        def: "The one who"
    },
    {
        word: "صَدِرْ",
        def: "Chest (body part)"
    },
    {
        word: "قالَ",
        def: "He said"
    },
    {
        word: "خَلَقَ",
        def: "He created"
    },
    {
        word: "قَالُواْ",
        def: "They said"
    },
    {
        word: "كَلِمَة",
        def: "A word"
    },
    {
        word: "كَذِبَ",
        def: "He lied"
    },
    {
        word: "طَعَام",
        def: "Food"
    },
    {
        word: "مَّسجِد",
        def: "A place of worship (Mosque)"
    },
    {
        word: "كانَ",
        def: "Was"
    },
    {
        word: "يَدي",
        def: "My hand"
    },
    {
        word: "نار",
        def: "Fire"
    },
    {
        word: "نَزَلَ",
        def: "To descend"
    },
    {
        word: "الكِتاب",
        def: "The book"
    },
    {
        word: "المُؤمَنين",
        def: "The believers (male plural)"
    },
    {
        word: "المُؤمِنات",
        def: "The believers (female plural)"
    },
    {
        word: "يَعمَل",
        def: "He does"
    },
    {
        word: "الصَّالِحَات",
        def: "The good (righteous) deeds"
    },
    {
        word: "نَّحنُ",
        def: "We"
    },
    {
        word: "قَلب",
        def: "Heart (organ)"
    },
    {
        word: "السَّمَاوات",
        def: "The heavens"
    },
    {
        word: "الأرض",
        def: "The earth"
    },
    {
        word: "قَلِيلٌ",
        def: "A little"
    }
    
];

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};