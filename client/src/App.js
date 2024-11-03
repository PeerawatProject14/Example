import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InputForm from './components/InputForm'; // นำเข้า InputForm Component
import About from './components/About'; // นำเข้า About Component
import NavBar from './components/NavBar'; // นำเข้า NavBar Component
import { DataProvider } from './components/DataContext'; // นำเข้า DataProvider สำหรับจัดการ context
import DataFetch from './components/TestFetch'; // นำเข้า DataFetch Component

function App() {
    return (
        <DataProvider> {/* ใช้ DataProvider เพื่อจัดการ context */}
            <NavBar /> {/* แสดง NavBar */}
            <Routes> {/* กำหนดเส้นทางการนำทาง */}
                <Route path="/" element={<InputForm />} /> {/* เส้นทางหลักไปที่ InputForm */}
                <Route path="/about" element={<About />} /> {/* เส้นทางไปที่ About */}
                <Route path="/data-fetch" element={<DataFetch />} /> {/* เส้นทางไปที่ DataFetch */}
            </Routes>
        </DataProvider>
    );
}

export default App; // ส่งออก Component App
