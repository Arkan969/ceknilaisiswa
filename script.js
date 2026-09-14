function prosesPenilaian() {
    
    const nama = document.getElementById('namaSiswa').value;
    const nilaiInput = document.getElementById('nilaiSiswa').value;

    if (nama.trim() === "" || nilaiInput === "") {
        alert("Isi dulu nama dan nilai siswanya!!!");
        return;
    }
    else if (isNaN(nilaiInput) || parseFloat(nilaiInput) > 100) {
        alert("mana ada nilai siswa yang lebih dari 100 peuy");
        return;
    }

    const nilai = parseFloat(nilaiInput);

    if (nilai < 0 || nilai > 100) {
        alert("Masukkan nilai siswa!");
        return;
    }

    let grade = "";
    let status = "";    
    let classStatus = "";
    let pesan = "";

    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else if (nilai >= 60) {
        grade = "D";
    } else if (nilai >= 50) {
        grade = "E";
    }
    else {
        grade = "F";
    }

    if (grade === "D" || grade === "E") {
        status = "TIDAK LULUS";
        classStatus = "status-gagal";
        pesan = "Maaf, Anda tidak lulus!";
    } else if(grade === "A" || grade === "B" || grade === "C") {
        status = "LULUS";
        classStatus = "status-lulus";
        pesan = "Selamat, Anda lulus!";
    }
    else {
        status = "BODOH!!!";
        classStatus = "status-gagal";
        pesan = "Belajar lagi sana!";
    }

    document.getElementById('resNama').textContent = nama;
    document.getElementById('resNilai').textContent = nilai;
    document.getElementById('resGrade').textContent = grade;
    document.getElementById('resPesan').textContent = pesan;
    const elementStatus = document.getElementById('resStatus');
    elementStatus.textContent = status;
    elementStatus.className = classStatus; 
    document.getElementById('hasilPenilaian').style.display = 'block';
}