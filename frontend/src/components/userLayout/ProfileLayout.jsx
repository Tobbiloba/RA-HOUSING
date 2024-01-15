import React from 'react';
import Sidebar from './Sidebar';
import Footer from '../home/Footer';

const ProfileLayout = ({children}) => {
  return (
    <div className='flex flex-col justify-center bg-slate-50 py-12'>

      <div className='container my-12 flex flex-col lg:flex-row gap-12'>
        <Sidebar />

        <div className='w-[100%]'>
          {children}
        </div>

        
      
      </div>
      <Footer />
    </div>
  );
}

export default ProfileLayout;
