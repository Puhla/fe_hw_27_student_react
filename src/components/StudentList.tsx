import { Student } from "../types/Student"
import StudentItem from "./StudentItem"



export default function StudentList() {
    const students:Student[] =[
        {firstName: "Анатолий", lastName: "Ушанов", age: 19},
        {firstName: "Юрий", lastName: "Митрофанов", age: 22},
        {firstName: "Егор", lastName: "Богомолов", age: 20},
        {firstName: "Павел", lastName: "Гусев", age:20}
    ]
  
  
    return (
    <div>
        <p>Students list:</p>
        {
            students.map((student)=> <StudentItem key={student.lastName} {...student} />)
        }
    </div>
  )
}