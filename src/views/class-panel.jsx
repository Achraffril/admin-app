import { Link } from "react-router-dom";
import InsertClass from "./class-insert";
import { ClassesLoader, SimpleLoader } from "../componenets/loading";

const ClassesView = ({classes}) =>{
    return (
        <>
        <section className="w-100 w-full">
        <div className="">
          <div className="mx-auto text-gray-700 dark:text-gray-100">
          <h2 className="font-semibold h2 text-gray-700 dark:text-gray-100 mb-3">Les Classes & les catgeories</h2>
            <p>Veuillez noter que supprimer une classe entraînera également la suppression de tous les plats qui lui sont associés. Cette mesure vise à maintenir la cohérence de notre système.</p>
            <div className="flex justify-between  items-center mt-5">
              
              {/* <div className="">
              <div className="">
                        <div className="input-group ">
                        <input 
                         type="text" name='search' className="form-control  focus:outline-none focus:ring-0 focus:ring-blue-100 focus:border-transparent " 
                         placeholder="Boissons..." aria-label="search" aria-describedby="basic-addon1" />
                        <button className="input-group-text bg-white border"  id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        </div>
                </div>
              </div> */}
              <button className="bg-green-800 text-white p-4 py-2 rounded flex gap-2 align-items-center grow sm:max-w-fit" 
              type="button" data-bs-toggle="modal" data-bs-target="#classCanva"
              
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                </svg>

                <span className="">
                Ajouter une classe
                </span>
              </button> 
            </div>

            <div className="modal fade w-screen h-screen" id="classCanva" tabindex="-1" aria-labelledby="classCanvaLabel" aria-hidden="true">
              <div className="modal-dialog w-screen h-screen m-0 my-auto relative ">
                <div className="modal-content w-screen h-screen sm:p-10 bg-transparent">
                  
                  <div className="modal-body ">
                    <div className="header flex absolute top-10 right-10">
                      <button className="bg-gray-100 text-gray-900 rounded-full p-2"
                      data-bs-dismiss="modal"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>

                      </button>
                    </div>
                    <InsertClass />
                  </div>
                  
                </div>
              </div>
            </div>


            <div className="space-y-18 lg:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:space-y-0  w-100 w-full">
              
                          {/* map */}
                          {classes ? classes.map((item)=>{
                            return (<>
                            <div className="bg-white group relative mt-5  shadow rounded-2xl">
                              <div className="p-4  bg- dark:bg-zinc-800">
                         
                                    <p className="text-end " title="Nombre total des élèments " ><span className="bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 rounded-full px-3">{item.size} </span></p>

                                    <div className="relative  w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 ">
                                        <img src={item.icon} className="w-48 h-48 m-auto object-cover object-center rounded-full dark:bg-zinc-700/25 bg-zinc-200" />
                                    </div>
                                    <h3 className="text-center text-lg font-semibold p-3 uppercase">
                                    {item.title}
                                    </h3>
                                    <Link to={`/panel/dashboard/update/class/${item.class_id}`}>
                                    <button type="button" className="px-3 p-2 mx-auto font-bold hover:bg-green-700 bg-green-800 dark:bg-green-600 text-zinc-100  w-1/2 flex justify-between rounded-3xl" >
                                    Editer <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>

                                    </button>
                                    </Link>

           
                              </div>
                            </div>
                            </>)
                          })
                          
                        : <ClassesLoader/>}
                        

                      </div>
          </div>
        </div>
        </section>
        <div className="bg-white shadow my-5  rounded-2xl">
        <section className="p-4 dark:bg-zinc-800 dark:text-gray-200 ">
            <div className="overflow-scroll max-w-fit ">
            <p className="text-red-500">Cette fonctionnalité n'est pas disponible pour le moment.</p>
          <h1 className="text-green-700 text-2xl font-bold flex items-center gap-2 my-3">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
            </svg></span>
            <span> Attention avant de supprimer une classe!</span></h1>
            <p className="ms-4 pl-4 ">
          Si vous supprimez une classe, tous les plats associés à cette classe seront également supprimés. Pour éviter cela, veuillez suivre ces étapes avant de supprimer une classe:
          </p>
          <ol className="list-decimal p-4 px-8 ms-4">
            <li>
              <span className="font-semibold">Sélectionnez une nouvelle classe: </span>
              <span> Choisissez une classe existante ou créez une nouvelle classe dans laquelle vous souhaitez transférer les plats de la classe que vous souhaitez supprimer.</span>
            </li>
            <br />
            <li>
              <span className="font-semibold">Assignez les plats à la nouvelle classe:  </span>
              <span> 
              Pour chaque plat de la classe que vous souhaitez supprimer, modifiez-le et sélectionnez la nouvelle classe que vous avez choisie à l'étape 1. Vous pouvez modifier plusieurs plats en même temps en utilisant la fonction de sélection multiple.
                </span>
            </li>
            <br />
            <li>
              <span className="font-semibold">Vérifiez que tous les plats ont été transférés: </span>
              <span> 
              Assurez-vous qu'aucun plat n'est resté dans la classe que vous souhaitez supprimer. Vous pouvez utiliser un filtre ou une recherche pour vérifier tous les plats de la classe.
                </span>
            </li>
            <br />
            <li>
              <span className="font-semibold">Supprimez la classe en toute sécurité:</span>
              <span> 
              Une fois que tous les plats ont été transférés vers une autre classe, vous pouvez supprimer la classe en toute sécurité.
                </span>
            </li>
            <br />
          </ol>
            </div>
        </section>
        </div>
</>
    )

}
export default ClassesView;