import Header from './components/Header';
import PetAdoptionForm from './components/PetAdoptionForm';
import "./myApp.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdopterData from './components/AdopterData'

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
        height: "100vh",
        backgroundSize: "cover"
      }}
    >
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<PetAdoptionForm />} />
        <Route path='/adopter-data' element={<AdopterData />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
