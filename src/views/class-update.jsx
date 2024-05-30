import React,{useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import { SimpleLoader } from '../componenets/loading';

const UpdateClass = ({classes}) =>{
    const {id} = useParams();
    const [classe,setClasse] = useState();
    const [formData,setFormData] = useState()
    const [updated,setUpdated] = useState();
    useEffect(() => {
        if (classes) {
            const getClasse = classes.filter((item) => item.class_id === parseInt(id));
            setClasse(getClasse.length > 0 ? getClasse[0] : null);
            setFormData(getClasse.length > 0 ? getClasse[0] : null)
            console.log(getClasse)

        }
    }, [id, classes]);



    const handleSubmit = async (e)=>{
        e.preventDefault()
          const postData = new FormData();
          postData.append('class_id',formData.class_id)
          postData.append('title', formData.title);
          postData.append('description', formData.description);
          postData.append('icon', formData.icon);
          console.log(formData)   
          try {
            const response = await fetch('https://xse.egd.mybluehost.me/api/post/class_update.php', {
              method: 'POST',
              body: postData,
            });
            if (response.ok) {
              const jsonData = await response.json();
              if(jsonData.transation){
                window.location.reload()
              }
              
            } else {
              console.error('Failed to insert element');
            }
          } catch (error) {
            console.error('Error:', error);
          }
  
    }
    const  handleChange_forUpdate = (event)=>{
        setUpdated(true) 
      const { name, value } = event.target;
      console.log(name,value)
      
      
      setFormData({
        ...formData,
        [name]: value
      });
      
    }


    const goBack = ()=>{
        window.history.back();
    }
    return (<>
        {formData ? 
        <div className="m-auto bg-gray-100 p-4 rounded-3xl dark:bg-zinc-900 dark:text-zinc-100" >
        <div className="flex flex-wrap align-items-center justify-center row-gap-5 ">
            <div className="max-w-64 min-w-48 basis-1/3 relative overflow-hidden">
                <img src={formData.icon} alt="" className='m-auto w-48 h-48 shadow rounded-full object-cover' />
            <div className="text-gray-800 text-center p-2 text-top">
               {/* <button type='button' className="text-xl font-semibold">Changer</button> */}

            </div>
            </div>
            <div className="modal-content  basis-2/3 grow p-4">
            <div className="modal-header">
                <h5 className="modal-title h2 text-green-800 dark:text-green-500 text-center" id="staticBackdropLabel">Mettre a jour classe de {classe.title}</h5>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="modal-body row g-3">
                    <div className="col-md-12 mt-3">
                        <label for="inputtitle4" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-100">Titre</label>
                        <input type="text" className="form-control border-none bg-zinc-200 dark:bg-zinc-800 placeholder:text-zinc-100 text-zinc-500 focus:dark:bg-zinc-100" id="inputtitle4" name="title" 
                        value={formData.title} 
                        onChange={handleChange_forUpdate}
                        required
                        
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <label for="inputDescription" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-100
                        ">Description</label>
                        <textarea type="text" className="form-control border-none bg-zinc-200 dark:bg-zinc-800 placeholder:text-zinc-100 text-zinc-500 focus:dark:bg-zinc-100" id="inputDescription" name="description" placeholder="" 
                        value={formData.description}
                        onChange={handleChange_forUpdate}
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <label for="inputIcon" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-100" >Image url</label>
                        <div className="input-group mb-3">
                            <button className="btn bg-zinc-800 text-white hover:bg-zinc-700 hidden" type="button" id="button-addon1">Ou fichier</button>
                            <input 
                            id='inputIcon'
                            type="text" name="icon" 
                            className="form-control border-none bg-zinc-200 dark:bg-zinc-800 placeholder:text-zinc-100 text-zinc-500 focus:dark:bg-zinc-100" 
                            placeholder="" aria-label="Example text with button addon" 
                            aria-describedby="button-addon1" 
                            value={formData.icon} 
                            onChange={handleChange_forUpdate}

                            />
                            </div>
                    </div>
  
                    
                    
                   
                </div>
                <div className="flex justify-around gap-2">
                    <button type="button" className="p-2 px-4 rounded text-green-800 font-bold hover:bg-gray-200 dark:text-green-600" onClick={goBack}>Annuler </button>
                    { updated ? 
                    <button type="submit" className="grow p-2 px-4 rounded bg-green-800 text-white font-semibold hover:bg-green-700 dark:bg-green-600 " >Mettre a jour</button>
                    :
                    <button type="button" className="grow p-2 px-4 rounded bg-green-800 text-white font-semibold hover:bg-green-700 dark:bg-green-600 disabled opacity-75 " title='You have to make some changes' disabled >Mettre a jour</button>}
                </div>
            </form>
            </div>
        </div>
        
    </div>
    :
      <div className="mx-auto w-fit"><SimpleLoader /></div>
}


    </>)
}
export default UpdateClass;
