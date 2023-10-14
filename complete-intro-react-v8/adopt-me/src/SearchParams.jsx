import { useState } from "react";
const ANMIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            value={animal}
            id="animal"
            onChange={(e) => setAnimal(e.target.value)}
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
