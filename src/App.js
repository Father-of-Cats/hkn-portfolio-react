import React, { useState } from 'react';
import './App.css'
import Display from './components/Display';
import Header from './components/Header'
import Footer from './components/Footer'
import { GoPerson,GoMail,GoFile,GoBriefcase } from 'react-icons/go'



function App() {
  const [categories] = useState([
    {
      name: ' About',
      icon: <GoPerson/>
    },
    {
      name: ' Contact',
      icon: <GoMail/>
    },
    { name: ' Projects',
      icon: <GoFile/>  
    },
    {
      name: ' Resume',
      icon: <GoBriefcase/>
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
    <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}/>
    <Display/>
    <Footer/>
    </div>
  );
}

export default App;
