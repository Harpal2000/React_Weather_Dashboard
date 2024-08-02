/* eslint-disable react/prop-types */
import { useState } from "react";

const Header = ({ WeatherData, setCity, setUnits, units }) => {
    const [input, setInput] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') {
            alert('Please enter a city name');
            return;
        }
        WeatherData(input);
        setCity(input);
        setInput('');
    };
    const toggleUnits = () => {
        setUnits((prevUnits) => (prevUnits === 'metric' ? 'imperial' : 'metric'));
    };

    return (
        <header>
            <nav className="bg-gray-700 w-full">
                <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <h1 className="text-2xl font-bold text-gray-50">Weather Dashboard</h1>
                    <div className="flex items-center space-x-2 w-full md:w-auto">
                        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
                            <input
                                type="text"
                                placeholder="Enter city name"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="outline-none py-2 px-4 rounded-l-full w-full md:w-auto lg:w-[25rem]"
                            />
                            <button type="submit" className="bg-black text-white rounded-r-full p-2">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                    <div className="w-full md:w-auto flex justify-center md:justify-end">
                        <button
                            className="ml-0 md:ml-4 px-4 py-2 bg-[#1E213A] hover:bg-[#323762] rounded text-white"
                            onClick={toggleUnits}
                        >
                            {units === 'metric' ? 'Switch to °F' : 'Switch to °C'}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header


