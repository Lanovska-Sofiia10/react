import {Link} from "react-router-dom";

const UsersComponent = ()=> {


    return (
        <div>
            <p><Link to="jsonplaceholder">json place holder</Link></p>
            <p><Link to="dummyjson">dummy json</Link></p>
        </div>
    );
};
export default UsersComponent;