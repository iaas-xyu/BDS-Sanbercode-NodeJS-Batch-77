import { readFile, writeFile } from "fs/promises";

const path = "data.json";


export const Register = async (inputData) => {
    try {
        const [name, password, role] = inputData.split(",");
        const data = await readFile(path, "utf-8");
        const dataJson = JSON.parse(data);
        dataJson.push({ name, password, role, isLogin: false,});

        await writeFile( path, JSON.stringify(dataJson, null, 2), "utf-8");
        console.log("Register berhasil");
    } catch (err) {
        console.log(err.message);
    }
};





export const Login = (inputData) => {
    const [name, password] = inputData.split(",");
    readFile(path, "utf-8")
        .then((data) => {
            const dataJson = JSON.parse(data);
            const user = dataJson.find((item) => item.name === name && item.password === password);

            if (!user) {throw new Error("Name atau password salah");}
            user.isLogin = true;

            return writeFile( path, JSON.stringify(dataJson, null, 2), "utf-8");
        })
        .then(() => { console.log("Berhasil Login");})
        .catch((err) => {console.log(err.message);});
};





export const AddSiswa = async (inputData) => {
    try {
        const [studentName, trainerName] = inputData.split(",");
        const data = await readFile(path, "utf-8");
        const dataJson = JSON.parse(data);

        const admin = dataJson.find((item) => item.role.toLowerCase() === "admin" && item.isLogin === true);

        if (!admin) {throw new Error("Admin harus login terlebih dahulu");}

        const trainer = dataJson.find((item) => item.role.toLowerCase() === "trainer" && item.name.toLowerCase() === trainerName.toLowerCase());

        if (!trainer) {throw new Error("Trainer tidak ditemukan");}

        if (!trainer.students) { trainer.students = [];}

        trainer.students.push({ name: studentName,});

        await writeFile( path, JSON.stringify(dataJson, null, 2), "utf-8");
        console.log("Berhasil Add Siswa");
    } catch (err) { console.log(err.message);}
};