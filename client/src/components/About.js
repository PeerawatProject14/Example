import React, { useContext } from 'react'; // นำเข้า React และ useContext hook
import { DataContext } from './DataContext'; // ใช้ context
import './About.css'; // นำเข้า CSS สำหรับ About

const About = () => {
    const { formData } = useContext(DataContext); // ใช้ context เพื่อดึงข้อมูล formData

    return (
        <div className="about p-3 border rounded shadow"> {/* สร้างส่วนเกี่ยวกับข้อมูล */}
            <h2>ข้อมูลที่กรอก</h2> {/* หัวข้อ */}
            <p>ชื่อ: <strong>{formData.name || 'ไม่ระบุ'}</strong></p> {/* แสดงชื่อ */}
            <p>นามสกุล: <strong>{formData.surname || 'ไม่ระบุ'}</strong></p> {/* แสดงนามสกุล */}
            <p>เพศ: <strong>{formData.gender || 'ไม่ระบุ'}</strong></p> {/* แสดงเพศ */}
            <p>รูปภาพ: <strong>{formData.image ? formData.image.name : 'ไม่ระบุ'}</strong></p> {/* แสดงชื่อไฟล์รูปภาพ */}
        </div>
    );
};

export default About; // ส่งออก Component About
