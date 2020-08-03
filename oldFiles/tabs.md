переход в режим адаптивности в браузере есть. 
( снизу слева.)

(вверху можно вращать мобайл, десктоп.)

// СОБЫТИЯ
touchstart
- аналог клика

touchmove
- нажали и переносим

touchend
- перестает соприкасаться с повервхностю 

touchenter -  палец зашел на элемент
touchleave = палец ушел 

touchcancel - палец выходит за пределы браузера
//------------------------------------------

window.addEventListener('DOMContentLoaded', function(){
    let.box = document.querrySelector('.box');

    box.addEventListener('touchstart', function(e){
      e.preventDefault();
      console.log('Red box: touchstart');
    })
})
