const _ = require('lodash');
 
const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}
 
function weightedMean(){
    var weightMean = 0.0;
    var i;
    var meanSum = 0;
    var weightSum = 0;
    for (i=0; i<user.allGrades.length; i++) {
        weightSum += user.allGrades[i].weight;
       meanSum += _.mean(user.allGrades[i].grades) * user.allGrades[i].weight;
    }
   weightMean = meanSum/weightSum;
   console.log(user.name);
   console.log(user.surname);
   console.log(weightMean);
}
weightedMean(user);