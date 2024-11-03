import React, { useContext } from 'react'; // นำเข้า React และ useContext hook
import { Link } from 'react-router-dom'; // นำเข้า Link สำหรับการนำทาง
import { DataContext } from './DataContext'; // ใช้ context
import './NavBar.css'; // นำเข้า CSS สำหรับ NavBar

const NavBar = () => {
    const { formData } = useContext(DataContext); // ใช้ context เพื่อดึงข้อมูล formData

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3"> {/* สร้าง Navbar */}
            <Link className="navbar-brand" to="/">MyApp</Link> {/* ลิงก์ไปยังหน้าแรก */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> {/* ไอคอนสำหรับแสดงปุ่มนำทาง */}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto"> {/* สร้างเมนูนำทาง */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link> {/* ลิงก์ไปที่หน้า Home */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link> {/* ลิงก์ไปที่หน้า About */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/data-fetch">Data Fetch</Link> {/* ลิงก์ไปที่หน้า Data Fetch */}
                    </li>
                </ul>
                <span className="navbar-text">
                    {formData.name && formData.surname ? `${formData.name} ${formData.surname}` : 'Guest'} {/* แสดงชื่อผู้ใช้ */}
                </span>
            </div>
        </nav>
    );
};

export default NavBar; // ส่งออก Component NavBar
