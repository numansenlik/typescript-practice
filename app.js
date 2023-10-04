// let message : string = "Hello World"
// console.log(message);
// const h1 = document.createElement('h1')
// h1.textContent = message
// document.body.appendChild(h1)
/*
// Geliştirme aşamasında değişkenlerin tipini belirtirken hata yapmamızı engeller.
let reversedText = (text: string) => {
  return text.split('').reverse().join('')
}

console.log(reversedText('merhaba'));
*/
// interface Product {
//   name: string;
//   price: number;
//   test: boolean;
// }
// function getProduct(name: string, price: number, test: boolean): Product {
//   return {
//     name: name,
//     price: price,
//     test: test,
//   };
// }
// let showProduct = () => {
//   console.log(getProduct('asddf', 200, true));
// };
// showProduct();
//! Baştan değişkene değer tanımlamak direkt değişkene değer tanımlamakla aynı
// let sayi = 0;
// // sayi  ='tayfun'
// function setCounter(max: 100) {
//   return max
// }
// setCounter(10)
// TypeScript tip Çıkarımı Değikenlerin konumunu kullanarak değişken tiplerini otamatik olarak algılar
// document.addEventListener('click'function (event) {
//   console.log(event.button);
// })
// Özet
// Tip Çıkarımları, bir değişken tanımladığınızda, parametreye vasayılan değer belirlediğinizde, fonsiyonda geriye bir değer dönerken uygulanır.
// TypeScript, en uygun tipi bulmak için en yaygın tip algoritmasını kullanarak çıkarım yapar.
// Ayrıca bağlamsal yazma ile değişkenlerin konumlarını kullanarak çıkarım yapar.
