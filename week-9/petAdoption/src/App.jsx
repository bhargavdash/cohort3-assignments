import Header from './components/Header';
import PetAdoptionForm from './components/PetAdoptionForm';
import "./myApp.css";
import AdopterData from './components/AdopterData'
import { useState } from 'react';

const App = () => {
  const [showTable, setShowTable] = useState(false);
  const [formData, setFormData] = useState([]);
  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
        height: "100vh",
        backgroundSize: "cover"
      }}
    >
      <Header />
      {!showTable && <PetAdoptionForm 
      setShowTable={setShowTable} 
      formData={formData} 
      setFormData={setFormData} />}
      {showTable && <AdopterData 
      setShowTable={setShowTable} 
      formData={formData} 
      setFormData={setFormData} />}
    </div>
  );

};

export default App;
