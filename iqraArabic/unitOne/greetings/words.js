const words = [
    {
        word: "أَنَا",
        def: "I (am)"
    },
    {
        word: "أَنْتَ",
        def: "You (are)"
    },
    {
        word: "أَيْنَ؟",
        def: "Where ...?"
    },
    {
        word: "أَمْرِيكَا",
        def: "America (USA)"
    },
    {
        word: "مِصْر",
        def: "Eygpt"
    },
    {
        word: "مِنْ",
        def: "From"
    },
    {
        word: "اسْمٌ",
        def: "Name"
    },
    {
        word: "أُسْتَاذٌ",
        def: "Teacher (male)"
    },
    {
        word: "عُمْرٌ",
        def: "Age"
    },
    {
        word: ".أَنَا اسْمِي مُحَمَّدٌ",
        def: "My name is Muhammed."
    },
    {
        word: ".عُمْرِي سَبْعُ سَنَواتٍ",
        def: "I am seven years old"
    },
    {
        word: ".الأُسْتَاذُ مِنْ مِصْرَ",
        def: "The teacher is from Eygpt."
    },
    {
        word: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
        def: "Islamic greeting"
    },
    {
        word: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
        def: "Response to Islamic greeting"
    },
    {
        word: "كَيْفَ حَالُكَ؟",
        def: "How are you? (Speaking to a male)"
    },
    {
        word: "كَيْفَ حالُكِ؟",
        def: "How are you? (Speaking to a female)"
    },
    {
        word: "أَنَا بِخَيْرٍ، وَالْحَمْدُللهِ، وَأَنْتَ؟",
        def: "I am fine, praise Allah, and you? (Speaking to a male)"
    },
    {
        word: "أَنَا بِخَيْرٍ، وَالحَمْدُللهِ، وَأَنْتِ؟",
        def: "I am fine, praise Allah, and you? (Speaking to a female)"
    },
    {
        word: "أَنَا بِخَيْرٍ، وَالحَمْدُ للهِ، أَنَا اسْمِي خَالِد، مَا اسْمُكَ؟",
        def: "I am fine, praise Allah. My name is Khalid. What's your name? (Speaking to a male)"
    },
    {
        word: "أنا بخير والحمد لله، أنا اسمي فَاطِمَةُ،مَا اسْمُكِ؟",
        def: "I am fine, praise Allah. My name is Fatimah. What is your name? (Speaking to a female)"
    },
    {
        word: "أَنَا اسْمِي نَدَى، كَمْ عُمُرُكِ يَا فَاطِمَةُ؟",
        def: "My name is Nada. How old are you, Fatimah?"
    },
    {
        word: "أَنَا اسْمِي مَحْمُود، كَمْ عُمُرُكَ يَا خَالِد؟",
        def: "My name is Mahmood. How old are you, Khalid?"
    },
    {
        word: "أَنَا عُمُرِي تِسْعُ سَنَوَاتٍ، وَأَنْتَ؟",
        def: "I am nine years old. And you? (Speaking to a male)"
    },
    {
        word: "أَنَا عُمُرِي تِسْعُ سَنَوَاتٍ، وَأَنْتِ؟",
        def: "I am nine years old. And you? (Speaking to a female)"
    },
    {
        word: "أَنَا عُمُرِي أَرْبَعُونَ سَنَةً",
        def: "I am forty years old."
    },
    {
        word: "أَنَا عُمْرِي ثَلَاثُونَ سَنَةً",
        def: "I am thirty years old."
    },
    {
        word: "مِنْ أَيْنَ أَنْتَ يَا أُسْتَاذُ مَحْمُود؟",
        def: "Where are you from teacher Mahmood?"
    },
    {
        word: "مِنْ أَيْنَ أَنْتِ يَا أُسْتَاذَةُ نَدَى؟",
        def: "Where are you from teacher Nada?"
    },
    {
        word: "أَنَا مِنْ مِصْرَ، وَمِنْ أَيْنَ أَنْتَ يَا خَالِد؟",
        def: "I am from Egypt. Where are you from, Khalid?"
    },
    {
        word: "أَنَا مِنْ مِصْرَ، وَمِنْ أَيْنَ أَنْتِ يَا فَاطِمَةُ؟",
        def: "I am from Egypt. Where are you from, Fatima?"
    },
    {
        word: "أَنَا مِنْ أَمْرِيكَا",
        def: "I am from America (USA)"
    },
    {
        word: "أَهْلًا وَسَهْلًا",
        def: "Greetings"
    },
    {
        word: "أَهْلًا بِكَ",
        def: "Greetings to you (Response)"
    }
];

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};