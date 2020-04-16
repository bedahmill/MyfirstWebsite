let btn = document.querySelector('#addTask');
let inputValue = document.querySelector('#addTodo');
const msg = document.querySelector('.hidden');
// actions when the button is clicked
btn.addEventListener('click',function(){

    if(inputValue.value === ''){
       msg.innerHTML = 'Come on you can do more..'
       setTimeout(() => msg.remove(), 3000)
        inputValue.value ='';
    }else{
    let x = document.createElement("p");
    let y = document.createTextNode(`${inputValue.value}`);
    x.appendChild(y);

    let contents = document.querySelector('#content');
    contents.appendChild(x);

    inputValue.value = '';
    }
})
