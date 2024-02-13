import { Student } from "../types/Student";


export default function StudentItem({firstName,lastName, age}: Student) {
  return (
    <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{age}</p>
    </div>
  )
}