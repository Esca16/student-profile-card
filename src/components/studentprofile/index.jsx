import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../context/studentprovider";
import { useParams } from "react-router-dom";

const StudentProfile = () => {
    let { studentId } = useParams();
    const { students } = useContext(StudentContext);
    const [showStudent, setShowStudent] = useState();
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const foundStudent = students.find((st) => st.id == studentId);
            foundStudent ? setShowStudent(foundStudent) : setNoData(true);
        }, 1000);
    }, [studentId, students])


    return (
        <div>
            Profile Page
            {showStudent ? (
                <div>
                    <img src={showStudent.img_url} alt={showStudent.student_data.name} />
                    <h1>{showStudent.student_data.name}</h1>
                    <p>{showStudent.student_data.age}</p>
                </div>
            ) : noData ? (<h1>No Data</h1>) : (<h1>Loading...</h1>)}
        </div>
    )
}

export default StudentProfile