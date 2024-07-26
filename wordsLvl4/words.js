const words = [
    {
        word: "أَءِنَّا",
        def: "Will we ..?"
    },
    {
        word: "إذْهَبْ",
        def: "Go (commanding; adressing a male)"
    },
    {
        word: "مَالُهُ",
        def: "His wealth"
    },
    {
        word: "يَدْخُلُونَ",
        def: "They (are) entering"
    },
    {
        word: "أَرَءَيْتَ",
        def: "Have you seen ..?"
    },
    {
        word: "يَتِيم",
        def: "Orphan"
    },
    {
        word: "حِجَارَة",
        def: "Stone"
    },
    {
        word: "أَلإِنْسَانْ",
        def: "Mankind"
    },
    {
        word: "أَلجِبَالُ",
        def: "The mountains"
    },
    {
        word: "ذَرَّة",
        def: "An atom"
    },
    {
        word: "مُّطَهَّرَة",
        def: "Purified"
    },
    {
        word: "بِإِذْنِ",
        def: "By (the) permission"
    },
    {
        word: "فَتَرْضَى",
        def: "(then) you will be satisfied"
    },
    {
        word: "لِسَان",
        def: "Tongue"
    },
    {
        word: "مِسْكِين",
        def: "Needy (or poor)"
    },
    {
        word: "فَسَاد",
        def: "Corruption"
    },
    {
        word: "يَومَئِذٍ",
        def: "That day (referring to Judgment day)"
    },
    {
        word: "حَياتِي",
        def: "My life"
    },
    {
        word: "فَذَكِّر",
        def: "So remind (command verb)"
    },
    {
        word: "نَسَى",
        def: "He forgot"
    },
    {
        word: "مَاء",
        def: "Water"
    },
    {
        word: "نَاصِر",
        def: "Helper"
    },
    {
        word: "شَاهِد",
        def: "Witness"
    },
    {
        word: "فَبَشِّرْهُم",
        def: "So give them good news"
    },
    {
        word: "أَجْرٌ",
        def: "Reward"
    }

];

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};