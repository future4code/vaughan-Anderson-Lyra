import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AdminHomePage } from './Paginas/AdminHomePage';
import { ApplicationFormPage } from './Paginas/ApplicationFormPage';
import { CreateTripPage } from './Paginas/CreateTripPage';
import { HomePage } from './Paginas/HomePage';
import { ListTripPage } from './Paginas/ListTripPage';
import { LoginPage } from './Paginas/LoginPage';
import { TripDetailsPage } from './Paginas/TripDetailsPage';







export default function App() {
  return (

    <BrowserRouter>
    <Switch>
    
    
      <HomePage/>
      <ListTripPage/>
      <AdminHomePage/>
      <ApplicationFormPage/>
      <CreateTripPage/>
      <LoginPage/>
      <TripDetailsPage/>
    
    
    </Switch>
    </BrowserRouter>
  );
}


