import { useState } from "react";

const PetForm = ({handlePetSubmit}) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petBreed, setPetBreed] = useState("");
    const [petAge, setPetAge] = useState("");

    const handlePetNameChange = (event) => {
        setPetName(event.target.value);
    }

    const handlePetTypeChange = (event) => {
        setPetType(event.target.value);
    }

    const handlePetBreedChange = (event) => {
        setPetBreed(event.target.value);
    }
    const handlePetAgeChange = (event) => {
        setPetAge(parseInt(event.target.value));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!petName || !petType || !petBreed || !petAge){
            return
        }

        let newPet = {
            name: petName,
            type: petType,
            breed: petBreed,
            age: petAge
        }
        handlePetSubmit(newPet);

        fetch("http://localhost:8080/pets",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPet)
        })

        setPetName("");
        setPetType("");
        setPetBreed("");
        setPetAge("");
    }


    return (
        <form id="pet-form">
            <label htmlFor="petame">Pet name:</label>
            <input type="text" id="petname" name="petname" value={petName} onChange={handlePetNameChange} className="form-entry"></input>
            <label htmlFor="pettype">Pet type:</label>
            <input type="text" id="pettype" name="pettype" value={petType} onChange={handlePetTypeChange} className="form-entry"></input>
            <label htmlFor="petbreed">Pet breed:</label>
            <input type="text" id="petbreed" name="petbreed" value={petBreed} onChange={handlePetBreedChange} className="form-entry"></input>
            <label htmlFor="petage">Pet age:</label>
            <input type="text" id="petage" name="petage" value={petAge} onChange={handlePetAgeChange} className="form-entry"></input>

            <button id="submit-button" type="submit" value="Post" onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}

export default PetForm;