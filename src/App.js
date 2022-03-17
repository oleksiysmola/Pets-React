import './App.css';
import Title from './components/Title';
import PetContainer from './containers/PetContainer';
import PetForm from './components/PetForm';
import {useState, useEffect} from 'react';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8080/pets")
      .then(response => response.json())
      .then(data => setPets(data))
  }, [])

  const addPet = (newPet) => {
    setPets([...pets, newPet]);
  }
  return (
    <>
      <Title/>
      {pets ? <PetContainer pets={pets}/> : <p>Loading pets...</p>}
      <PetForm handlePetSubmit={(pet) => addPet(pet)}/>
    </>
  );
}

export default App;
