import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/nav" className='py-2 px-3 bg-slate-500 text-white mx-4'>Home</Link>
            <Link to="/counter" className='py-2 px-3 bg-slate-500 text-white mx-4'>Counter</Link>
            <Link to="/student" className='py-2 px-3 bg-slate-500 text-white mx-4'>Student</Link>
        </div>
    )
}

export default Home