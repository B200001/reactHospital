import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/entry.scss";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const clickOne = () =>{
        navigate(`/formOne/${userId}`);
    }
    const clickTwo = () =>{
        navigate(`/formTwo/${userId}`);
    }
    return (
        <div className='main'>
            <h2>Create a new entry for User ID: {userId}</h2>
            {/* <div>
                <Link to="`">
                    <button>Form One</button>
                </Link>
            </div>
            <div>
                <Link to="/formTwo">
                    <button>Form Two</button>
                </Link>
            </div> */}
            <div>
                <button onClick={clickOne}>Form One</button>
            </div>
            <div>
                <button onClick={clickTwo}>Form Two</button>
            </div>

        </div>
    )
}

export default Entry;