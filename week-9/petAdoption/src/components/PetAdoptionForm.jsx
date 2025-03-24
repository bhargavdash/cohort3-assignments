import { useRef } from 'react';


const PetAdoptionForm = (props) => {
  const petNameRef = useRef();
  const petTypeRef = useRef();
  const breedRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  function handleSubmit(){

    const currentForm = {
      petName: petNameRef.current.value,
      petType: petTypeRef.current.value,
      breed: breedRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    }
    props.setFormData([...props.formData, currentForm]);
    props.setShowTable(value => !value);
  }

  const styles = {
    width: '60%',
    height: 'auto',
    margin: '0 auto'
  }

  return (
    <div style={styles}>
      <div className="form">
          <h5>Pet Name</h5>
          <input ref={petNameRef} type="text" placeholder="Enter pet name"></input>
          <h5>Pet Type</h5>
          <input ref={petTypeRef} type="text" placeholder="Enter pet type"></input>
          <h5>Breed</h5>
          <input ref={breedRef} type="text" placeholder="Enter Breed"></input>
          <h5>Your Name</h5>
          <input ref={nameRef} type="text" placeholder="Enter your name"></input>
          <h5>Email</h5>
          <input ref={emailRef} type="text" placeholder="Enter your email"></input>
          <h5>Phone</h5>
          <input ref={phoneRef} type="text" placeholder="Enter your phone number"></input>
      </div>
      <div className="submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    
  )
}

export default PetAdoptionForm