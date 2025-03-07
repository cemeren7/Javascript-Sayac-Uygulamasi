const title = document.querySelector("#title"); // Sayac İşleiminin Degerini Yazdıracagımız başlık etiketi H3
const btn1 = document.querySelector("#btn-one"); // Arttırma butonu
const btn2 = document.querySelector("#btn-two"); // Azaltma Butonu
const btn3 = document.querySelector("#btn-three"); // Reset Butonu
const titlepage = document.querySelector("#title-body"); // Sayafanın Tarayıcı kısmındada sayac degeri gözükecektir
const hextitle = document.querySelector("#randomhex"); // Random gelen renk kodunu tutacak H2 etiketi

let count = 0; // Globalda Tanımladıgım sayac degişkeni

// Olay Dinleyicileri
btn1.addEventListener("click", increase);
btn2.addEventListener("click", decrease);
btn3.addEventListener("click", Reset);

function increase() {
  const randomhex = Math.floor(Math.random() * 16777215);
  const hexcolor = randomhex.toString(16); // Üretilen sayıyı hexdecimal sayı sistemine cevirmek için 16 lık tabana dönüştürdüm
  title.style.color = `#${hexcolor}`;
  hextitle.textContent = `#${hexcolor}`;
  count += 1;
  title.textContent = count;
  titlepage.textContent = count;
}

function decrease() {
  if (count == 0) {
    alert("0 Sayısı Sınırdır");
  } else {
    count -= 1;
    title.textContent = count;
    const randomcolor = Math.floor(Math.random() * 16777215);
    const randomhex = randomcolor.toString(16);
    title.style.color = `#${randomhex}`;
    hextitle.textContent = `#${randomhex}`;
    titlepage.textContent = count;
  }
}

function Reset() {
  count = 0;
  title.textContent = count;
  const randomcolor = Math.floor(Math.random() * 16777215);
  const hexcolor = randomcolor.toString(16);
  title.style.color = `#${hexcolor}`;
  hextitle.textContent = `#${hexcolor}`;
  titlepage.textContent = count;
}
