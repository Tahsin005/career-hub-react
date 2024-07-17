import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleBactToHome = () => {
        navigate('/');
    };
    return (
        <div>
            <h1 className="mt-48 font-bold text-8xl text-center">Oops..!!</h1>
            <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white p-2 font-semibold rounded-xl" onClick={handleBactToHome}>Go Back To Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;