import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
    const { setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const LogInHandler = () => {
        setIsAuth(true);
        navigate("/")
    }
    return (
        <div className='flex justify-center items-center' onClick={LogInHandler}>
            <button className='mx-auto my-96 py-2 px-3 bg-green-500 text-white cursor-pointer inline-block '>Log In</button>
        </div>
    )
}
