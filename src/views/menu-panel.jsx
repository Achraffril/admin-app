import { useEffect, useState } from "react";
// import { fetchData } from "../functions";
import { Link } from "react-router-dom";
import { SimpleLoader } from "../componenets/loading";

const MenuView = ({classes,getMenu}) =>{
    const [menu,setMenu] = useState([]);
    const [filteredMenu,setfilteredMenu] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    const [pagination,setPagination] = useState(20);
    const [searchKey,setsearchKey] = useState("");
    const [searchClass,setSearchClass] = useState("")
    const [handle,setHandle] = useState();
  

    
    
      



    
    useEffect(() => {
      console.log(getMenu ? getMenu.length :"loading...")
      FilterBy()
      },[] );
    
    const FilterBy =()=>{
      console.log("I'll filter")
      if(searchClass === "" && searchKey === ""){
        setfilteredMenu(getMenu)
      }
      if(searchKey !=="" && searchClass !== ""){
        setfilteredMenu(getMenu.filter(item => item.title.toLowerCase().includes(searchKey.toLowerCase()) && item.class === parseInt(searchClass)))
      }
      else if(searchKey !=="" ){
        console.log(2)
        setfilteredMenu(getMenu.filter(item => item.title.toLowerCase().includes(searchKey.toLowerCase())) )
      }
    }
    const HandleClass = (event)=>{
    setPagination(20)
    setsearchKey("")
    setSearchClass(event.target.value)
    if(event.target.value !== ""){
        setfilteredMenu(getMenu.filter(item => item.class === parseInt(event.target.value)))
    }
    else{
        setfilteredMenu(getMenu)
    }
    }
    const handlSearch = (e)=>{
    e.preventDefault();
    FilterBy()

    }

    const handleToggle = (event, index,id,value) => {

        // setHandle({
        //     id:id,
        //     in_stock: value
        // })
        
        const updatedMenu = [...filteredMenu];
        updatedMenu[index].in_stock = event.target.checked ? 1 : 0;
        setfilteredMenu(updatedMenu); // Update the settings state with the modified array
        handleSaveSettings_instock(id,value);



    };
    const handleSaveSettings_instock = async (id,value) => {
        const postData = new FormData();
        if(id){
          postData.append("id",id)
          try {
            const response = await fetch('https://xse.egd.mybluehost.me/api/post/in_stock.php', {
              method: 'POST',
              body: postData
            });
            console.log(response)
            if (!response.ok) {
              throw new Error('Failed to update settings');
            }
      
            console.log('Settings updated successfully');
          } catch (error) {
            console.error(error);
          }
        }
  
  
        
      };
    


    const getClassTitleby = (id) => {
      const target = classes.filter(item => item.class_id === parseInt(id) )
      return target[0].title
    }
    
    
    return (
        <>
        <section className="mb-4">

        <h1 className="font-semibold h2 text-gray-700 dark:text-gray-100">Gestion Menu et plats</h1>
        <p className="dark:text-gray-400">Tant que vous êtes un administrateur <span className="text-green-700 ">RA</span>, vous pouvez ajouter un nouveau plat, modifier ou supprimer tous les plats.</p>
        </section>
        <section className="mb-4">
        <div className="flex justify-between align-items-center flex-wrap gap-4" >
        <div className="flex mb-3 grow">
            <div className="input-group rounded-full overflow-hidden border grow flex" >
                <button  className="form-contro grow items-center justify-center p-2 border-l px-3 bg-white text-gray-700 hover:text-green-800 hover:bg-gray-300 flex gap-1" 
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>




                        <div className="mobiled">Ajouter </div>
                </button>
                <a href="http://localhost/api/get/downoload.php"className="form-contro grow items-center justify-center p-2 border-l px-3 bg-white text-gray-700 hover:text-green-800 hover:bg-gray-300 flex gap-1" type="a">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                            </svg>



                    <div className="mobiled">Telecharger</div>
                </a>
                <a href="https://laruchedujardin.ma/restaurant/" rel="noreferrer" target="_blank" className="form-contro grow items-center justify-center p-2 border-l px-3 bg-white text-gray-700 hover:text-green-800 hover:bg-gray-300 flex gap-1" type="button">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>



                    <div className="mobiled">
                    Aperçu
                    </div>
                    
        </a>
            </div>
        </div>
        <form id="filterForm" className="mb-3 grow" onSubmit={handlSearch}>
        <div className="row gt-3 ">
                
                <div className="col-4">
                    <select name="class" id="inputState" className="rounded-full overflow-hidden form-select border focus:outline-none focus:ring-0 focus:ring-blue-100 focus:border-transparent "
                    onChange={HandleClass}
                    >
                    <option value="">Tout</option>
                    {classes ? classes.map((item)=>
                    {return <>
                        <option value={item.class_id}>{item.title}</option>
                    </>}
                    ) :''}
                    </select>
                </div>
                <div className="col-8">
                        <div className="input-group rounded-full overflow-hidden border">
                        <input 
                        onChange={(e)=>{setsearchKey(e.target.value)}}
                        value={searchKey}
                         
                         type="text" name='search' 
                         className="form-control border-none focus:outline-none focus:ring-0 focus:ring-blue-100 focus:border-transparent " placeholder="Trouver un plat" aria-label="search" aria-describedby="basic-addon1" />
                        <button className="input-group-text border-none bg-white "  id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        </div>
                </div>
            </div>
        </form>

        </div>
        </section>
        {/* {message?<Alert message={message}/>:''} */}
        {/* <div className="mb-4 bg-white">
          <div  className="alert border-b-0 border-l-0 border-r-0 alert-dismissible fade show rounded border-t-4 border-green-600 text-green-900 px-4 py-3 shadow-md bg-green-600/10" role="alert">
          <div className="flex gap-2  justify-between">
            <div className="flex items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div>
              <p className="font-bold">Le plat été ajouter avec succeé </p>
              <p className="text-sm text- underline" onClick={ ()=> window.location.reload()}>Refrecher la page</p>
            </div>
            </div>
            
            <button type="button" className="" data-bs-dismiss="alert" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            </div>
          </div>
        </div>        */}
        <section id="table_menu" className="w-100 overflow-x-scroll">
        
        {filteredMenu ? <p className="p-2 font-semibold">Total des lignes : {filteredMenu.length}</p> : ""}
        <table className="bg-white dark:border-none w-100 p-2 rounded-xl overflow-hidden">
                <tr className="text-white bg-zinc-700">
                    

                    <th className="p-3">Icon</th>
                    <th className="p-3">Titre</th>
                    <th className="p-3 mobiled">Prix</th>
                    <th className="p-3 mobiled">description</th>
                    <th className="p-3 ">catgeory</th>
                    <th className="p-3 mobiled">Classe</th>
                    <th className="p-3">Disponibilité</th>
                    <th className="p-3">Modifier</th>

                </tr>
                <tbody className="bg- dark:bg-zinc-800 print_content">
                        {filteredMenu ? filteredMenu.map((dish,index)=>{
                        
                            if(index <= pagination){
                            return (<>
                            <tr className="">
                            <td className="p-2"><img src={dish.icon} alt="" className="w-10 h-10 rounded-3xl bg-gray-100 " /></td>
                            <td className="p-2 font-medium">{dish.title}</td>
                            <td className="p-2 mobiled">{dish.price}</td>
                            <td className="p-2 mobiled max-w-12 w-1/4	whitespace-nowrap overflow-hidden truncate ">{dish.description}</td>
                            <td className="p-2 ">{dish.category}</td>
                            <td className="p-2 mobiled">{getClassTitleby(dish.class)}</td>
                            <td className="p-2 text-center ">
                              
                            <label className="cursor-pointer ">
                                <input
                                type="checkbox" className="sr-only peer" checked={dish.in_stock === 1 ? true : false}
                                onChange={(event)=>handleToggle(event,index,dish.id,dish.in_stock)} 
                                />
                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-zinc-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-200 peer-checked:bg-green-700"></div>
                                </label>
                                                        
                            </td>
                            <td>
                                <div className="flex justify-center">
                                    <Link to={`/panel/dashboard/update/menu/${dish.id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-main">
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </td>
                            </tr>
                            </>)}
                        })
                    :
                    
                    <tr className=""><td colSpan={5}>
                      <SimpleLoader />
                      </td></tr>
                    }
                      
                        
                  
                        
                </tbody>
                
                </table>


                
        </section>
            {filteredMenu ? pagination < (filteredMenu.length) ? <button className="
            dark:text-zinc-800
            bg-white
            hover:bg-gray-100 border rounded-full p-2 w-1/2 flex justify-center gap-2 font-semibold mx-auto mt-3"
            onClick={()=>{if(pagination < filteredMenu.length){
              setPagination(pagination+20)}
              else{
                console.log('paginate fail')
              }
              
            }}
            >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                        <span>
                            Voir plus
                        </span>
            </button>
            : 
            "" : ""}






        <section>


        <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable " role="document">
            <div className="modal-content overflow-y-scroll ">
              
            <div className="modal-header border-none flex justify-between">
                <h1 className="font-semibold text-3xl fs-5" id="staticBackdropLabel">Nouveau plat</h1>
                
                <button className="bg-gray-100 text-gray-900 rounded-full p-2"
                      data-bs-dismiss="modal"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>

                </button>            
                      
                      </div>
        <AddDish />
            </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default MenuView;




const DragCover = ({ onFileUpload ,initialized}) => {
    const [dragging, setDragging] = useState(false);
    const [file,setFile] = useState();
    const [tempImage,setTempImage]= useState()
    
    
  
    useEffect(()=>{
        onFileUpload(file);
        if(initialized){
          setTempImage(null)
        }
      })
    const handleDragOver = (e) => {
      e.preventDefault();
      setDragging(true);
    };
  
    const handleDragEnter = (e) => {
      e.preventDefault();
      setDragging(true);
    };
  
    const handleDragLeave = (e) => {
      e.preventDefault();
      setDragging(false);
    };
    
    const setFile_function = (file)=>{
        setFile(file);
        const reader = new FileReader();
        reader.onload = () => {
          const imageDataURL = reader.result;
          // Set the data URL as the source of the image element
        //   const imgPreview = document.getElementById('img-preview');
        //   imgPreview.style.backgroundImage = `url(${imageDataURL})`;
        setTempImage(imageDataURL)
            
    };
    
        reader.readAsDataURL(file);
    }
    const handleDrop = (e) => {
      e.preventDefault();
      setDragging(false);
      setFile_function(e.dataTransfer.files[0]);

 


    };
    

    
  
    return (
      <>
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className='rounded-2xl p-4'
        style={{ border: dragging ? '2px dashed #555' : '2px dashed #ccc', background: dragging ? 'gainsboro' : ''}}
      >
        {tempImage ?
    <img src={tempImage} alt="" className="w-full h-auto object-cover mb-3" />    
    :""} 
        <div className="text-center flex justify-center flex-column align-items-center">
          <div className="flex text-sm leading-6 text-gray-600">
              <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white text-gray-700 font-bold border px-2 hover:text-green-600"
              >
              <input id="file-upload" 
              name="icon" accept='.png, .jpeg, .jpg' type="file" className="sr-only" 
              onChange={(e) => setFile_function(e.target.files[0])}
              // onfocus={handlechange}
              />
  
              <span>Télécharger une image</span>
              </label>
              <p className="pl-1">ou glisser et déposer</p>
              
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
      </div>
      {}
      </>
  
  
    );
  };

const Alert = ({message})=>{
  return <>
    {/* <div className="bg-white  mb-4">
    <div className="alert border-b-0 border-l-0 border-r-0 alert-dismissible fade show rounded bg-green-100 border-t-4 border-green-600 text-green-900 px-4 py-3 shadow-md bg-green-600/10 " role="alert">
      <strong></strong> Lorem ipsum dolor sit amet consectetur adipisicing
      <button type="button" className="" data-bs-dismiss="alert" aria-label="Close">
        
      </button>
    </div>
    </div> */}


  <div className="mb-4 bg-white">
    <div  className="alert border-b-0 border-l-0 border-r-0 alert-dismissible fade show rounded border-t-4 border-red-500 text-red-700 px-4 py-3 shadow-md bg-red-500/10" role="alert">
    <div className="flex gap-2  justify-between">
      <div className="flex items-center gap-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>

      <div>
        <p className="font-bold">Erreur </p>
        <p className="text-sm text- underline" onClick={ ()=> window.location.reload()}>Refrecher la page</p>
      </div>
      </div>
      
      <button type="button" className="" data-bs-dismiss="alert" aria-label="Close" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      </div>
    </div>
  </div>


  <div className="mb-4 bg-white">
    <div  className="alert border-b-0 border-l-0 border-r-0 alert-dismissible fade show rounded border-t-4 border-yellow-500 text-yellow-800 px-4 py-3 shadow-md bg-yellow-500/10" role="alert">
    <div className="flex gap-2  justify-between">
      <div className="flex items-center gap-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>

      <div>
        <p className="font-bold">Warning</p>
        <p className="text-sm text- underline" onClick={ ()=> window.location.reload()}>Refrecher la page</p>
      </div>
      </div>
      
      <button type="button" className="" data-bs-dismiss="alert" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      </div>
    </div>
  </div>
  
  </>
}

export const AddDish = ({classes})=>{
  const [photo, setPhoto] = useState(null);
  const [uploaded, setUploaded] = useState();
  const [isInitilized, setIsInitilized] = useState();
  const [message,setMessage]= useState(null)
  const [validated,setValidated] = useState(true);
  const [data_for_adding,set_data_for_adding] = useState({
    title :'',
    description:'',
    price:0,
    category:'',
    class:null,
    in_stock:true,
    icon:'',
}) 

  const UploadPhoto = (file)=>{
      setPhoto(file);
      setIsInitilized(false);
  }
  const  handleChange_forInsertion = (event)=>{
      const { name, value } = event.target;
      set_data_for_adding({
        ...data_for_adding,
        [name]: value
      });
      if(name === "class"){
        set_data_for_adding({
          ...data_for_adding,
          category : value,
          class:value
        })
      }



      setIsInitilized(false);


      

  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      console.log(data_for_adding.title)
      formData.append('title', data_for_adding.title);
      formData.append('price', data_for_adding.price);
      formData.append('description', data_for_adding.description);
      formData.append('category', data_for_adding.category);
      formData.append('class', data_for_adding.class);
      formData.append('icon', photo);
  
      try {
        const response = await fetch('https://xse.egd.mybluehost.me/api/post/dish_insert.php', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const jsonData = await response.json(); 
          setUploaded(jsonData.uploaded);
          
          // if(jsonData.uploaded){
          //   initalizeInsertion()
          //   setMessage({
          //     type: "success",
          //     text: "Le plat été ajouter"
          //   })
          // }  
          if(jsonData.transation){
            window.location.reload();
          }
        } else {
          console.error('Failed to insert element');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      
  }
  const initalizeInsertion = ()=>{
    setPhoto(null);
    setUploaded(null);
    set_data_for_adding({
      title :'',
      description:'',
      price:0,
      category:'',
      class:"",
      in_stock:true,
      icon:'',
  }) 
    setIsInitilized(true)

  }


  return (
    <>
    <form onSubmit={handleSubmit}>
            <div className="modal-body">
               {validated}
                {message?<Alert message={message}/>:''}

                <div className="row col-12 my-4">

                    <div className="col-12 mb-3 ">
            
                        <div className="row ">
                            <div className="col">
                            <label for="inputTitre4" className="form-label font-semibold text-gray-900">Titre <span className="text-red-600">
                              *</span></label>
                            <input type="text" className="form-control" id="inputTitre4" name="title"
                            onChange={handleChange_forInsertion}
                            title=""
                            required 
                             />
                            </div>  
                        
                            <div className="col">
                                <label for="inputPrix4" className="form-label font-semibold text-gray-900">Prix <span className="text-red-600">
                              *</span></label>
                                <input type="number" className="form-control" id="inputPrix4" name="price" 
                                  onChange={handleChange_forInsertion}
                                  title=""
                                  required 
                                />
                            </div>

                        </div>
                
                        
                    </div>
                    <div className="col-12 mb-3">
                        <label for="inputDescription" className="form-label font-semibold text-gray-900">Description</label>
                        <textarea type="text" className="form-control" id="inputDescription" name="description"  placeholder="1234 Main St"
                         onChange={handleChange_forInsertion}
                        ></textarea>
                    </div>
                    <div className="col-12 mb-3">
                        
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="inputState" className="form-label font-semibold text-gray-900">Class <span className="text-red-600">
                              *</span></label>
                        <select name="class" id="inputState" className="form-select border focus:outline-none focus:ring-0 focus:ring-blue-100 focus:border-transparent "
                         onChange={handleChange_forInsertion}
                         title=""
                        required 
                        >
                          <option value="">choisier</option>
                            {classes ? classes.map((item)=>{
                                return <>
                                <option className="text-gray-800" value={item.id}>{item.title}</option>
                                </>
                            }) 
                        :
                        ""}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="category" className="form-label font-semibold text-gray-900">Category <span className="text-red-600">
                              *</span></label>
                        <input type="text" className="form-control" id="category" name="category"  
                          onChange={handleChange_forInsertion}
                          value={data_for_adding.category}
                          title=""
                          required 
                        />
                    </div>
                    
                    {/*  */}
                    <div className="col-span-full my-3">
                        <label htmlFor="cover-photo" className="form-label font-semibold text-gray-900">
                            photo <span className="text-red-600">
                              *</span>
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border-gray-900/25 px-6 py-10">
                            <DragCover onFileUpload={UploadPhoto} initialized={isInitilized} handlechange={handleChange_forInsertion}/>
                        </div>
                    </div>



                </div>
            </div>
            <div className="modal-footer border-none">
                <button type="reset" className="p-2 rounded px-4 text-green-800"  data-bs-dismiss="modal" onClick={initalizeInsertion} id='close-insertion-modal'>Annuler</button>
                {!validated ? 
                  <button type="button" className="p-2 rounded px-4 bg-green-800 text-white opacity-75 " disabled >Ajouter</button>  
                :
                  <button type="submit" className="p-2 rounded px-4 bg-green-800 text-white " >Ajouter</button>
                }
            </div>
        </form></>
  )
}