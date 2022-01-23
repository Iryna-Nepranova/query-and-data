const body = document.querySelector('body');

//button 
const button = document.createElement('button');
let buttonName = 'Нажмите на кнопку для получения информации о планетах Солнечной системы';
button.innerHTML = buttonName;
button.style.width = 'auto';
button.style.height = '50px';
button.style.padding = '0px 30px';
button.style.border = '2px solid green';
button.style.borderRadius = '10px';
button.style.backgroundColor = 'rgb(109, 214, 132,0.6)';
body.append(button);
//function creating content
const createContent = (info) => {
    Object.values(info.planets).forEach((item) => {

        const div = document.createElement('div');
        div.style.padding = '30px';
        div.style.margin = '30px';
        div.style.border = '3px solid green';
        div.style.backgroundColor = 'rgb(109, 214, 132,0.6)';

        const p = document.createElement('p');
        p.style.fontFamily = 'Gill Sans Extrabold, sans-serif';
        p.style.fontSize = '14px';

        const h2 = document.createElement('h2');
        h2.style.fontFamily = 'Gill Sans Extrabold, sans-serif';
        h2.style.fontSize = '25px';

        const img = document.createElement('img');
        img.setAttribute('src', item.url)
        img.style.width = '300px';
        img.style.heigth = 'auto';
        img.style.borderRadius = '10px ';
        img.style.border = '3px solid green';

        h2.innerHTML = item.title;
        p.innerHTML = item.info;
        img.innerHTML = item.url;

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(img);
        body.appendChild(div);

    });
}

//function which makes request and hides button
let showInfo = document.querySelector('button').addEventListener('click', function() {
    fetch('https://trevadim.github.io/vue/data/data.json')
        .then((response) => response.json())
        .then((data) => createContent(data))
        .catch((error) => console.log(error));

    button.hidden = true;
})