 // Student perfomence alalizer .
const students = [
    { name: "Rahim", marks: [78, 85, 92] },
    { name: "Karim", marks: [55, 61, 49] },
    { name: "Nabil", marks: [90, 88, 95] },

    { name: "Sakib", marks: [72, 81, 67] },
    { name: "Tanvir", marks: [64, 58, 71] },
    { name: "Fahim", marks: [88, 76, 91] },
    { name: "Rafi", marks: [45, 52, 48] },
    { name: "Hasan", marks: [69, 74, 63] },
    { name: "Adnan", marks: [93, 89, 96] },
    { name: "Imran", marks: [57, 62, 54] },
    { name: "Shakib", marks: [81, 79, 85] },
    { name: "Nayeem", marks: [73, 68, 77] },
    { name: "Arif", marks: [49, 44, 51] },
    { name: "Siam", marks: [86, 92, 84] },
    { name: "Rakib", marks: [61, 66, 59] },
    { name: "Mehedi", marks: [78, 72, 81] },
    { name: "Jahid", marks: [53, 47, 58] },
    { name: "Arafat", marks: [91, 87, 94] },
    { name: "Shuvo", marks: [67, 71, 64] },
    { name: "Tamim", marks: [75, 83, 79] },
    { name: "Rony", marks: [42, 55, 47] },
    { name: "Mahir", marks: [89, 91, 88] },
    { name: "Sajid", marks: [63, 57, 69] },
    { name: "Farhan", marks: [82, 78, 86] },
    { name: "Jubayer", marks: [56, 64, 61] },
    { name: "Asif", marks: [94, 90, 97] },
    { name: "Munna", marks: [48, 53, 46] },
    { name: "Nafis", marks: [77, 85, 73] },
    { name: "Ovi", marks: [68, 62, 75] },
    { name: "Sabbir", marks: [84, 80, 87] },
    { name: "Rakibul", marks: [59, 65, 52] },
    { name: "Anik", marks: [71, 76, 69] },
    { name: "Emon", marks: [87, 93, 90] },
    { name: "Masud", marks: [46, 51, 43] },
    { name: "Tarek", marks: [74, 69, 82] },
    { name: "Shawon", marks: [62, 73, 68] },
    { name: "Noman", marks: [90, 85, 92] },
    { name: "Foysal", marks: [55, 49, 57] },
    { name: "Rahat", marks: [79, 88, 76] },
    { name: "Alif", marks: [66, 70, 61] },
    { name: "Sakibul", marks: [92, 95, 89] },
    { name: "Mahin", marks: [58, 63, 56] },
    { name: "Yasin", marks: [83, 77, 85] },
    { name: "Tahmid", marks: [47, 50, 45] },
    { name: "Ayon", marks: [76, 82, 79] },
    { name: "Shafin", marks: [69, 65, 72] },
    { name: "Nabilul", marks: [85, 90, 87] },
    { name: "Rasel", marks: [52, 59, 54] },
    { name: "Abrar", marks: [96, 93, 98] },
    { name: "Sifat", marks: [73, 78, 70] },
    { name: "Moin", marks: [60, 55, 63] },
    { name: "Wasif", marks: [88, 84, 91] },
    { name: "Shadman", marks: [65, 71, 68] }
];
function student_perfomence_analyzer(students){
    for (let i = 0 ; i <= students.length - 1 ; i++ ) {
    var [a,b,c] = students[i].marks;
    var avg = (a + b + c ) / students[i].marks.length;
    var result = avg;
    if (result >= 50) {
        result = "Passed";
    } else{
        result = "Failed";
    }
    console.log(students[i].name + " - "+ "Average " + avg + " - " + result);
}
let highestAverage , topStudent;
highestAverage = 0

for (let i = 0 ; i <= students.length - 1 ; i++ ) {
    var [a,b,c] = students[i].marks;
    var avg = (a + b + c ) / students[i].marks.length;
    
    
    if (highestAverage < avg)  {
        highestAverage = avg ; 
        topStudent = students[i].name;
    }  else {
        continue;
    }

};
console.log("Top Student : " + topStudent);
        console.log("Highest Average: " + highestAverage);
return 0;
};
console.log(student_perfomence_analyzer(students));
