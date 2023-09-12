import { useContext, useRef, useState } from "react";
import { StudentContext } from "../../context/studentprovider";

const StudentForm = () => {
    const [name, setName] = useState("");
    const [profileLink, setProfileLink] = useState("");
    const [age, setAge] = useState(0);

    const {setStudents, students} = useContext(StudentContext);
    
    const refName = useRef(null);
    const refAge = useRef(null);

    const checkValue = (ref) => {
        const input_type = ref.current.getAttribute("type");
        const value = input_type == "number" ? Number(ref.current.value) : ref.current.value;
        if (!value) {
            ref.current.focus();
            ref.current.classList.add("border-red-600");
            return false;
        } return true;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (checkValue(refName) && checkValue(refAge)) {
            const idGenerate = Math.round(Math.random() * 10000000);
            const newStudent = {
                id: idGenerate,
                img_url: profileLink,
                student_data: { name, age },
            };
            setStudents([...students, newStudent]);
            localStorage.setItem("st_d", JSON.stringify([...students, newStudent]))
            formReset();
        }
    };

    const formReset = () => {
        setProfileLink("");
        setName("");
        setAge(0);
        refName.current.focus();
    }

    return (
        <div className="container mx-auto">
            <form onSubmit={(e) => formSubmitHandler(e)}>
                <div className="mb-3">
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input type="text" name="name" id="name" className=" outline-none border-2 border-blue-950 p-2 w-[50%]" ref={refName} value={name} onChange={(e) => { setName(e.target.value); e.target.classList.remove("border-red-600") }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="profile-link" className="block mb-2">Profile Link</label>
                    <input type="text" name="profile-link" id="profile-link" className="outline-none border-2 border-blue-950 p-2 w-[50%]" value={profileLink} onChange={(e) => setProfileLink(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="block mb-2">Age</label>
                    <input type="number" name="age" id="age" className="outline-none border-2 border-blue-950 p-2 w-[50%]" ref={refAge} value={age} onChange={(e) => {setAge(e.target.value); e.target.classList.remove("border-red-600")}} />
                </div>

                <div>
                    <button className="px-3 py-2 bg-blue-950 text-blue-100 text-opacity-90">
                        Add Record
                    </button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm


