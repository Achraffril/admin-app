import { Link, Outlet } from "react-router-dom"
import { useAuth } from "../AuthProvider";
import { useEffect, useState } from "react";
import { getProfile } from "../functions";
import React from 'react';
import { Offline, Online } from "react-detect-offline";


const  DefaultLayout = () =>{
    
    return (
        <>
        <Header></Header>
        <Aside> </Aside>
        <main className="p-4 overflow-" id="main">
        <Outlet />
        </main>
        </>
    )
}
export default DefaultLayout;




const Header =()=>{
    const auth = useAuth();

    return (<>

    <header className="bg-white fixed top-0 left-0 right-0 z-10">
    <div className="bg- dark:bg-zinc-900/95 p-3 shadow-sm justify-between flex items-center ">
        <div className="items-center flex gap-2 ">
                <div className="">
                <h3 className="text-green-700 dark:text-zinc-100 m-0 p-0">
                <span className="m-0 bg-green-700 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800 rounded-full p-1 px-3 font-bold">RA</span> 
                <span className="mobiled"> Panel</span></h3>
                </div>

            <div className="">
                <Offline>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m3 3 8.735 8.735m0 0a.374.374 0 1 1 .53.53m-.53-.53.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 0 1 0 5.304m2.121-7.425a6.75 6.75 0 0 1 0 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 0 1-1.06-2.122m-1.061 4.243a6.75 6.75 0 0 1-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12Z" />
                    </svg>

                </Offline>
             
            </div>
        </div>
        <div className="w">
            <div className="dropdown ">
                <button className="flex items-center text-green-700 max-w-48 gap-2 dark:text-zinc-100 text-green-700" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="font-semibold truncate ">
                        {/* {localStorage.getItem('email')? localStorage.getItem('email') : "Profile"}  */}
                        </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9  ">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                    </svg>

                </button>
                <ul className="dropdown-menu" id="downed" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <Link to="/panel/dashboard/profile">
                            <a className="p-3 flex gap-1 hover:bg-zinc-200" href="profile.php">
                            <div className="icon ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            </div>
                            <span>
                            Profile
                            </span></a>
                        </Link>
                    </li>
                    <li>
                    
                    </li> 
                    <li>
                        <a className="p-3 flex gap-1 hover:bg-zinc-200" onClick={() => auth.logOut()}>
                        <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                    </svg>

                        </div>
                    <span>déconnecter</span> ​​​</a></li>
                </ul>
            </div>
        </div>
</div>
</header>
    </>)
}
const Aside = ()=>{
    const auth = useAuth();
    return (
        <>
        <aside id="side" className="fixed bg-green-800 p-2 text-gray-200 bottom-0 left-0 z-10">
            <div className="top">
                <ul className="p-0 m-0">
                    <Link to="/panel/dashboard">
                    <li key="dashboard" className="nav-link active rounded-sm p-3 hover:bg-green-900 p-2">
                        <a href="dashboard.php" className="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clip-rule="evenodd" />
                                </svg>

                        </div>
                        <div className="link mobiled">Dashboard</div>
                        </a>
                    </li>
                    </Link>
                    <Link to='/panel/dashboard/menu'>
                    <li key="menu" className="rounded-sm p-3 hover:bg-green-900 p-2">
                        <a href="menu.php" className="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                                </svg>



                        </div>
                        <div className="link mobiled">Menu</div>
                        </a>
                    </li>
                    </Link>
                    <Link to="/panel/dashboard/classes">
                    <li key="classes" className="rounded-sm p-3 hover:bg-green-900 p-2">
                        <a href="classes.php" className="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div className="icon">
                                                
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                                </svg>

                            </div>
                        <div className="link mobiled ">Classes & Categories</div>
                        </a>
                    </li>
                    </Link>
                    
                    
                    <Link to="/panel/dashboard/gallery">
                    <li key="classes" className="rounded-sm p-3 hover:bg-green-900 p-2">
                        <a href="classes.php" className="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div className="icon">
                                                
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                        </svg>



                            </div>
                        <div className="link mobiled ">Gallery</div>
                        </a>
                    </li>
                    </Link>
                    <Link to='/panel/dashboard/settings'>
                    <li key="classes" className="rounded-sm p-3 hover:bg-green-900 p-2">
                        <a href="classes.php" className="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div className="icon">
                                                
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
                            </svg>



                            </div>
                        <div className="link mobiled ">Preferences</div>
                        </a>
                    </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div className="flex">
                    <ul className="m-0 p-0">
                    <li key="" className="rounded-sm p-3 p-2">
                        
                        <a  className="d-flex flex gap-4 text-gray-100 no-underline hover:text-white" onClick={() => auth.logOut()}>
                        <div className="icon">
                                                
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                            </svg>



                            </div>
                        <div className="link mobiled">Se déconnecter </div>
                        </a>
                        
                    </li>
                    </ul>
                </div>
            </div>
</aside>
        </>
    )
}