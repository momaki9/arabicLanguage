const words = [
    {
        word: "أَبِي",
        def: "My father"
    },
    {
        word: "أُمِّي",
        def: "My mother"
    },
    {
        word: "أُخْتِي",
        def: "My sister"
    },
    {
        word: "أَخِي",
        def: "My brother"
    },
    {
        word: "جَدَّتِي",
        def: "My grandmother"
    },
    {
        word: "جَدِّي",
        def: "My grandfather"
    },
    {
        word: "أُسْرَة",
        def: "Family"
    },
    {
        word: "عَائِلَة",
        def: "Extended family"
    },
    {
        word: "الكَبِيرُ",
        def: "The elder"
    },
    {
        word: "الأَوْسَطُ",
        def: "The middle"
    },
    {
        word: "الصَّغِيرُ",
        def: "The younger"
    },
    {
        word: "أَفْرَاد",
        def: "members"
    }
];

const chooseOneWord = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};