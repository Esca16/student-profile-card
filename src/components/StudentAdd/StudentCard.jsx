import { useContext, useState } from 'react'
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { StudentContext } from '../../context/studentprovider';
import EditModal from './EditModal';
import { Link } from 'react-router-dom';

const StudentCard = ({ img_url, student_data, id }) => {
  const { Deletehandler, editStudentModal } = useContext(StudentContext);

  const [open, setOpen] = useState(false);
  const default_image = "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";

  return (
    <div className="basis-[40%] mx-auto md:basis-[30%]">
      <div>
        <Link to={"/student/" + id} >
          <img className="w-full h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px] object-cover" src={img_url ? img_url : default_image} alt="ZNH" />
        </Link>
      </div>
      <div className='mt-2'>
        <h2 className="capitalize">{student_data.name}</h2>
        <p>{student_data.age ? `${student_data.age} years` : "no data"} </p>
      </div>
      <div className="mt-4">
        <button onClick={() => Deletehandler(id)} className="p-1 lg:py-2 lg:px-3 shadow-2xl border-2 rounded-lg">
          <MdDelete size={28} className="text-red-500" />
        </button>
        <button className="p-1 lg:py-2 lg:px-3 shadow-2xl border-2 ml-4 rounded-lg">
          <MdOutlineEditNote size={28} className="text-yellow-500 " onClick={() => {
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