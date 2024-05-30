import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './AuthRoute';
import Dashboard from './views/dashboard';
import Login, { SignUp } from './views/login';
import AuthProvider from './AuthProvider';
import DefaultLayout from './layouts/defaultLayout';
import MenuView, { AddDish } from './views/menu-panel';
import NotFound from './views/notfound';
import Profile from './views/profile';
import UpdateClass from './views/class-update';
import ClassesView from './views/class-panel';
import CrudLayout from './layouts/crudlayout';
import Gallery from './views/gallery';
import Update_From_Menu from './views/menu-update';
import Settings from './views/settings';
import FormTest from './views/testFOrm';
import InsertClass from './views/class-insert';
import Example from './api';
import AdminPage from './api';

function App() {
  const [classes,setClasses] = useState()
  const [menu,setMenu] = useState()
  const [gallery,setGallery] = useState()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://xse.egd.mybluehost.me/api/get/classes.php');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setClasses(jsonData)
            
            } catch (error) {
            // console.log(error)
          }
          try {
            const response = await fetch('https://xse.egd.mybluehost.me/api/get/plats.php');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setMenu(jsonData)
            
            } catch (error) {
            // console.log(error)
          }
          try {
            const response = await fetch('https://xse.egd.mybluehost.me/api/get/photos.php');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setGallery(jsonData)
            } catch (error) {
            // console.log(error)
          }
          
        };
    
        fetchData();



      }, []);
  return (
    <>
<div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            
            {/* level 1 */}
            <Route element={<PrivateRoute/>}>
                <Route path="/panel/dashboard">

                      <Route element={<DefaultLayout />}>
        
                          <Route index element={<Dashboard />}/>
        
                          <Route path='menu' element={<MenuView classes={classes} getMenu={menu}/>} />
        
                          <Route path='classes' element={<ClassesView classes={classes}/>}/>


                          <Route path='profile' element={<Profile />} />

                          <Route path='gallery' element={<Gallery classes={classes} gallery={gallery}/>} />

                          <Route path='settings' element={<Settings />} />

                      </Route>
                      <Route element={<CrudLayout />}>
                          
                          <Route path="update/menu/:id" element={<Update_From_Menu classes={classes} menu={menu} photos={gallery}/>} />
                          
                          <Route path="insert/menu" element={<AddDish classes={classes}/>} />
                          
                          <Route path="update/class/:id" element={<UpdateClass classes={classes}/>}  />
                          
                          <Route path="insert/class" element={<InsertClass />} />
                      
                      </Route>

                </Route>
                <Route path="/panel/admin" element={<AdminPage/>} />
            </Route>
            
            <Route path="/panel/" element={<Navigate to="/panel/dashboard" />}/>
            <Route path="/panel/login" element={<Login />}/>
            <Route path="/panel/inscription" element={<SignUp />}/>
                



            <Route path="" element={<Navigate to="/panel/dashboard" />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </AuthProvider>
      </Router>
    </div>
    </>
    );
}

export default App;
