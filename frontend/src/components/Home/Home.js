import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Contactus from '../Contact/Contactus';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import axios from 'axios';



function Home(props) {
    
  
  
  return (
    <div>
      
      <Header />
      <Banner />
      <Form />
      <Contactus />
      <Footer />
    </div>
  );
}

export default Home;

