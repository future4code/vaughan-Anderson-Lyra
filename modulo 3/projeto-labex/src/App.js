import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApplicationFormPage } from './Pages/ApplicationFormPage';
//import { AdminHomePage } from './Pages/AdminHomePage';
//import { ApplicationFormPage } from './Pages/ApplicationFormPage';
//import { CreateTripPage } from './Pages/CreateTripPage';
import { HomePage } from './Pages/HomePage';
import { ListTripPage } from './Pages/ListTripPage';
import { LoginPage } from './Pages/LoginPage';
//import { LoginPage } from './Pages/LoginPage';
//import { TripDetailsPage } from './Pages/TripDetailsPage';



export default function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<HomePage />}>  </Route>
        <Route exact path='/trips/list' element={<ListTripPage />}> </Route>
        <Route exact path='/trips/application' element={<ApplicationFormPage />}> </Route>
        <Route exact path='/login' element={<LoginPage />}> </Route>
      </Routes>
    </BrowserRouter>
  );

}
console.log()


