const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors');
const fs = require('fs');

const port = 8080

app.use(cors());
app.use(cors({
  origin: '*',
  methods: ['PUT', 'GET', 'POST', 'DELETE'], // Đảm bảo cấu hình các phương thức bạn muốn cho phép
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Public
app.use(express.static(path.join(__dirname, '/src/public/uploads')))
const imageDir = path.join(__dirname, '/src/public/uploads');

const route = require('./src/routes/route')
route(app)

app.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(imageDir, filename);

  // Kiểm tra xem tệp có tồn tại không
  if (fs.existsSync(imagePath)) {
      // Đọc nội dung của tệp và gửi về client
      const imageStream = fs.createReadStream(imagePath);
      imageStream.pipe(res);
  } else {
      res.status(404).json({ error: 'Image not found' });
  }
});

app.post('/', async (req, res) => {
  try {
    const avatar = req.file.filename
    const data = await pool.query(`INSERT INTO "viewCL"(avatar) values ('${avatar}')`);
    console.log(data);
  } catch (err){
    res.json(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})