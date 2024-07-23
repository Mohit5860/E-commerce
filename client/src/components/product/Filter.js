import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FilterItem = ({
  name,
  options,
  isOpen,
  setIsOpen,
  selectedOptions,
  handleOptionChange,
}) => {
  const toggleOpen = () => {
    setIsOpen(isOpen === name ? null : name);
  };

  return (
    <div className="w-full my-2 py-4 border border-b-2 border-x-0 border-t-0 border-slate-300">
      <div className="flex justify-between px-2">
        <h3 className="font-bold">{name}</h3>
        <button onClick={toggleOpen}>
          <span className="text-2xl">{isOpen === name ? "-" : "+"}</span>
        </button>
      </div>
      {isOpen === name && (
        <div>
          {options.map((option) => (
            <div className="w-full mt-2 pt-2 px-2" key={option}>
              <input
                className="px-2 mx-2 size-4"
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(searchParams.entries());
  }, [window.location.search]);
  const queryParams = new URLSearchParams(location.search);
  const [isOpen, setIsOpen] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    const initialSelectedSizes = queryParams.getAll("filterBySize");
    setSelectedSizes(initialSelectedSizes);
    const initialSelectedColors = queryParams.getAll("filterByColor");
    setSelectedColors(initialSelectedColors);
    const initialSelectedPrices = queryParams.getAll("filterByPrice");
    setSelectedPrices(initialSelectedPrices);
  }, [location.search]);
  

  const handleOptionChange = (option, type) => {
    let updatedOptions;
    switch (type) {
      case "size":
        updatedOptions = selectedSizes.includes(option)
          ? selectedSizes.filter((selectedOption) => selectedOption !== option)
          : [...selectedSizes, option];
        setSelectedSizes(updatedOptions);
        break;
      case "color":
        updatedOptions = selectedColors.includes(option)
          ? selectedColors.filter((selectedOption) => selectedOption !== option)
          : [...selectedColors, option];
        setSelectedColors(updatedOptions);
        break;
      case "price":
        updatedOptions = selectedPrices.includes(option)
          ? selectedPrices.filter((selectedOption) => selectedOption !== option)
          : [...selectedPrices, option];
        setSelectedPrices(updatedOptions);
        break;
      default:
        break;
    }
  
    queryParams.delete(
      `filterBy${type.charAt(0).toUpperCase() + type.slice(1)}`
    );
    updatedOptions.forEach((selectedOption) => {
      queryParams.append(
        `filterBy${type.charAt(0).toUpperCase() + type.slice(1)}`,
        selectedOption
      );
    });
    navigate({ search: queryParams.toString() });
  };

  return (
    <div className="w-72 m-2 p-5">
      <h2 className="text-xl font-bold my-2">Filter</h2>
      <FilterItem
        name="Size"
        options={
          ["Boots", "Sneakers", "Sport-Shoes"].includes(query.type)
            ? ["42", "45", "46"]
            : ["S", "M", "L", "XL"]
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedOptions={selectedSizes}
        handleOptionChange={(option) => handleOptionChange(option, "size")}
      />
      <FilterItem
        name="Color"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedOptions={selectedColors}
        handleOptionChange={(option) => handleOptionChange(option, "color")}
        options={["Red", "Blue", "Green", "Pink", "Black", "White", "Yellow"]} 
      />
      <FilterItem
        name="Price"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedOptions={selectedPrices}
        handleOptionChange={(option) => handleOptionChange(option, "price")}
        options={["0-500", "500-1000", "1000-2000", "2000-5000"]} 
      />
    </div>
  );
};

export default Filter;