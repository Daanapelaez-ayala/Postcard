var states = document.getElementById('states');
states.onchange = function() {
    document.getElementById('postcard').style.backgroundImage = 'url("./img/' + states.value + '@2x.jpg")';
    document.getElementById('greeting').innerHTML = 'Greetings from';
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
}