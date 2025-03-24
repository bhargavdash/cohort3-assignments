import { useState, useEffect } from 'react';
function AdopterData(props){

  function goToHome(){
    props.setShowTable(value => !value);
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
        {props.formData.map((rowData, index) => (
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