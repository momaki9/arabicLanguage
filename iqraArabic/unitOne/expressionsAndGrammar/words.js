const words = [
    {
        word: "صَبَاحُ الخَيْرِ",
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
    },
    {
        word: "مَساءُ الخير",
        def: "Good Evening"
    },
    {
        word: "مَساءُ النُّور",
        def: "Response to Good Evening"
    },
    {
        word: "اهلاً بِكَ",
        def: "Response to Greetings (singular)"
    },
    {
        word: "جَزاكَ اللهُ خَيراً",
        def: "May Allah reward you"
    },
    {
        word: "تِصبَح على خَير",
        def: "Goodnight!"
    },
    {
        word: "تِصبَح على نُور",
        def: "Response to Goodnight"
    },
    {
        word: "وَداعاً",
        def: "Goodbye!"
    },
    {
        word: "إلى أللِقاء",
        def: "Until Next Time!"
    },
    {
        word: "أُحِبُّكِ",
        def: "I love you! (speaking to female)"
    },
    {
        word: "أُحِبُّكَ",
        def: "I love you! (speaking to male)"
    }
];

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};