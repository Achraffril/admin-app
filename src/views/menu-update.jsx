import React, { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SimpleLoader } from '../componenets/loading';


const Update_From_Menu= ({classes,menu,photos})=>{
  const {id} = useParams()
  const [formData, setFormData] = useState({
    id:'',
    title:"",
    price:0.00,
    class : "",
    category:"",
    description: '',
    icon:"",
    in_stock:false
  });
  const [founded, setFounded] = useState(null);
  const [icon,setIcon] = useState()   
  const [gallery,setGallery] = useState();  
  const [oldGallery,setOldGallery] = useState();  
  useEffect(()=>{
    if(formData.id === ''){
      if(menu){
        const target = menu.filter((item)=>item.id === parseInt(id))
        if(target.length>0){
          console.log("this is ",target[0])
          setFormData(target[0])
          setFounded(true)
          console.log(target.icon)

        }
        else{
          setFounded(false)
        }
        
        setOldGallery(photos ? photos : [])
      }
    }

      
  
   


    
    
  })

  const fetchData = async () => {
    // try {
    //   const response = await fetch('https://xse.egd.mybluehost.me/api/getphotos.php');
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch data');
    //   }
    //   const jsonData = await response.json();
    //   } catch (error) {
    //   // console.log(error)
    // }
    
  };
  fetchData();

  const handleSubmit = async (e)=>{
      e.preventDefault()
        const postData = new FormData();
        postData.append('id',formData.id)
        postData.append('title', formData.title);
        postData.append('price', formData.price);
        postData.append('description', formData.description);
        postData.append('category', formData.category);
        postData.append('class', parseInt(formData.class));
        postData.append('icon', icon);
        postData.append('in_stock', formData.in_stock);
        console.log(formData)   
        try {
          const response = await fetch('https://xse.egd.mybluehost.me/api/post/dish_update.php', {
            method: 'POST',
            body: postData,
          });
          if (response.ok) {
            const jsonData = await response.json();
            if(jsonData.updated){
              window.location.reload();
            }
            
          } else {
            console.error('Failed to insert element');
          }
        } catch (error) {
          console.error('Error:', error);
        }
        // console.log(formData,"icon :",icon)
        console.log(gallery)

  }
  const  handleChange_forUpdate = (event)=>{
    const { name, value } = event.target;
    console.log(name,value)
    
    
    setFormData({
      ...formData,
      [name]: value
    });
    if(name === "class"){
      setFormData({
        ...formData,
        class:value,
        category : classes.filter((item)=> item.class_id == value)[0].title
      })
    }
    if(name === "in_stock"){
      setFormData({
        ...formData,
        in_stock: event.target.checked
      })
    }
  }

    
    const uploadIcon = (handledFile)=>{
      setIcon(handledFile)
    }
    const handleGalleryFiles = (files) =>{
      setGallery(files)

    }
  



    const handleDelete = async (e)=>{
      e.preventDefault()
        const postData = new FormData();
        postData.append('id', id)
      try {
        const response = await fetch('https://xse.egd.mybluehost.me/api/post/dish_delete.php', {
          method: 'POST',
          body: postData,
        });
        if (response.ok) {
          const jsonData = await response.json();
          if(jsonData.deleted){
            window.location.reload();
          }
          
        } else {
          console.error('Failed to insert element');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    return (<> 
{founded ? 
<form className="m-auto row g-3 max-w-5xl sm:bg-white p-4 rounded-3xl sm:my-5 sm:shadow " 
    onSubmit={handleSubmit}
    >

    <div className="grid sm:grid-cols-5 mt-3 my-4 row-gap-4">
        <div className="sm:col-span-2 grow col-span-3 mx-auto p-2 ">
            <div className="p-2">
                <div className="relative overflow-hidden rounded-lg mx-auto ">
                    <DragIcon onFileUpload={uploadIcon} defaultImg={formData.icon}/>
                </div>
            

            </div>
        </div>
        <div className="col-span-3  grow">
            
            <div className="row mb-2">
                <div className="col">
                    <label for="inputId4" className="form-label font-semibold text-gray-900">Numéro</label>
                    <input type="text" disabled className="form-control text-zinc-500 disabled" id="inputId4" name="id" value={formData.id} 
                    onChange={handleChange_forUpdate}
                    />
                    <p className="p-2 rounded"></p>
                </div>  
                    
                <div className="col">
                    <label for="inputPrix4" className="form-label font-semibold text-gray-900">Prix</label>
                    <input type="text" className="form-control text-zinc-500" id="inputPrix4" name="price" value={formData.price}
                    onChange={handleChange_forUpdate}
                    />
                </div>

            </div>
            
            <label for="inputTitre4" className="form-label font-semibold text-gray-900 mt-2">Titre</label>
            <input type="text" className="form-control text-zinc-500" id="inputTitre4" name="title"  value={formData.title} 
              onChange={handleChange_forUpdate}
                                />
            
            <div className="input-group mb-3">
            </div>  
            </div>
        </div>

    

        

    
   

    <div className="col-12">
        <label for="inputDescription" className="form-label font-semibold text-gray-900">Description</label>
        <textarea type="text" className="form-control text-zinc-500" id="inputDescription" name="description"  
        style={{autosize:"on"}}
        autosize
        placeholder="1234 Main St"
        onChange={handleChange_forUpdate}
        value={formData.description}
        rows={5}
        ></textarea>
    </div>
    <div className="col-12">
          
    </div>
    <div className="col-md-6">
        <label for="inputState" className="form-label font-semibold text-gray-900">Class</label>
        <select 
        name="class" id="inputState" className="form-select border focus:outline-none focus:ring-0 focus:ring-blue-100 focus:border-transparent "
        onChange={handleChange_forUpdate}
        >0
            {classes?classes.map((item)=>{
              return (<><option value={item.class_id} selected={formData.class == item.class_id}>{item.title}</option></>)
            }):""}
        </select>
    </div>
    <div className="col-md-6">
        <label for="category" className="form-label font-semibold text-gray-900">Category</label>
        <input type="text" className="form-control text-zinc-500" id="category" name="category" value={formData.category}
        onChange={handleChange_forUpdate} />
    </div>
    {/* <div className="col-12">
      <label for="" className="form-label font-semibold text-gray-900">Gallery</label>
      <div className="bg-gray-100 p-4 rounded ">
        <DragCover ongalleryUpload={handleGalleryFiles} gallery={photos ? photos : []}/>
      </div>
    </div> */}

    {/* instock */}
    <div className="mt-4">

                <label for="flexSwitchCheckChecked" className="form-label font-semibold text-gray-900 mt-2">Disponiblite</label>
                <div className="form-check form-switch text-center flex ">
                    
                    <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" 
                    checked={formData.in_stock == 1 ? true : false}
                    onChange={handleChange_forUpdate}
                    name="in_stock"
                    />
                </div>
            </div>
    <div className="col-12 mt-5">
        <div className="">
        
        <button type="button" className="text-red-500 flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#DeleteDishModal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            <span> Supprimer définitivement</span>
        </button>
        </div> 
    </div>
    <div className="col-12 gap-3 flex justify-end items-center">
        <Link to="/panel/dashboard/menu"><a className="btn text-green-800 border-1 dark:border-none hover:bg-gray-200 bg-white/100 dark:bg-white/0">Annuler</a></Link>
        <button type="submit" className="btn bg-green-800 text-white hover:bg-green-700">Sauvguarder <span className="mobiled">les modification</span></button>
    </div>
    </form>
    : 
    <LoadingCard check={founded}/>
    
    }
     

    


    <div className="modal fade" id="DeleteDishModal" tabindex="-1" aria-labelledby="DeleteDishModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header  border-none">
        <h5 className="modal-title" id="DeleteDishModalLabel"> Attention</h5>
        <button className="ms-auto bg-gray-100 text-gray-900 rounded-full p-2"
                      data-bs-dismiss="modal"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>

        </button>     
      </div>
      <form onSubmit={handleDelete} method="post">
        <input type="hidden" name="action" value="delete" />
        <input type="hidden" name="id" value="<?= $row['id']?>" />
        <div className="modal-body border-none">
        Êtes-vous sûr de vouloir supprimer cet élément ? Cette action est irréversible et entraînera la perte définitive des données associées.
        </div>
        <div className="modal-footer  border-none">
            <button type="button" className="p-2 px-4 rounded text-red-700 " data-bs-dismiss="modal">Annuler</button>
            <button type="submit" className="p-2 px-4 rounded text-white bg-red-700/90">Supprimer</button>
        </div>
      </form>
    </div>
  </div>
    </div>
    
    </>)
}
export default Update_From_Menu;


const DragCover = ({ ongalleryUpload,gallery}) => {
  const [dragging, setDragging] = useState(false);
  const [files,setFiles] = useState([]);
  const [tempImage,setTempImage]= useState()
  const [photos,setPhotos] = useState(gallery.map((item)=>{return item.photo_url}))
  

  useEffect(()=>{
    ongalleryUpload(files);
    if(true){

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
  
  const setFile_function = (inputFiles)=>{
    console.log(files.length)
    setFiles([...files,inputFiles]);
    if(inputFiles<11 && files.length<11){
      for (let index = 0; index < inputFiles.length; index++) {
        console.log(inputFiles[index]); 
        const file = inputFiles[index];
        const reader = new FileReader();

        reader.onload = () => {
          setPhotos([...photos,reader.result]);
        };

        if (file) {
          reader.readAsDataURL(file);
        } 
      }
    }
    else{
      alert('max 10 ')
    }
        
};
  
  const handleDrop = async (e) => {
    e.preventDefault();
    setDragging(false);
    // console.log(e.dataTransfer.files)
    
    // console.log(fileToImageData(e.dataTransfer.files[0]));
    // imgFromFile(e.dataTransfer.files[0])
    // setFiles([...files,e.dataTransfer.files[0]]);
    if(files.length < 11){
      const file = e.dataTransfer.files[0];
      const imageDataPromises = [];
  
      const imageData = await fileToImageData(file);
      // setImageDataList(imageDataResults);
      setPhotos(array => [...array, imageData]);
      setFiles(array => [...array, file]);
    }
    else{alert("Max 10")}



  };
  
  // const imgFromFile = (file)=>{
  //   const reader = new FileReader();
  //   console.log(reader)
  // }
  const handleFileChange = async (event) => {
    const handledFiles = event.target.files;
    if(handledFiles.length<11 && files.length<11 && (handledFiles.length + files.length)<11 ){
      setFiles(array => [...array, ...handledFiles])
      const imageDataPromises = [];

    for (let i = 0; i < handledFiles.length; i++) {
      const file = handledFiles[i];
      imageDataPromises.push(fileToImageData(file));
    }

    try {
      const imageDataResults = await Promise.all(imageDataPromises);
      // setImageDataList(imageDataResults);
      setPhotos(array => [...array, ...imageDataResults]);

    } catch (error) {
      console.error('Error reading file:', error);
    }
    }
    else{
      alert("max 10 please")
    }
  };  
  
  
  const deleteFile = async (index)=>{
    setFiles(files.filter((item,i)=> i!== index ))
    setPhotos(photos.filter((item,i)=> i!== index ))
    




    const postData = new FormData();
        
        postData.append('id', index);
    
        try {
          const response = await fetch('http://localhost/api/post/gallery_delete.php', {
            method: 'POST',
            body: postData,
          });
          if (response.ok) {
            const jsonData = await response.json();
            
          } else {
            console.error('Failed to insert element');
          }
        } catch (error) {
          console.error('Error:', error);
        }
    try{
      
    }catch{

    }
  }

  return (
    <>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-4">

        
        {photos ? photos.map((image,index)=>{
          return (<>
          <div className="border rounded overflow-hidden relative bg-white">
            <span className="absolute top-2 right-2 text-gray-500 bg-gray-100 rounded-full border shadow-md cursor-pointer hover:bg-gray-200" 
            onClick={()=>deleteFile(index)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>


            </span>
            <img src={image} alt="" className='w-full h-full object-cover' />
            {/* {imgFromFile(file)} */}
          </div>
        </>)
        }):''}
        <div className="min-h-48 py-4 border-dashed border-4 rounded bg-gray-100 p-2 flex flex-column gap-3 items-center justify-center"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{ border: dragging ? '2px dashed #555' : '2px dashed #ccc', background: dragging ? 'gainsboro' : 'white'}}

        >
        <label
            htmlFor="forgallery"
            className="rounded-full p-2 hover:shadow-xl shadow-md border cursor-pointer hover:bg-gray-200 "
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

            <input id="forgallery" 
            name="gallery[]" 
            accept='.png, .jpeg, .jpg' type="file" className="sr-only" 
            multiple
            onChange={handleFileChange}
            // onfocus={handlechange}
            />
          </label>
          <div className="span text-center text-sm text-gray-500">
          You can add {(10 - photos.length)} more
          </div>
        </div>
      </div>
    </>


  );
};


const fileToImageData = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      reject(new Error('No file provided'));
    }
  });
};

const DragIcon = ({onFileUpload, defaultImg}) => {
  const [dragging, setDragging] = useState(false);
  const [file,setFile] = useState();
  const [tempImage,setTempImage]= useState(defaultImg)

  useEffect(()=>{
      onFileUpload(file);
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
      className='rounded-full max-w-64 max-h-64 min-w-48 h-48 overflow-hidden relative bg-green-700 '
      style={{ border: dragging ? '2px dashed #555' : '2px dashed #ccc', background: dragging ? 'gainsboro' : ''}}
    >
  
      <img src={tempImage ? tempImage : defaultImg} alt="" className="w-full h-full object-cover bg-gray-100 " style={{filter:"brightness(0.7)"}}/>    
      <div className=" absolute top-12 left-0 right-0 text-center flex flex-wrap align-items-center justify-center" 
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 relative text-gray-100">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>

            <label
            htmlFor="file-upload-icon"
            className="relative cursor-pointer rounded-md font-bold hover:text-green-600"
            >
        <div className="flex text-sm leading-6 text-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>

            <input id="file-upload-icon" 
            name="icon" accept='.png, .jpeg, .jpg' type="file" className="sr-only" 
            onChange={(e) => setFile_function(e.target.files[0])}
            // onfocus={handlechange}
            />

            <span></span>
            <p className="pl-1">ou glisser et déposer</p>
            
        </div>
            </label>
        <p className="text-xs leading-5 text-gray-100">PNG, JPG, GIF up to 10MB</p>
        </div>
    </div>
    {}
    </>


  );
};




const LoadingCard = ({check}) =>{

  return(<>
  <div className="mx-auto w-fit p-6 text-center my-10">
  {check === false ?
  
  <Link to='/panel/dashboard/menu'>
    <p className="">
    
    </p>
  <p className="p-2 text-dashed px-4 text-white bg-green-700 rounded-full">
  Return au menu
  </p>
  </Link>: 
  <SimpleLoader/>
}
  </div>
  </>)
}