const express = require('express')
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.json());

app.post("/register", (req, res) => {
    const {name, password, role} = req.body;

    const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

    const userBaru ={
        name,
        password,
        role,
        isLogin: false
    };
    data.push(userBaru);

    fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));

    res.status(201).json({
        message: "Berhasil register"
    });
});



// Release 1 Show All Karyawan
app.get("/karyawan", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

  res.json({
    message: "Berhasil get karyawan",
    data
  });
});


// Release 2 Login
app.post("/login", (req, res) => {
  const { name, password } = req.body;

  const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

  data.forEach(item => {
    item.isLogin = false;
  });

  const user = data.find(
    item =>
      item.name === name &&
      item.password === password
  );

  if (!user) {
    return res.status(400).json({
      message: "Username atau password salah"
    });
  }

  user.isLogin = true;

  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));

  res.json({
    message: "Berhasil login"
  });
});


// Release 3 Add Siswa 
app.post("/karyawan/:name/siswa", (req, res) => {
  const trainerName = req.params.name;

  const { name, class: studentClass } = req.body;

  const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

  const adminLogin = data.find(
    item =>
      item.role === "admin" &&
      item.isLogin === true
  );

  if (!adminLogin) {
    return res.status(403).json({
      message: "Admin harus login"
    });
  }

  const trainer = data.find(
    item =>
      item.name === trainerName &&
      item.role === "trainer"
  );

  if (!trainer) {
    return res.status(404).json({
      message: "Trainer tidak ditemukan"
    });
  }

  if (!trainer.students) {
    trainer.students = [];
  }

  trainer.students.push({
    name,
    class: studentClass
  });

  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));

  res.json({
    message: "Berhasil add siswa"
  });
});


app.listen(port, () => {
    console.log(`Server berjalan di port http://localhost:${port}`);
})