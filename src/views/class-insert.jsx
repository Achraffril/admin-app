import { useEffect, useState } from "react";

const InsertClass = ()=>{
    const [formData,setFormData] = useState({
        title:"",
        description:"",
        icon:"https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
    })
    const [updated,setUpdated] = useState();
    useEffect(() => {
    });



    const handleSubmit = async (e)=>{
        e.preventDefault()
          const postData = new FormData();
          postData.append('title', formData.title);
          postData.append('description', formData.description);
          postData.append('icon', formData.icon);
          try {
            const response = await fetch('https://xse.egd.mybluehost.me/api/post/class_insert.php', {
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
      
      
      setFormData({
        ...formData,
        [name]: value
      });
      
    }


    const goBack = ()=>{
        window.history.back();
    }
    return (<>

    <div className="m-auto bg-white p-4 rounded-3xl " >
        <div className="flex flex-wrap align-items-center justify-center row-gap-5 ">
            <div className="max-w-64 min-w-48 basis-1/3 relative overflow-hidden">
                <img src={formData.icon} alt="" className='m-auto w-48 h-48 rounded-full object-cover' />
            <div className="text-gray-800 text-center p-2 text-top">
               {/* <button type='button' className="text-xl font-semibold">Changer</button> */}

            </div>
            </div>
            <div className=" basis-2/3 grow p-4">
            <div className="modal-header">
                <h5 className="modal-title h2 text-green-800 text-center" id="staticBackdropLabel">Ajouter un neuvou classe </h5>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="modal-body row g-3">
                    <div className="col-md-12 mt-3">
                        <label for="inputtitle4" className="block text-sm font-semibold leading-6 text-gray-900">Titre 
                        <span className="text-red-600"> * </span>
                        </label>
                        <input type="text" className="form-control bg-gray-100" id="inputtitle4" name="title" 
                        value={formData.title} 
                        onChange={handleChange_forUpdate}
                        required
                        
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <label for="inputDescription" className="block text-sm font-semibold leading-6 text-gray-900">Description 
                        <span className="text-red-600"> * </span>
                        </label>
                        <textarea type="text" className="form-control bg-gray-100" id="inputDescription" name="description" placeholder="" 
                        value={formData.description}
                        onChange={handleChange_forUpdate}
                        required
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <label for="inputIcon" className="block text-sm font-semibold leading-6 text-gray-900" >Image url 
                        <span className="text-red-600"> * </span>
                        </label>
                        <div className="input-group mb-3">
                            <button className="btn bg-zinc-800 text-white hover:bg-zinc-700 hidden" type="button" id="button-addon1">Ou fichier</button>
                            <input 
                            id='inputIcon'
                            type="text" name="icon" 
                            className="form-control bg-gray-100" 
                            placeholder="" aria-label="Example text with button addon" 
                            aria-describedby="button-addon1" 
                            value={formData.icon} 
                            onChange={handleChange_forUpdate}
                            required

                            />
                            </div>
                    </div>
  
                    
                    
                   
                </div>
                <div className="flex justify-center gap-2">
                    <button type="button" className="p-2 px-4 rounded text-green-800 font-bold hover:bg-gray-200" data-bs-dismiss="modal">Annuler </button>
                    { updated ? 
                    <button type="submit" className="grow max-w-64 p-2 px-4 rounded bg-green-800 text-white font-semibold hover:bg-green-700 " >Ajouter </button>
                    :
                    <button type="button" className="grow max-w-64 p-2 px-4 rounded bg-green-800 text-white font-semibold hover:bg-green-700 disabled opacity-75 " title='You have to make some changes' disabled >Ajouter </button>}
                </div>
            </form>
            </div>
        </div>
        
    </div>
    </>)
}
export default InsertClass;