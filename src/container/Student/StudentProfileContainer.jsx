import StudentProfile from '../../components/studentprofile'
import StudentProvider from '../../context/studentprovider'

const StudentProfileContainer = () => {
    return (
        <>
            <StudentProvider>
                <StudentProfile />
            </StudentProvider>
        </>
    )
}

export default StudentProfileContainer