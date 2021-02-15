import React from 'react';
/* Template */
import Main from '../components/Main';
/* Organisms */
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
/* Molesules */
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
/*  Hooks, Important this work with Experience only */
import useGetData from '../hooks/useGetData';


const Home = () => {

  const data = useGetData();
  console.log(data);

  return (
    <>
{/*           <About />  */}
{/*          <Education /> */}
{/*          <Experience 
          data={ data }
        />  */}
        <Certificates />
    </>
  );
};

export default Home;