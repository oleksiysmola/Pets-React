import Pet from "../components/Pet";
import { useState, useEffect } from "react";

const PetContainer = ({pets}) => {

    const petList = pets.map((pet, index) => {
        return (
            <Pet pet={pet} key ={index}/>
        )
    })
    return (
        <section>
            {petList}
        </section>
    )
}

export default PetContainer;