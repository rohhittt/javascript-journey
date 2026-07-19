const students = [
    {
        name: "Rohit",
        age: 23,
        course: "BTech"
    },
    {
        name: "Aman",
        age: 21,
        course: "BCA"
    },
    {
        name: "Rahul",
        age: 24,
        course: "BTech"
    },
    {
        name: "Priya",
        age: 22,
        course: "MBA"
    },
    {
        name: "Neha",
        age: 20,
        course: "BCom"
    },
    {
        name: "Arjun",
        age: 25,
        course: "MCA"
    }
];

const studentlist = document.getElementById("StudentList")
const AllStudents = document.getElementById("AllStudents")
const BtechStudents = document.getElementById("BtechStudents")
const FindRahul = document.getElementById("FindRahul")
const IncreaseAge = document.getElementById("IncreaseAge")


const displayStudents = (studentArray) =>{
    studentlist.innerHTML = "";
    studentArray.forEach((student) =>{
        studentlist.innerHTML += `<p>${student.name} | Age: ${student.age} | ${student.course}</p>`
    })
}


AllStudents.addEventListener("click",() =>{
    displayStudents(students)
})


BtechStudents.addEventListener("click", () =>{
    const Btech = students.filter((student)=> {
        return student.course === "BTech"
    });
    displayStudents(Btech)
});

FindRahul.addEventListener("click",() => {
    const Rahul = students.find((student) =>{
        return student.name === "Rahul"
    })
    displayStudents([Rahul])
})

IncreaseAge.addEventListener("click", () =>{
    const IncreasedAge =students.map((student) => {
        return {
            name:student.name,
            age:student.age+1,
            course:student.course
        }
    })
    displayStudents(IncreasedAge)
})
displayStudents(students)