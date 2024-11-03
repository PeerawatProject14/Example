const express = require('express'); // นำเข้า Express
const cors = require('cors'); // นำเข้า CORS เพื่อจัดการการร้องขอจากโดเมนอื่น
const bodyParser = require('body-parser'); // นำเข้า Body Parser เพื่อแปลงข้อมูล JSON

const app = express(); // สร้างแอปพลิเคชัน Express
const PORT = 5000; // กำหนดพอร์ตสำหรับเซิร์ฟเวอร์

app.use(cors()); // เปิดใช้งาน CORS
app.use(bodyParser.json()); // ใช้ Body Parser สำหรับแปลงข้อมูล JSON

// Endpoint สำหรับ POST
app.post('/submit', (req, res) => {
    const { name, surname, gender } = req.body; // ดึงข้อมูลจาก body

    // แสดงข้อมูลที่ได้รับใน console
    console.log(`Received data: Name: ${name}, Surname: ${surname}, Gender: ${gender}`);

    // ส่งข้อความตอบกลับ
    res.json({ message: `สวัสดี ${name}` }); // ส่งข้อความกลับไปยัง client
});

// Endpoint สำหรับ GET
app.get('/test', (req, res) => {
    // ส่งข้อความตอบกลับสำหรับการทดสอบ
    res.json({ message: 'นี่คือข้อมูลจากเซิร์ฟเวอร์' }); // ส่งข้อมูลกลับไปยัง client
});

// เพิ่ม endpoint สำหรับการทดสอบ fetch GET
app.get('/fetch-test', (req, res) => {
    const data = [ // ข้อมูลตัวอย่าง
        { id: 1, content: 'I' },
        { id: 2, content: 'am' },
        { id: 3, content: 'Gay' }
    ];
    res.json(data); // ส่งข้อมูลกลับไปยัง client
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // แสดงข้อความเมื่อเซิร์ฟเวอร์เริ่มทำงาน
});
