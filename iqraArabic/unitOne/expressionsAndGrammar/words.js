const words = [
    {
        word: "بَاحُ الخَيْرِ",
        def: "Good Morning"
    },
    {
        word: "صَبَاحُ النُّور",
        def: "Response to Good Morning"
    },
    {
        word: "شُكْرًا",
        def: "Thank you!"
    },
    {
        word: "عَفْوًا",
        def: "You're Welcome!"
    },
    {
        word: "أَرَاكَ قَرِيبًا",
        def: "See you soon (Speaking to a male)"
    },
    {
        word: "مَعَ السَّلَامَةِ",
        def: "Goodbye!"
    },
    {
        word: "بِلَاد",
        def: "Countries"
    },
    {
        word: "أَنَا مِنْ العِراق",
        def: "I am from Iraq"
    },
    {
        word: "أنا اسْمِي ليلى",
        def: "My name is Layla"
    },
    {
        word: "أنا اسْمِي طارق",
        def: "My name is Tariq"
    },
    {
        word: "بَارَكَ اللهُ فِيهمْ",
        def: "May Allah bless them!"
    }
];

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};