import { memo } from "react"

const SecondComponent = ({ students, addStudent }) => {
    console.log("second component rendering")
    return (
        <div>
            <button onClick={addStudent}>Add</button>
            {students.map((st) => (
                <h1 key={st.id}>{st.student_data.name}</h1>
            ))}
        </div>
    )
}

export default memo(SecondComponent);