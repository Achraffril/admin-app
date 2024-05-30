import { useEffect, useState } from "react";
import { SimpleLoader } from "../componenets/loading";

const Gallery = ({classes,photos}) =>{
    const [gallery,setgallery] = useState()
    const [filtredGallery,setFiltredGallery] = useState()
    const [uniqueClasses,setuniqueClasses] = useState([])
    const [error,setError] = useState()
    const [isEmpty,setisEmpty] = useState(false)
    const [tags,setTags] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://xse.egd.mybluehost.me/api/get/photos.php');
            if (!response.ok) {
              throw new Error('Failed to fetch data ');
            }
            const jsonData = await response.json();
            if(!jsonData.empty){
              setgallery(jsonData)
              setFiltredGallery(jsonData)
              setisEmpty(jsonData.length === 0)
              
              // setuniqueClasses(uniqueTypes)
            if(classes){
              
            }
            }
              setError("Il n'y a aucune photo dans la galerie.")
            } catch (error) {
          }
          
        };
    
        fetchData();



      }, [classes]);
      
      const tagChange = (event)=>{
        const allinputs = document.querySelectorAll("input[type='checkbox']")
        const list=[]
        allinputs.forEach(element => {
          if(element.checked){
            list.push(element.value)
          }
          
        });        
        setTags(list)
        if(list.length > 0){
          setFiltredGallery(gallery.filter((item)=> list.includes(item.class)))
        }
        else{
          setFiltredGallery(gallery)
        }
      }


     
    return (
        <>
        <ul className="flex flex-wrap gap-3 mb-5 overflow-y-scroll max-h-48">
        {/* <li key="" accessKey="t" className="grow bg-white text-center text-sm border-2 cursor-pointer px-2 p-1 rounded-full for-active active" 
                onClick={(event)=>tagChange(event,"")}
                >

                Tous</li> */}
            {classes && classes.length ?
              classes.map((item)=>{
                return (
                  <>
                <li key={item.title} className="grow sm:max-w-fit" 
                >
                  <label htmlFor={`id_${item.title}`} 
                  className="text-center text-xs border-2 cursor-pointer px-2 p-1 rounded-full for-active flex gap-1 bg-white/100 dark:bg-white/0"
                    onClick={(e)=>{e.target.classList.toggle('active')}}>
                    <input type="checkbox" className="sr-only" value={item.title} id={`id_${item.title}`} onChange={tagChange} />
                    {item.title}
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 close-tag">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                      </svg>


                    

                  </label>
               
                  </li>
                </>
                )
              })
              :
              ""
            }
            
        </ul>
        <section>
            
            <section>
             <div className="sm:flex  mb-5 items-center">
              <div className="text-zinc-600 dark:text-zinc-300">
                  {filtredGallery && filtredGallery.length ? <>Taille de galerie : <span>{filtredGallery.length}</span></> : ""}
              </div>
             {/* <div className="ms-auto max-w-fit grow ">
                        <div className="input-group rounded-full border  overflow-hidden">
                        <input
                         type="text" name='search' className="form-control border-none focus:outline-none focus:ring-0 focus:ring-blue-100 focus:border-transparent " placeholder="Trouver un plat" aria-label="search" aria-describedby="basic-addon1" />
                        <button className="input-group-text border-none bg-white "  id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        </div>
                </div> */}
             </div>
            </section>


       


<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4">
    {filtredGallery && filtredGallery.length > 0 ? filtredGallery.map((item,index)=>{
      // if()
        return (<>
        <div className="relative gallery-box overflow-hidden">
            <img className="h-full w-full max-w-full rounded-lg bg-white hover:shadow-3xl object-cover " src={item.photo_url} alt=""/>
            <div className="absolute text text-white p-2">
               <p className="text-xl font-semibold">{item.title}</p>
               <p className="font-light">{item.class}</p>
            </div>
        </div>
        </> 
        )
      }
      ) : 
      <Response as={isEmpty ? "empty" : "load"} error={error}/>
    }
    </div>
    



        </section>
        </>
    )
}
export default Gallery;

const Response = ({as,error})=>{
  return (<>
    
    <div className="p-4">
    {as === "empty"?
    <>
    <div className="block">
    <p> {error}</p>
    </div>
    
    </>
     : 
     <SimpleLoader />
     }
    </div>
    </>)
}