import React, { useEffect, useState } from 'react'; // นำเข้า React, useEffect, useState
import './TestFetch.css'; // นำเข้า CSS สำหรับ DataFetch

const DataFetch = () => {
    const [data, setData] = useState([]); // สร้าง state สำหรับข้อมูลที่ดึงมา
    const [loading, setLoading] = useState(true); // สร้าง state สำหรับสถานะการโหลด
    const [error, setError] = useState(null); // สร้าง state สำหรับข้อผิดพลาด

    useEffect(() => {
        const fetchData = async () => { // ฟังก์ชันสำหรับดึงข้อมูล
            try {
                // Fetch data จาก /fetch-test
                const response = await fetch('http://localhost:5000/fetch-test'); // ดึงข้อมูลจากเซิร์ฟเวอร์
                if (!response.ok) {
                    throw new Error('Network response was not ok'); // หากมีข้อผิดพลาดในการตอบกลับ
                }
                const result = await response.json(); // แปลงข้อมูลเป็น JSON
                setData(result); // อัปเดต state data ด้วยผลลัพธ์ที่ได้
            } catch (err) {
                setError(err.message); // บันทึกข้อผิดพลาดใน state
            } finally {
                setLoading(false); // เปลี่ยนสถานะการโหลดเป็น false
            }
        };

        fetchData(); // เรียกใช้ฟังก์ชัน fetchData
    }, []); // ทำงานเพียงครั้งเดียวเมื่อ Component ถูกเรนเดอร์

    const handleSubmit = async (event) => { // ฟังก์ชันสำหรับจัดการการส่งข้อมูล
        event.preventDefault(); // ป้องกันการรีเฟรชหน้า
        const formData = { // ข้อมูลที่ต้องการส่ง
            name: 'เกย์',
            surname: 'ตัวพ่อ',
            gender: 'male'
        };

        try {
            const response = await fetch('http://localhost:5000/submit', { // ส่งข้อมูลไปยังเซิร์ฟเวอร์
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // กำหนด Content-Type เป็น JSON
                },
                body: JSON.stringify(formData), // แปลงข้อมูลเป็น JSON และส่ง
            });

            const result = await response.json(); // แปลงผลลัพธ์เป็น JSON
            alert(result.message); // แสดงข้อความตอบกลับ
        } catch (error) {
            console.error('Error:', error); // แสดงข้อผิดพลาดใน console
        }
    };

    if (loading) {
        return <div className="text-center">Loading...</div>; // แสดงข้อความโหลด
    }

    if (error) {
        return <div className="text-danger">Error: {error}</div>; // แสดงข้อความข้อผิดพลาด
    }

    return (
        <div className="container mt-4"> {/* ส่วนสำหรับแสดงข้อมูล */}
            <h2 className="text-center mb-4">Fetched Data</h2> {/* หัวข้อ */}
            <form onSubmit={handleSubmit} className="mb-4"> {/* ฟอร์มสำหรับส่งข้อมูล */}
                <button type="submit" className="btn btn-primary btn-lg">Submit Test Data</button> {/* ปุ่มส่งข้อมูล */}
            </form>
            <div className="row"> {/* แสดงข้อมูลที่ดึงมา */}
                {data.map(item => ( // วนลูปข้อมูลและสร้าง card สำหรับแต่ละ item
                    <div className="col-md-4 mb-3" key={item.id}> {/* คอลัมน์สำหรับ card */}
                        <div className="card shadow-sm border-light"> {/* Card สำหรับแสดงข้อมูล */}
                            <div className="card-body">
                                <h5 className="card-title">Post ID: {item.id}</h5> {/* แสดง ID ของโพสต์ */}
                                <p className="card-text">{item.content}</p> {/* แสดงเนื้อหาของโพสต์ */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataFetch; // ส่งออก Component DataFetch
