const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');


dog_btn.addEventListener('click', getRandomDog)
fox_btn.addEventListener('click', getRandomFox)


function getRandomDog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data =>{
        dog_result.innerHTML = `<img src="${data.url}"/>`
    

    })
}


function getRandomFox(){
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data =>{
        fox_result.innerHTML = `<img src="${data.image}"/>`
    

    })
}