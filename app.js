formContact = document.querySelector('#masukan');
formContact.addEventListener('submit', (e) => {
  e.preventDefault()
  let nama = document.getElementById('nama').value;
  let email = document.getElementById('email').value;
  let pesan = document.getElementById('message').value;
  if (nama != "" && email!="" && pesan !="") {
    swal("Masukan Diterima", "Terimakasih atas masukan kritiknya,kami akan mengevaluasinya lagi 😊", "success");
  }else{
    swal("Error!", "Anda harus mengisi data pemesanan dengan lengkap !", "error");
  }
})