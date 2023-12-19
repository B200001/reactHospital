import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.scss";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  

  const handleSearch = () => {
    // Implement your logic to search for existing records based on searchQuery
    if (searchQuery.trim() !== '') {
      console.log('Searching for form with ID:', searchQuery);
      // Implement your logic to search for forms with the entered ID
      
      navigate(`/newEntry/${userId}`);
    } else {
      console.log('Please enter a valid form ID');
    }
  };

  const createNewID = () =>{

    const newUserId = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
    setUserId(newUserId.toString());
    navigate(`/newEntry/${newUserId}`);
      
      

  }



  return (
    <div className='main'>
      <h1>Home Page</h1>

      <div>
      
      <h1>{userId}</h1>
      <button onClick={createNewID}>Create a new entry</button>
      {/* <button onClick={createNewID}><Link to={`/newEntry/:${userId}`}></Link>create</button> */}
      {/* <Link to={`/newEntry/:${userId}`}><button onClick={createNewID}>Create a new entry</button></Link> */}


      </div>



      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Records"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

      </div>
    </div>
  );
};

export default Home;
