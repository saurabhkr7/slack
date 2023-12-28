import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    useEffect(() => {
        if (!user.accessToken) return navigate("/login");
    })
    return <>
        <p>this is home of slack</p>
        <p>Welcome {user.email}</p>
    </>
}

export default Home;