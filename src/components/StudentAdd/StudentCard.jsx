import { useContext, useState} from 'react'
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { StudentContext } from '../../context/studentprovider';
import EditModal from './EditModal';

const StudentCard = ({ img_url, student_data, id }) => {
  const { Deletehandler , editStudentModal} = useContext(StudentContext);
  
  const [open, setOpen] = useState(false);
  const default_image = "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";

  return (
    <div className="basis-[32%]">
      <div>
        <img className="w-full" src={img_url ? img_url : default_image} alt="ZNH" />
      </div>
      <div>
        <h2>{student_data.name}</h2>
        <p>{student_data.age ? `${student_data.age} years` : "no data"} </p>
      </div>
      <div className="mt-4">
        <button onClick={() => Deletehandler(id)} className="py-2 px-3 shadow-2xl border-2">
          <MdDelete size={32} className="text-red-500" />
        </button>
        <button className="py-2 px-3 shadow-2xl border-2 ml-4">
          <MdOutlineEditNote size={32} className="text-yellow-500" onClick={() => {
            setOpen(true);
            editStudentModal(id)
          }} />
        </button>
      </div>
      <EditModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default StudentCard