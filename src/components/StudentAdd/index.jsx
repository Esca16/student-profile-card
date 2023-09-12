import StudentForm from "./StudentForm";
import StudentList from "./StudentList"
import StudentProvider from "../../context/studentprovider";

const StudentAdd = () => {

  return (
    <>
      <StudentProvider>
        <section className="my-12">
          <StudentForm />
        </section>
        <hr />
        <section className="my-12">
          <StudentList/>
        </section>
      </StudentProvider>
    </>
  )
}

export default StudentAdd
// const StudentAdd = () => {
//   const [students, setStudents] = useState([
//     {
//       id: 1,
//       img_url: "https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
//       student_data: { name: "Kaung Myat Soe", age: "25" },
//     }
//   ])
//   const [todos, setTodos] = useState([]);
//   const getAllTodos = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
//       method: "GET",
//     });
//     if (res.ok) {
//       const data = await res.json();
//       console.log(data);
//       setTimeout(() => {
//         setTodos([...data])
//       }, 3000);
//     }
//   };
//   useEffect(() => {
//     getAllTodos();
//   }, [students])


//   return (
//     <>
//       {todos.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (<h1 key={i}>Loading...</h1>
//       )) : todos.map((todo) => <h1 key={todo.id}>{todo.title}</h1>)
//       }
//     </>
//   )
// }

// export default StudentAdd