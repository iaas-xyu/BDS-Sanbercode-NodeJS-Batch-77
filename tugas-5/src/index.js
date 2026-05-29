import { AddSiswa, Login, Register } from "./libs/Karyawan.js";

const args = process.argv;
const command = args[2];
const input = args[3];

const main = async () => {
    switch (command) {
        case "register":
            await Register(input);
            break;

        case "login":
            Login(input);
            break;

        case "addsiswa":
            await AddSiswa(input);
            break;

        default:
            console.log("Command tidak ditemukan");
    }
};

main();