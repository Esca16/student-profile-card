import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [editStudent, setEditStudent] = useState({});
    useEffect(() => {
        console.log("render again");
        if (students.length == 0) {
            const data = JSON.parse(localStorage.getItem("st_d"))
            data && setStudents(data)
        }
    }, [])

    const Deletehandler = (id) => {
        console.log(id);
        const filterData = students.filter((s) => s.id != id);
        setStudents([...filterData])
        localStorage.setItem("st_d", JSON.stringify([...filterData]))
    };

    const editStudentModal = (id) => {
        const student = students.find((st) => st.id == id);
        setEditStudent(student);
    }

    const UpdateStudent = (student) => {
        const ChangeData = students.map((st) => {
            if (st.id == student.id) {
                return student;
            } return st;
        });
        setStudents([...ChangeData])
        localStorage.setItem("st_d", JSON.stringify([...ChangeData]))
    }

    return (
        <StudentContext.Provider value={{ students, setStudents, Deletehandler, editStudentModal, editStudent, UpdateStudent }}>{children}</StudentContext.Provider>
    );
};

export default StudentProvider;