import React, { useContext, useState, useEffect } from 'react'; // นำเข้า React, useContext, useState, useEffect
import { DataContext } from './DataContext'; // ใช้ context
import './InputForm.css'; // นำเข้า CSS สำหรับ InputForm

const InputForm = () => {
    const { setFormData } = useContext(DataContext); // ใช้ context เพื่อดึง setFormData
    const [localFormData, setLocalFormData] = useState({ // สร้าง state สำหรับข้อมูลฟอร์ม
        name: '',
        surname: '',
        gender: '',
        image: null
    });

    // ใช้ useEffect เพื่อ log ข้อมูลเมื่อมีการเปลี่ยนแปลงใน localFormData
    useEffect(() => {
        console.log('Local form data changed:', localFormData); // แสดงข้อมูลฟอร์มใน console
    }, [localFormData]); // ทำงานเมื่อ localFormData เปลี่ยนแปลง

    const handleChange = (e) => { // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงใน input
        const { name, value } = e.target; // ดึงค่า name และ value จาก input
        setLocalFormData((prevData) => ({
            ...prevData,
            [name]: value, // อัปเดตค่าใน localFormData
        }));
    };

    const handleFileChange = (e) => { // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงใน input file
        setLocalFormData((prevData) => ({
            ...prevData,
            image: e.target.files[0], // อัปเดตค่า image ใน localFormData
        }));
    };

    const handleSubmit = (e) => { // ฟังก์ชันสำหรับจัดการการส่งฟอร์ม
        e.preventDefault(); // ป้องกันการรีเฟรชหน้า
        setFormData(localFormData); // ส่งข้อมูลไปยัง context
        alert(`สวัสดี ${localFormData.name} ${localFormData.surname}`); // แสดงข้อมูลใน alert

        // Reset the form
        setLocalFormData({ // รีเซ็ตค่าใน localFormData
            name: '',
            surname: '',
            gender: '',
            image: null
        });
    };

    const handleClear = () => { // ฟังก์ชันสำหรับล้างข้อมูลฟอร์ม
        setFormData({}); // Clear the context
        setLocalFormData({ name: '', surname: '', gender: '', image: null }); // Reset local form state
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 border rounded shadow"> {/* ฟอร์มสำหรับการกรอกข้อมูล */}
            <div className="mb-3">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="ชื่อ"
                    value={localFormData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="นามสกุล"
                    value={localFormData.surname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <select name="gender" className="form-select" onChange={handleChange} value={localFormData.gender} required>
                    <option value="">เลือกเพศ</option> {/* ตัวเลือกสำหรับเพศ */}
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                </select>
            </div>
            <div className="mb-3">
                <input
                    type="file"
                    name="image"
                    className="form-control"
                    onChange={handleFileChange} // จัดการการเปลี่ยนแปลงไฟล์
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button> {/* ปุ่มส่งข้อมูล */}
            <button type="button" className="btn btn-secondary ms-2" onClick={handleClear}>Clear</button> {/* ปุ่มล้างข้อมูล */}
        </form>
    );
};

export default InputForm; // ส่งออก Component InputForm
