import { useEffect, useState } from "react";
import { BASE_URL } from "../config_env";

const Settings =  () =>{
    const [settings,setSettings] = useState() 
    const [changed,setchanged] = useState(false)
    const [send,setSend] = useState(false)
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/api/get/settings.php`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setSettings(jsonData);
        } catch (error) {
        }
        
      };
  
      fetchData();



    }, []);
    const handleToggle = (event, index) => {
      const updatedSettings = [...settings]; 
      updatedSettings[index].active = event.target.checked; // Update the value of the corresponding setting
      setSettings(updatedSettings); // Update the settings state with the modified array
      console.log(updatedSettings)
      setchanged(true)
      setSend(false)
    };
    const handleSaveSettings = async () => {
      setSend(true) // will be deleted for prouction
      setchanged(false)      // will be deleted for prouction
      try {
        const response = await fetch('https://xse.egd.mybluehost.me/api/post/settings.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(settings)
        });
        
        if (!response.ok) {
          throw new Error('Failed to update settings');
        }
  
        console.log('Settings updated successfully');
      } catch (error) {
        console.error(error);
      }


      
    };
  
    return (<>
    <section className="bg-white rounded-2xl overflow-hidden">
    <div className="p-4 bg dark:bg-zinc-800">
    <h1 className="h3 text-green-700">Fonctionnalités</h1>
  <ul className="">
      {settings ? settings.map((item,index) => (
        <li key={item.id} className="flex justify-between gap-x-6 py-3">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="capitalize text-sm font-semibold leading-6 text-gray-700 dark:text-gray-100">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500 ">{item.description}</p>
            </div>
          </div>
          <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
            {/* <p className="text-sm leading-6 text-gray-900"><label htmlFor={item.id+item.title}>Check <input type="checkbox" className="hidden" name="" id={item.id+item.title} /></label></p> */}
            <p className="text-sm leading-6 text-gray-900">
              
            <label className="inline-flex items-center mb-5 cursor-pointer">
            <input
             type="checkbox" className="sr-only peer" checked={item.active === 0 ? false : true}
             onChange={(event)=>handleToggle(event,index)} 
             />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-700"></div>
            </label>

            </p>
          </div>
        </li>
      ))
    : 
    <>
    <ul>
      <li className="animate-pulse w-100 w-full bg-zinc-200 dark:bg-zinc-700 p-2 mt-2">
      </li>
      <li className="animate-pulse w-100 w-full bg-zinc-200 dark:bg-zinc-700 p-2 mt-2">
      </li>
      </ul></>
    
    }
    <div className="flex justify-end mt-3">
      <button
      onClick={handleSaveSettings}
      className={`bg-green-700 text-white px-4 py-2 rounded ${changed?"":"disabled bg-green-700/50 cursor-default "}`}
      >
          {!send ? 'Sauvgarder' : 
            <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 d-inline ">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg> Ok
            </>
 }
      </button>
    </div>
    </ul>
    </div>
    </section>
    </>)
}

export default Settings;