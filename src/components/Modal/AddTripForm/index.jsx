import { useState } from "react";
import { getCities } from "../../../services/cities";
import { createNewTrip } from "../../../services/trips";
import { nanoid } from "nanoid";
import style from "./AddTripForm.module.css";

const cityData = getCities();

const AddTripForm = ({ onClose }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddTrip = (event) => {
    event.preventDefault();
    const selectedCityObject = cityData.find(
      (city) => city.name === selectedCity
    );
    if (!selectedCity) {
      setErrorMessage("Please choose city from the list");
    }
    if (!selectedCityObject) {
      console.error("Selected city not found in cityData");

      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const today = new Date();
    const futureDate = new Date(today.setDate(today.getDate() + 15));

    if (start > futureDate || end > futureDate) {
      setErrorMessage("Please select a date within the next 15 days.");
      return;
    }

    const tripData = {
      id: nanoid(),
      title: selectedCity,
      startDate,
      endDate,
      image: selectedCityObject.image_url,
    };

    createNewTrip(tripData);
    onClose();
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
    setErrorMessage("");
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
    setErrorMessage("");
  };

  const handleCityPicker = (e) => {
    setSelectedCity(e.target.value);
    setErrorMessage("");
  };
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleAddTrip} className={style.addTripForm}>
        <div className={style.inputsContainer}>
          <label className={style.fieldLabel}>
            <span className={style.fieldIsRequired}>*</span> City:
          </label>
          <select
            className={style.formInput}
            value={selectedCity}
            onChange={handleCityPicker}
          >
            <option value="">Please select city</option>
            {cityData.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <label className={style.fieldLabel}>
            <span className={style.fieldIsRequired}>*</span> Start Date:
          </label>
          <input
            className={style.formInput}
            type="date"
            placeholder="Select date"
            value={startDate}
            min={new Date().toISOString().split("T")[0]}
            max={
              new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0]
            }
            onChange={handleStartDate}
          />
          <label className={style.fieldLabel}>
            <span className={style.fieldIsRequired}>*</span> End Date:
          </label>
          <input
            className={style.formInput}
            placeholder="Select date"
            type="date"
            value={endDate}
            min={startDate}
            onChange={handleEndDate}
          />
          {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
        </div>
        <div className={style.btnContainer}>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddTripForm;
