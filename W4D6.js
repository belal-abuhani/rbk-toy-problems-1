//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function Student( name,dateOfBirth,gender, age){
    var instanc= {
        name ,
        dateOfBirth,
        gender,
        age
    }
    
    return instanc
}
student1 = Student( "belal","11 /3/1995","M", 25)
student2 = Student( "abed","12 /4/1996","M", 23)
student5 = Student( "rawan","11 /3/1998","F", 30)
student3 = Student( "ahmad","4 /5/2000","M", 20)
student4 = Student( "heba","11 /10/1990","F", 28)

var students = [student1,student2,student3,student4,student5]
function printstudent(student){
    return "Studnet name is " +  student.name + ", the birthday is in " + student.dateOfBirth +", the gender is "+student.gender + ", so the age is" + student.age
}
// printstudent(student2)

function sortYongerToOld(array){
    var sort = []
    var min = array[0]
    for(i=0;i<array.length;i++){
        min = array[i]
        for(j=i+1;j<array.length;j++){
            if(min.age > array[j]["age"]){
                min = array[j] 
            }
        }
        sort.push(min)
    }
    return min
}
sortYongerToOld(students)

function gender(students,str){
    var array = [];
    for(i=0;i<students.length;i++){
        if(students[i].gender === str){
            array.push(students[i])
        }
    }
    return array
}
gender(students,"F")