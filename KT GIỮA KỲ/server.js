const express = require('express');
const app = express();
const path = require('path');

// Yêu cầu server trỏ vào thư mục 'public' để đọc file index.html, css và thư mục hình ảnh
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server đã lên sóng thành công!`);
    console.log(`👉 Truy cập ngay để test giao diện: http://localhost:${PORT}`);
});