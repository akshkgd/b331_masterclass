// let userName = 'ashsish shukla'; //string
// let userAge = 24.5; //number 
// let userAlive = true;
// let hobby = ['book reading', 'coding', 'playing Tabla', 23, true] //array
// let user = {
// 	name: 'ashish',
// 	email: 'ashish@gmail.com',
// 	address: 'New Delhi, India'
// } //objects
// let paymentStatus = true;
// const gender = 'Male';
// gender = 'M'
// userName = 'Ashish kumar Shukla'
// console.log(userName)
// for (let i=0; i<=10;i++)
// {
// 	console.log(i)
// }
let counter = 0;
function increment(){
   counter = counter + 1;
   document.getElementById('counter').innerHTML = counter;
}
function decrement(){
    counter = counter - 1;
    document.getElementById('counter').innerHTML = counter;
 }
 function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
 }


 function quote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let random = Math.floor( Math.random()*1600);
      console.log(random);
      // console.log(data[5]);
      document.getElementById('quote').innerHTML = data[random].text;
    });
 }

