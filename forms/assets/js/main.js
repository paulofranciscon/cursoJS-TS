const form = document.querySelector('#form')

form.addEventListener('submit', function (event){
 event.preventDefault();
});

function setResult(message){
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragraph-result')
    p.innerHTML = 'SET MSG';
    result.appendChild(p);

}