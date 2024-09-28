let text = "Портфолио";
let Name = "Я - Frontend разработчик";
let LongText = "Мотивированный Frontend-разработчик с опытом создания веб-сайтов на заказ. Обладаю глубокими знаниями JavaScript и React.js. Стремлюсь непрерывно совершенствоваться и расти в профессии, чтобы достичь уровня Senior-разработчика.";
let h = 0; 
let i = 0; 
let v = 0; 
let l = 0; 
let speed = 150; 
let speed3 = 190;
let speed4 = 45;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);   
  }
}

typeWriter();

function TypeName() {
    if(v < Name.length){
        document.getElementById("Name").innerHTML += Name.charAt(v);
        v++;
        setTimeout(TypeName, speed3);
    }
}

TypeName();

function TypeLongText() {
  if (l < LongText.length) {
    document.getElementById("LongText").innerHTML += LongText.charAt(l); // здесь добавьте уникальный id
    l++;
    setTimeout(TypeLongText, speed4);
  }
}

TypeLongText();