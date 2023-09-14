import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../context/studentprovider";
import { useParams } from "react-router-dom";

const StudentProfile = () => {
    let { studentId } = useParams();
    const { students } = useContext(StudentContext);
    const [showStudent, setShowStudent] = useState();
    const [noData, setNoData] = useState(false);

    const default_image = "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";


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
                    <img src={showStudent.img_url || default_image} alt={showStudent.student_data.name} />
                    <h1>{showStudent.student_data.name}</h1>
                    <p>{showStudent.student_data.age}</p>
                </div>
            ) : noData ? (<h1>No Data</h1>) : (<h1>Loading...</h1>)}
        </div>
    )
}

export default StudentProfile