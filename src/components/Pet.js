const Pet = ({pet}) => {
    return (
        <>
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
        </>
    );
}

export default Pet;