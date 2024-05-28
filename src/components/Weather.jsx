import { useEffect, useState } from "react";


export default function Weather() {
    const [weatherdata, setWeatherdata] = useState(null)
    const [loading, setLoading] = useState(true)
    const [city, setCity] = useState("")

    function handleChange(event) {
        const newCity = event.target.value;
        console.log(newCity)
        
        setCity(newCity)
    }

    async function getWeather() {
        const req = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await req.json()
        setLoading(false)
        console.log(data)
        setWeatherdata(data)

    }

    useEffect(() => {
        getWeather()
    }, [city])

    return !loading ? (

        <div>
            <div className="hidden sm:block">
                <label htmlFor="icon" className="sr-only">Search</label>
                <div className="relative min-w-72 md:min-w-80">
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                    <input onChange={handleChange} type="text" id="icon" name="icon" className="py-2 px-4 ps-11 block w-56 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search" />
                </div>
            </div>
            {weatherdata.current_condition[0].temp_C}
           

          
        </div>

    ) : (<div>Loading</div>)
}
