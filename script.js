'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>

//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };
// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // Render country 1
//     renderCountry(data);
//     // Get neighbour country
//     const neighbour = data.borders?.[0];
//     if (!neighbour) return;
//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('usa');

// //setTimeout callback hell example

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);

// request.send();

//const request = fetch('https://restcountries.com/v2/name/usa');
// const getJSON = function (url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg} ${response.status}`);
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     //.then(response => response.json(),err=>alert(err))
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     // .then(response => response.json(),err=>alert(err))
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
//modified one.................................................................................................
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

//getCountryData(',nndbv');
//challenge.......................................................

// const whereIam = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`

//   )
//     .then(response => {
//       if(!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json()})
//     .then(data => {
//       //console.log(data);
//        console.log(`You are in ${data.city}, ${data.countryName}`);
//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`);

//     })
//     .then(response => {
//       if(!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json()})
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .catch(err => console.error(`${err.message}`));
// };

// // whereIam(19.037, 72.873);
// // whereIam(-33.933, 18.474);
// btn.addEventListener('click', function () {
//     whereIam(52.508, 13.381);
//   });

// const whereIam = function (lan, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lan}&longitude=${lng}`
//   )
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })

//     .then(data => renderCountry(data, 'neighbour'));
// };

// btn.addEventListener('click', function () {
//   whereIam(52.508, 13.381);
// });

// event loop in practice.......................................................................................

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for(let i=0;i<1000000000;i++){}
//   setTimeout(() => console.log('1 sec timer'), 0);
//   console.log(res)});
// console.log('Test end');

// function a(fn){

//   console.log('first function');
//   fn();
// }

// a(function b(){
//   console.log('second function');
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery Draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You win');
//     } else {
//       reject(new Error('You lost'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2).then(() => {
//   console.log('I waited for 2 seconds');
//   return wait(1);
// }).then(() => {
//   console.log('I waited for 1 second');
// }
// );

//Promise.resolve
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));



// const getPosition = function(){
//   return new Promise(function(resolve,reject){
//     // navigator.geolocation.getCurrentPosition(position=>resolve(position),err=>reject(err));
//     navigator.geolocation.getCurrentPosition(resolve,reject);

//   });
// }

// // getPosition().then(pos=>console.log(pos));


// const whereIam = function () {
//   getPosition().then(pos=>{
//     const {latitude:lan,longitude:lng}=pos.coords;
//     console.log(lan,lng);
//     return fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lan}&longitude=${lng}`
//     );
//   })
  
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })

//     .then(data => renderCountry(data, 'neighbour'));
// };

// btn.addEventListener('click', function () {
//   whereIam();
// });


//challenge 2...............................................................
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function(imgPath){
//   return new Promise(function (resolve,reject){
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load',function(){
//       document.body.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error',function(){
//       reject(new Error('Image not found'));
//     });
//   })
// }

// let currentImg;
// createImage('img/img-1.jpg').then(img=>{
//   currentImg = img;
// console.log('Image 1 loaded');
// return wait(2)

// }).then(()=>{
//   console.log('2 seconds passed');
//   currentImg.style.display = 'none';
//   return createImage('img/img-2.jpg');
// })
// .then(img=>{
//   currentImg = img;
//   console.log('Image 2 loaded');
//   return wait(2);
// })
// .then(()=>{
//   console.log('2 seconds passed');
//   currentImg.style.display = 'none';
// })
// .catch(err=>console.error(err));



// const whereIam = async function (country) {
//   const res=await fetch(`https://restcountries.com/v2/name/${country}`)
//   console.log(res);
// }
// whereIam('usa');
// console.log('first'); 


// ------------------redoing the previous work for better understanding-----------------------------

