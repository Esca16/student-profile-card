import { useCallback, useState } from "react";
import SecondComponent from "./SecondComponent";

const FirstComponent = () => {

    const [counter, setCounter] = useState(0);
    const [students, setStudents] = useState([{
        id: 6715486,
        img_url: "https://avatars.githubusercontent.com/u/124677521?v=4",
        student_data: { name: "sdf", age: "23" },
    },])
    console.log("first component rendering");

    const counterhandler = () => {
        setCounter(counter + 1);
    }

    const addStudent = useCallback(() => {
        setStudents([...students, {
            id: 671453,
            img_url: "https://avatars.githubusercontent.com/u/124677521?v=4",
            student_data: { name: "sdf", age: "23" },
        }]);
    }, [students]);

    return (
        <div>
            <button onClick={counterhandler} className=" py-2 px-3 bg-yellow-100 border">Increase</button>
            {counter}
            <br />
            <SecondComponent students={students} addStudent={addStudent} />
        </div>
    )
}

export default FirstComponent