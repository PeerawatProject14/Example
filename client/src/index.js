import React from 'react'; // นำเข้า React
import ReactDOM from 'react-dom'; // นำเข้า ReactDOM สำหรับการเรนเดอร์
import App from './App'; // นำเข้า App Component
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า CSS ของ Bootstrap
import { BrowserRouter } from 'react-router-dom'; // นำเข้า BrowserRouter สำหรับการจัดการ routing

ReactDOM.render(
    <React.StrictMode> {/* ใช้ StrictMode เพื่อช่วยตรวจสอบปัญหาต่างๆ ในการพัฒนา */}
        <BrowserRouter> {/* ใช้ BrowserRouter เพื่อรองรับการนำทาง */}
            <App /> {/* เรียกใช้ App Component */}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root') // ระบุ element ที่จะเรนเดอร์
);
