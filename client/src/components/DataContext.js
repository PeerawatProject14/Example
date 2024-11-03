import React, { createContext, useState } from 'react'; // นำเข้า React, createContext, useState

export const DataContext = createContext(); // สร้าง context

export const DataProvider = ({ children }) => { // สร้าง DataProvider Component
    const [formData, setFormData] = useState({ // สร้าง state สำหรับจัดเก็บข้อมูลฟอร์ม
        name: '',
        surname: '',
        gender: '',
        image: null,
    });

    return (
        <DataContext.Provider value={{ formData, setFormData }}> {/* ส่งค่า formData และ setFormData ผ่าน context */}
            {children} {/* Render children */}
        </DataContext.Provider>
    );
};
