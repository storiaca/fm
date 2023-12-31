import { useState } from "react";
import { useSearchQuery } from "./petApiService";
import { useSelector, useDispatch } from "react-redux";
import { all } from "./searchParamsSlice";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANMIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const dispatch = useDispatch();
  const adoptedPet = useSelector((state) => state.adoptedPet.value);
  const searchParams = useSelector((state) => state.searchParams.value);

  let { data: pets } = useSearchQuery(searchParams);
  pets = pets ?? [];

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };

          dispatch(all(obj));
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input name="location" id="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            value={animal}
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option value=""></option>
            {ANMIMALS.map((animal) => {
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select name="breed" disabled={breeds.length === 0} id="breed">
            <option value=""></option>
            {breeds.map((breed) => {
              return (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
