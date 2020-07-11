# Команды для DOM
---
нахождение любых элементов
  - document.querrySelector('')
      > ('.class')  ('.class' '.class2') 
  - document.querrySelectorAll('')
    > найдет псевдомассив
 ---
# Действия с элементами на странице
---
  - element.style.НазваниеКомандыСтиля = 'параметр';
      > element.style.backgroundColor = 'red';
 - У QuerrySelectorAll есть перебор через ForEach
    > elements.forEach(functiun(item, i , etems)=>{
    >   item.style.backgroundColor = 'red'; });   // остальные параметры ненужны
    
- Создание элемента через команду 
    >let div = document.createElement('div')
    >let text = document.createTextNode('Тут был я')
- Добавление класса в элемент
    > div.classList.add('black')

- Добавление элемента в страницу (снизу - аппенд, по отношению к родителю)
    > document.body.appendChild(div)
        wrapper.appendChild(div)
        как вариант - insertBefore
    > document.body.insertBefore(div, element[0] )
- Удаление
    > removeChild
- перезапись элемента
    > replaceChild
- Добавление текста
 >  div.innerHTML = 'Текст' // ТАКЖЕ МОЖНО ПИСАТЬ ТЕГ
> div.innerHTML = '<h1>Текст</h1>' 
- Безопасное добавление текста 
> div.textContent = 'Text'