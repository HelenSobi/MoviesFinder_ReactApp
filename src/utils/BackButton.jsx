import { useNavigate } from "react-router-dom";

const BackButton=()=>{
    const navigate = useNavigate();
    return (
       
        <button 
                className="mb-4 text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded"
                onClick={() => navigate(-1)} // Navigate back to the previous page
              >
                Back
              </button>
    )
}

export default BackButton;

