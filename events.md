для обработки события есть три способа
1) хтмл
в теге написать онклик
<button onclick ="alert('вы нажали сюда')"> кнопка</button>

НЕ ИСПОЛЬЗУЕТСЯ

2) DOM для событий

 - нужно получить кнопку

 let btn = document.getElementsByTagname('button');
// событие
 btn[0].onclick = function() {
   alert('Вы нажали)
 }

 Недостаток - только 1 событие можно повесить. (последнее переписывает предыдущее)


 3) Через методы эдд евент лисенер. и эд ремув лисенере

 btn[0].addEventListener('click', function() {
   alert('1') 
   alert('2')
   // оба события выйдут подряд
 })

 // если 2 события  подряд пишут то не перезаписываются

 //--------------------------------------
 btn[0].addEventListener('mouseenter', function(){
   alert('Вы навели на первую кнопку')
 })

 //-----------------------------------

 Объект EVENT

 
 btn[0].addEventListener('click', function(event) {
   console.log('событие' + event.type + 'на элементе ' + 
   event.target)
   
 })

 //-----------------------------------

 btn[0].addEventListener('click', function(event) {
   let target = event.target;
   target.style.display = 'none';
   
 })


 //------------------------------
 Всплытие событий

 