import React, { children, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header';

const LayOut = () => {
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const path = location.pathname.split("/")[1];
        console.log(path);
        if (path && path !== "logi") {
            if (!isAuth) {
                navigate("/login");
            }
        }
        setIsLoading(false)
    }, [])

    return (
        <main>
            <Header/>
            {children}
        </main>
    )
}

export default LayOut