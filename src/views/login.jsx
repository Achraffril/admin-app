import { useState } from "react";
import { useAuth } from "../AuthProvider";

const Login = ()=>{
  const [input, setInput] = useState({
    email: "",
    password: "",
  }); 
  const[error,setError] =useState();
  const [password_visibilty,setpassword_visibilty] = useState(false)

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
      setError("Identifiant ou clé d'accès incorrect")
      return;
    }
    // alert("pleae provide a valid input");
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (<>
      <div className="w-screen min-h-screen m-0 flex items-center bg-green-700  sm:px-8 ">
      <div className="lg:w-2/3 mx-auto pt-10 sm:pt-0">
        {/* <div className="header flex justify-end text-gray-100 p-4">
          <div className=""></div>
          <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

          </div>
        </div> */}
        <div className="h-screen sm:h-auto px-8 bg-white dark:bg-white-900  rounded-t-3xl sm:rounded-3xl shadow-3xl ">
          
          <div className="sm:flex gap-3 justify-around items-center">
          <div className=" grow p-10 ">
          <img src="src/login.gif" alt="" className="m-auto bg-transparent rounded-3xl" />
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-3xl lg:text-4xl font-bold text-green-700 tracking-tight dark:text-green-600">
              Connexion au Panneau d'administration
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitEvent}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Identifiant</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 
                      aria-describedby="user-email"
                      aria-invalid="false"
                      onChange={handleInput}
                      required
                      />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Clé d'accès</label>
                      <div className="relative">
                        <input type={password_visibilty ? "text":"password"} name="password" id="password" placeholder="••••••••" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      aria-describedby="user-password"
                      aria-invalid="false"
                      onChange={(e)=> {
                        handleInput(e);
                      }}
                      required
                      />
                      <label htmlFor="password" className="cursor-pointer absolute top-[25%] right-2 text-zinc-800 px-2 z-5" onClick={(e)=> setpassword_visibilty(!password_visibilty)}>
                          {password_visibilty ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            }
                        </label>
                      </div>
                  </div>
                  
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" 
                        aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" 

                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" 
                        className="font-light text-gray-500 dark:text-gray-300">Sauvgarder la connection</label>
                      </div>
                  </div>
                  {error?<div className="bg-red- border-t-0 border-red-500 rounded-b text-red-500 px-4 py-3 " role="alert">
                    <div className="flex items-enter">
                      <div className=""><svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                      <div>
                        {/* <p className="font-bold">Attention</p> */}
                        <p className="text">{error}</p>
                      </div>
                    </div>
                  </div>:""}
                  <button type="submit" 
                  className="w-full text-white bg-green-700 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Se connecter</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  êtes-vous un nouvel administrateur <a 
                  className="font-medium text-green-700 hover:underline dark:text-green-500"
                  data-bs-toggle="offcanvas" href="#signupcanva" role="button" aria-controls="signupcanva"
                  
                >S'inscrire</a>
                  </p>
              </form>
          </div>
          </div>
      </div>
      </div>
      </div>
  <div className="offcanvas offcanvas-top min-h-screen " tabindex="-1" id="signupcanva" aria-labelledby="offcanvasTopLabel">
    <div className="offcanvas-header justify-between">
      <h5 className="offcanvas-title text-2xl font-bold" id="offcanvasTopLabel"></h5>
      <button className="bg-gray-100 text-gray-900 rounded-full p-2"
                      data-bs-dismiss="offcanvas" aria-label="Close"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>

                      </button>

    </div>
    <div className="offcanvas-body ">
      <SignUp /> 
    </div>
  </div>
      

  </>)
}

export const SignUp = ()=>{
  const [passwordValidate,setpasswordValidated] = useState(true)
  const [Error,setError]=useState();
  const [inscription, setInscription] = useState({
    fname:"",
    lname:"",
    email: "",
    password: "",
    confirmed:"",
    tel:"",

  });
  const [password_visibilty,setpassword_visibilty] = useState(false)
  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    
          postData.append('fname', inscription.fname)
          postData.append('lname', inscription.lname)
          postData.append('tel', inscription.tel)
          postData.append('email', inscription.email)
          postData.append('password', inscription.password);
    try {
      const response = await fetch("https://xse.egd.mybluehost.me/api/post/user_add.php", {
        method: "POST",
        body: postData
      });
      const res = await response.json();
      if(res.added){
        // window.location.reload()
        window.location.reload()
        setError("")
        
      }

      else{
        setError(res.message)
      }
    } catch (err) {
      console.error(err);
    }
    
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    if(name==="confirmed"){
      if(value === inscription.password){
        setpasswordValidated(true)
      }
      else{
        setpasswordValidated(false)
      }
    }
    setInscription((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null)

    
  };
  return (<>
  <form className="mx-auto space-y-4 md:space-y-6 w-full sm:w-2/3 lg:w-1/2 relative" onSubmit={handleSubmitEvent}>
    <div className="text-3xl font-semibold text-green-700 text-center">
    S'inscrire en tant qu'administrateur 
    </div>  

                  <div className="flex gap-4">
                  <div className="grow">
                      <label for="fname" className="block mb-2 text-sm font-medium text-gray-900 ">Prénom</label>
                      <input type="fname" name="fname" id="fname" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Votre prénom" 
                      aria-describedby="user-email"
                      aria-invalid="false"
                      onChange={handleInput}
                      autoComplete="given-name webauthn"
                      required
                      />
                  </div>
                  <div className="grow">
                      <label for="lname" className="block mb-2 text-sm font-medium text-gray-900 ">Nom</label>
                      <input type="lname" name="lname" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Votre nom" 
                      aria-describedby="user-lname"
                      aria-invalid="false"
                      autoComplete="family-name webauthn"
                      onChange={handleInput}
                      required
                      />
                  </div>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@email.com" 
                      aria-describedby="user-email"
                      aria-invalid="false"
                      autoComplete="email webauthn"
                      onChange={handleInput}
                      required
                      />
                  </div>
                  <div>
                      <label for="tel" className="block mb-2 text-sm font-medium text-gray-900 ">Téléphone</label>
                      <input type="tel" name="tel" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="06..." 
                      aria-describedby="user-tel"
                      autoComplete="tel"
                      aria-invalid="false"
                      onChange={handleInput}
                      required
                      />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Mot de passe</label>
                      <div className="relative">
                      <input type={password_visibilty?"text":"password"} name="password" id="password" placeholder="••••••••" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      aria-describedby="user-password"
                      aria-invalid="false"
                      autoComplete="new-password webauthn"
                      onChange={handleInput}
                      required
                      />
                        <label htmlFor="password" className="cursor-pointer absolute top-[25%] right-2 px-2" onClick={(e)=> setpassword_visibilty(!password_visibilty)}>
                          {password_visibilty ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            }
                        </label>
                      </div>

                  </div>
                  <div>
                      <label for="confirmed" className="block mb-2 text-sm font-medium text-gray-900 ">Confirmer le mot de passe</label>
                      <input type={password_visibilty?"text":"password"} name="confirmed" id="confirmed" placeholder="••••••••" 
                      className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"+ ""} 
                      onChange={handleInput}
                      autoComplete="new-password webauthn"
                      required
                      />
                      
                  </div> 
                  {passwordValidate ? ""
                      :
                      <p className="text-red-500 flex gap-1 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
Les mots de passe ne correspondent pas.
                      </p>
                      } 
                  
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input 
                        id="terms" 
                        aria-describedby="terms" 
                        type="checkbox" 
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus-ring-3" 
                        
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" 
                        className="font-light text-gray-500 dark:text-gray-300">Sauvgarder le mot de passe</label>
                      </div>
                  </div>
                  {Error?<div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 " role="alert">
                    <div className="flex">
                      <div className="py-1"><svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                      <div>
                        <p className="font-bold">Attention</p>
                        <p className="text-sm">{Error}</p>
                      </div>
                    </div>
                  </div>:""}

                  <button type="submit" 
                  className="w-full text-white bg-green-700 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Envoyer la demande d'inscription</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  j'ai déja un compte <a 
                  className="font-medium text-green-700 hover:underline dark:text-green-500"
                  data-bs-dismiss="offcanvas" aria-label="Close" role="button" aria-controls="offcanvasExample"
                  >Se connetcer</a>
                  </p>
    </form>

    
  </>)
}



export default Login;