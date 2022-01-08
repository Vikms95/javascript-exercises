//declare current year with Date
//sort list so the oldest person is first
    
    // if current has yearOfDeath
        // currentAge = yearOfDeath - yearOfBirth 

    //case: people[i] has no yearOfDeath
        // currentAge Date().getFullYear() - yearOfBirth  

//return oldestPerson

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    let sortedPeople = people.sort((a,b) =>{
        let currentAge;
        let lastAge;
        if ("yearOfDeath" in b){
            currentAge = b.yearOfDeath - b.yearOfBirth;
        }else{
            currentAge = currentYear - b.yearOfBirth;
        }

        if ("yearOfDeath" in a){
             lastAge = a.yearOfDeath - a.yearOfBirth;
        }else{
             lastAge = currentYear - a.yearOfBirth;
        }
        console.log(lastAge,currentAge)

        return lastAge > currentAge ? -1 : 1;
    });
    return sortedPeople[0];
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
