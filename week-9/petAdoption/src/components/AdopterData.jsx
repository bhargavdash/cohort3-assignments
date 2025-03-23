import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
function AdopterData(){
  const [formData, setFormData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const data= location.state;

  useEffect(()=>{
    setFormData([...formData, data])
  }, [])

  function goToHome(){
    navigate('/');
  }

  return <div>
      <table>
        <thead>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Breed</th>
          <th>Adopter Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {formData.map((rowData, index) => (
          <tr key={index}>
          <td>{rowData.petName}</td>
          <td>{rowData.petType}</td>
          <td>{rowData.breed}</td>
          <td>{rowData.name}</td>
          <td>{rowData.email}</td>
          <td>{rowData.phone}</td>
        </tr>
        ))}
        </tbody>
      </table>

    <button onClick={goToHome}>Go back</button>
    </div>
}

export default AdopterData;