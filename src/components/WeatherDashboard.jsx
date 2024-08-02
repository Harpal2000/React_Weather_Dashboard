/* eslint-disable react/prop-types */

const weatherDashboard = ({ weatherData, units }) => {
    const { main, wind, weather, name } = weatherData;

    return (
        <div className="flex flex-col gap-8 items-center justify-center w-full text-gray-200">
            <div className="bg-[#1E213A] p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
                <h1 className="text-5xl mb-4">{name}</h1>
                <div className="flex justify-center items-center">
                    <div className="text-6xl mr-4">
                        <i className={`wi wi-owm-${weather[0].id}`}></i>
                    </div>
                    <div className="text-6xl">
                        {Math.round(main.temp)}°{units === 'metric' ? 'C' : 'F'}
                    </div>
                </div>
            </div>
            <div className="detail-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                <div className="bg-[#1E213A] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center w-full">
                    <h2 className="text-2xl mb-4 text-center">Feels like</h2>
                    <p className="text-xl">{Math.round(main.feels_like)}°{units === 'metric' ? 'C' : 'F'}</p>
                </div>
                <div className="bg-[#1E213A] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center w-full">
                    <h2 className="text-2xl mb-4 text-center">Humidity</h2>
                    <p className="text-xl">{main.humidity}%</p>
                </div>
                <div className="bg-[#1E213A] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center w-full">
                    <h2 className="text-2xl mb-4 text-center">Wind</h2>
                    <p className="text-xl">{wind.speed} {units === 'metric' ? 'm/s' : 'mph'}</p>
                </div>
                <div className="bg-[#1E213A] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center w-full">
                    <h2 className="text-2xl mb-4 text-center">Pressure</h2>
                    <p className="text-xl">{main.pressure} hPa</p>
                </div>
            </div>
        </div>

    )
}

export default weatherDashboard

