
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeUser } from './GUI/User/Pages/HomeUser';
import Header from './GUI/User/Components/Header';
import { Footer } from './GUI/User/Components/Footer';
import { Detail } from './GUI/User/Pages/Detail';
import { Category } from './GUI/User/Pages/Category';
import { MainDashBoard } from './GUI/Admin/Layouts/MainDashBoard';
import ParentRoute from './Routes/ParentRoute';

function App() {
  return (
    // This is for users
    // <Router  >
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<HomeUser />} />
    //     <Route path="/detail" element={<Detail />} />
    //     <Route path="/cate" element={<Category />} />
    //     {/* Add more Route components as needed */}
    //   </Routes>
    //   <Footer />
    // </Router >
    <ParentRoute />

    // This is for admin
    // <MainDashBoard />
  );
}



export default App;
