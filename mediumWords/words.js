const words = [
    {
        word: "رَفَضَ",
        def: "(he) refused"
    },
    {
        word: "فَبَعَثَ",
        def: "then (he) sent"
    },
    {
        word: "جَعَلَ",
        def: "(he) made"
    },
    {
        word: "حَضَرَ",
        def: "(he) came"
    },
    {
        word: "فَخَرَجَ",
        def: "then (he) went out"
    },
    {
        word: "دَخَلَ",
        def: "(he) entered"
    },
    {
        word: "فَغَفَرَ",
        def: "then (he) forgave"
    },
    {
        word: "ضَرَبَ",
        def: "(he) hit"
    },
    {
        word: "كَسَبَ",
        def: "(he) earned"
    },
    {
        word: "ظَلَمَ",
        def: "(he) oppressed"
    },
    {
        word: "كَفَرَ",
        def: "(he) disbelieved"
    },
    {
        word: "صَدَقَ",
        def: "(he) was truthful"
    },
    {
        word: "طَبَعَ",
        def: "(he) sealed"
    },
    {
        word: "رَفَعَ",
        def: "(he) raised"
    },
    {
        word: "قَرُبَ",
        def: "to become near"
    },
    {
        word: "حَرِصَ",
        def: "(he) took care of something"
    },
    {
        word: "حَبِطَ",
        def: "to be wasted"
    },
    {
        word: "فَهِمَ",
        def: "(he) understood"
    },
    {
        word: "ءَأَسۡجُدُ",
        def: "do I prostrate?"
    },
    {
        word: "خَلَقۡتَ",
        def: "you created"
    },
    {
        word: "تُبۡلَى",
        def: "to be tested"
    },
    {
        word: "أَمۡهِلۡهُمۡ",
        def: "let them"
    },
    {
        word: "أَفَعَصَيۡتَ",
        def: "then, have you disobeyed?"
    },
    {
        word: "حِجۡرٍ",
        def: "stone"
    },
    {
        word: "فِرۡعَوۡنَ",
        def: "Pharoh"
    },
    {
        word: "طَغَوۡا",
        def: "they transgressed"
    },
    {
        word: "بَيۡنِكَ",
        def: "between you"
    },
    {
        word: "عِنۡدَهُ",
        def: "with him (or he has)"
    },
    {
        word: "يَعۡلَمُ",
        def: "(he) knows"
    },
    {
        word: "أُفۡرِغۡ",
        def: "to pour (or empty the contents of)"
    }
];
/* 
{
        word: "",
        def: ""
    }
*/

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};