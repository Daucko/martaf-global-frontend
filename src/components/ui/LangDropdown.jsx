import React, { useState } from 'react';
import { countries } from '../../utils/constants';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleCountryChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCountry(selectedOption);
    setSelectedLanguage(null); // Reset language when country changes
    console.log(selectedOption, selectedLanguage);
  };

  const handleLanguageChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedLanguage(selectedOption);
    console.log(selectedCountry, selectedOption);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-[16px] py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Select Options
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2 text-sm text-gray-700" role="menuitem">
              <label className="block text-gray-700">Shipping to</label>
              <select
                className="appearance-none mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={handleCountryChange}
              >
                <option className="px-[16px]">Select country</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="px-4 py-2 text-sm text-gray-700" role="menuitem">
              <label className="block text-gray-700">Select language</label>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={handleLanguageChange}
                disabled={!selectedCountry}
              >
                <option>Select language</option>
                {selectedCountry &&
                  countries
                    .find((country) => country.name === selectedCountry)
                    ?.languages.map((language, index) => (
                      <option key={index} value={language}>
                        {language}
                      </option>
                    ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
