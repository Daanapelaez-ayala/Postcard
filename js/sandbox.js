let selection = document.querySelector('select');
let result = document.querySelector('states')
selection.addEventListener( 'change', () => {
    result.innerHTML = selection.options [selection.selectedIndex].value;
    console.log(selection.selectedIndex);
})
value
