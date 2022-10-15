
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then((reg)=> console.log('serviceWorker registered', reg))
    .catch((err)=> console.log('serviceWorker failed to register',err));
}


function createNode(element) {
    return document.createElement(element); 
}

function append(parent, el) {
    return parent.appendChild(el); 
}

const ul = document.getElementById('people');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let people = data;
        return people.map(function(person) {
            let li = createNode('li')
                span = createNode('span');

            li.innerHTML = person.name;
            span.innerHTML = person.email;

            append(li, span);
            append(ul, li);

        });
    }).catch(err => console.log(err));