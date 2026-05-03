import {useNavigate} from "react-router-dom";

const UsersComponent = ()=> {
    const navigate = useNavigate();
    const handleOnClickPlaceHolder = () =>{
        navigate('jsonplaceholder')
    }
    const handleOnClickDummy = () =>{
        navigate('dummyjson')
    }

    return (
        <div>
            <button onClick={handleOnClickPlaceHolder}>json place holder</button>
            <button onClick={handleOnClickDummy}>dummy json</button>
        </div>
    );
};
export default UsersComponent;