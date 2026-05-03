import {useNavigate} from "react-router-dom";

const CommentsConponent = ()=> {
    const navigate = useNavigate();
    const handleOnClickPlaceHolder = () =>{
        navigate('jsonplaceholder')
    }

    return (
        <div>
            <button onClick={handleOnClickPlaceHolder}>json place holder</button>
        </div>
    );
};

export default CommentsConponent;