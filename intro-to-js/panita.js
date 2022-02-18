function askMyName() {
    const name = prompt("Enter your name");
    
    // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
 
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    }
 }
 

 function helloWorld() {
    const h1message = document.getElementById("name").innerText 
    
 // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + 'พี่นันพอจะมีสัก 200 มัั้ย?');
 }


 function calAge() {
   const yearOfBirth = Number (prompt("เกิดปีพ.ศ.อะไรเหรอ?"));
   const currentlyYear = 2565;
   let calAge  = currentlyYear - yearOfBirth;

   alert(`ท่านเก่งมาก ที่มีชีวิคอยู่ใน ประเทศนี้! มาได้ถึง ${calAge} ปีแล้ว`)
 }

 function loadProfile() {
   const name = 'Panita'
   const province = 'Bangkok'
   document.getElementById("my-name").innerHTML = name;
   document.getElementById("my-province").innerHTML = province;
 }