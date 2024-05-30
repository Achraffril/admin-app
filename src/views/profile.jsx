import { useEffect, useState } from "react";

const Profile  = () =>{
    const [User,setUser]=useState({
      photo : "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=",
      id:1234,
      nom:"nom",
      prenom:"prenom",
      tel:"0123456789",
      email:'user@exemple.com',
      role:'admin'

    });
    useEffect(()=>{
        const fetchData = async ()=>{
            const postData = new FormData();
            if (localStorage.getItem('site')) {
                postData.append('email',localStorage.getItem('site'))
            }
        

            try {
            const response = await fetch("https://xse.egd.mybluehost.me/api/get/user.php", {
                method: "POST",
                body: postData
            });
            const res = await response.json();
            // setUser(res)
            console.log(res)

            
            } catch (err) {
            console.error(err);
            }

        }
        fetchData();
    })
    return (<>
    
<div className="h1 dark:text-green-600 ">Hi {User ? User.prenom :"user"}, Bienvenue sur votre profil</div>
    <p>Ces informations sont confidentielles. Veuillez en user avec prudence</p>
    <section className="">

<div className="h-full dark:text-zinc-500">
 
  <div className="-b-2 block md:flex md:gap-0 gap-2">

    <div className="w-full md:w-2/5  bg-white shadow-md rounded-3xl mt-3">
      

       <div className="p-4 sm:p-6 lg:p-8 dark:bg-zinc-800 rounded-2xl">
       <div className="w-full p-8 flex justify-center ">
            <img id="showImage" className="h-32 w-32 object-cover items-center  rounded-full" src={User.photo} alt="" />                          
        </div>
        <div className="text-2xl text-center font-semibold dark:text-zinc-100">{User.role}</div>
        <p className="py-3 text-center text-zinc-500">Vous pouvez gérer toutes les fonctionnalités.</p>
        <div className="flex justify-center  ">
            <button className="-mt-2 text-md font-bold  rounded-full px-5 py-2 cursor-pointer bg-zinc-800 hover:bg-zinc-700 dark:bg-green-700 hover:dark:bg-green-800 text-zinc-100" type="button" data-bs-toggle="modal" data-bs-target="#profileModal">Modifier</button>
        </div>
       </div>

    </div>
    
    <div className="w-full md:w-3/5  bg-white lg:ml-4 shadow-md rounded-3xl mt-3">
      <div className="p-8 dark:bg-zinc-800 rounded-2xl">
      <div className="">
        <div className="pb-6">
          <label for="name" className="font-semibold text-gray-700 dark:text-green-700 block pb-1">Nom Complete</label>
          <div className="flex">
            <input disabled id="username" className="capitalize  rounded-r py-2 w-full bg-transparent" type="text" value={User ? `${User.nom} ${User.prenom}` :""} />
          </div>
        </div>
        <div className="pb-4">
          <label  className="font-semibold text-gray-700 dark:text-green-700 block pb-1">Email</label>
          <input disabled id="" className=" rounded-r py-2 w-full bg-transparent" type="email" value={User ? User.email:""}  />
        </div>
        <div className="pb-4">
          <label  className="font-semibold text-gray-700 dark:text-green-700 block pb-1">Téléphone</label>
          <input disabled id="" className=" rounded-r py-2 w-full bg-transparent" type="tel" value={User ? User.tel:""}  />
        </div>
      </div>
      </div>
    </div>

  </div>
 
</div>
    </section>
    <section className="my-5">
        <div className="bg-white rounded-3xl">
        <div className="dark:bg-zinc-800 p-4 py-5 shadow-md rounded-2xl dark:text-zinc-500">
            <div className="text-2xl mb-3  font-semibold text-green-700 dark:text-zinc-100">Confidentialité et sécurité</div>
        </div>
        </div>
    </section>
    <div className="">
    <div className="modal fade" id="profileModal" tabindex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
            <div className="modal-content dark:bg-zinc-900">
            <div className="modal-header border-none">
            <div className="flex items-end justify-end ms-auto">
                      <button className="bg-gray-100 text-gray-900 rounded-full p-2"
                      data-bs-dismiss="modal"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>

                      </button>
                    </div>
            </div>
            <div className="modal-body ">
                <UpdateProfile />
            </div>
            </div>
        </div>
    </div>
    </div>
    </>)
}
export default Profile ;

export const UpdateProfile = ()=>{
    return (<>
        <section className="pb-5 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20 m-auto my-4 text-center ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>

        <h1 className="text-center">
        Cette fonctionnalité n'est pas encore disponible. Nous nous excusons pour le désagrément.
        </h1>
        </section>
    </>)
}