const words = [
    {
        word: "قُل",
        def: "Say (command verb)"
    },
    {
        word: "كَتَبَ",
        def: "He wrote"
    },
    {
        word: "إسمي",
        def: "My name (is) ..."
    },
    {
        word: "الشَّمسْ",
        def: "The sun"
    },
    {
        word: "القَمَرْ",
        def: "The moon"
    },
    {
        word: "صلاة",
        def: "Prayer"
    },
    {
        word: "كم",
        def: "How many ..?"
    },
    {
        word: "انا",
        def: "I (am)"
    },
    {
        word: "انت",
        def: "You"
    },
    {
        word: "اين",
        def: "Where ..?"
    },
    {
        word: "اسمهُ",
        def: "His name (is) ..."
    },
    {
        word: "اسمُها",
        def: "Her name (is) ..."
    },
    {
        word: "عمري",
        def: "My age (is) ..."
    },
    {
        word: "عُمرُها",
        def: "Her age (is) ..."
    },
    {
        word: "عُمرُهُ",
        def: "His age (is) ..."
    },
    {
        word: "عُمرُكَ",
        def: "Your age (is) ... (male)"
    },
    {
        word: "بلدي",
        def: "My country (is) ..."
    },
    {
        word: "حالكِ",
        def: "your Well-being (female)"
    },
    {
        word: "حالُكَ",
        def: "your Well-being (male)"
    },
    {
        word: "حالُهُ",
        def: "his Well-being"
    },
    {
        word: "مَصر",
        def: "Egypt"
    },
    {
        word: "امريكا",
        def: "America (USA)"
    },
    {
        word: "اليَمَن",
        def: "Yemen"
    },
    {
        word: "باكِستان",
        def: "Pakistan"
    },
    {
        word: "سَنَه",
        def: "year"
    },
    {
        word: "سَنَوات",
        def: "years"
    },
    {
        word: "أُستاذٌ",
        def: "A teacher (male)"
    },
    {
        word: "أساتِذة",
        def: "Teachers (males)"
    },
    {
        word: "من",
        def: "from"
    },
    {
        word: "هذا",
        def: "this"
    },
    {
        word: "بِخَير",
        def: "well (or good)"
    },
    {
        word: "متى",
        def: "When ..?"
    },
    {
        word: "كيف",
        def: "How ..?"
    },
    {
        word: "أسَد",
        def: "Lion"
    },
    {
        word: "تُفّاحَة",
        def: "Apple"
    },
    {
        word: "بَيت",
        def: "House"
    },
    {
        word: "كُرْسي",
        def: "Chair"
    },
    {
        word: "طبيب",
        def: "Doctor (male)"
    },
    {
        word: "الجَميع",
        def: "Everyone"
    },
    {
        word: "هُوَ",
        def: "He (is) ..."
    },
    {
        word: "هِيَ",
        def: "She (is) ..."
    },
    {
        word: "إيمان",
        def: "Faith"
    },
    {
        word: "صَبُر",
        def: "Patience"
    },
    {
        word: "مَعَ",
        def: "with"
    },
    {
        word: "أَنْتَ",
        def: "You (are)"
    },
    {
        word: "اسْمٌ",
        def: "Name"
    },
    {
        word: "عُمْرٌ",
        def: "Age"
    }
];

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};