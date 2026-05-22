// conditional.js
// Jawaban Soal if-else
function gameRole(nama, peran) {

    if (nama.length <= 0) {
        console.log("Nama harus diisi!");
    } else if (peran.length <= 0) {
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);

    } else if (peran == "Penyihir") {
        console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
        console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`);
    } else if (peran == "Guard") {
        console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
        console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`);
    } else if (peran == "Werewolf") {
        console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
        console.log(`Halo Werewolf ${nama}, kamu akan memakan mangsa setiap malam!`);
    }
}
gameRole("", "");
gameRole("John", "");
gameRole("Jane", "Penyihir");
gameRole("Jenita", "Guard");
gameRole("Junaedi", "Werewolf");
