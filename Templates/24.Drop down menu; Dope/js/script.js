//Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.price-dropdown');

//Loop through all drop down elements
dropdowns.forEach(dropdown=> {
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.price-select');
    const caret = dropdown.querySelector('.price-caret');
    const menu = dropdown.querySelector('.price-menu');
    const options = dropdown.querySelectorAll('.price-menu li');
    const sselected = dropdown.querySelector('.price-selected');

    /* We are using this method in order to have 
    mutliple dropdown menus on page wprk */

    //Add a click event to the select element
    select.addEventListener('click', () =>{
        //Add the clicked select styles to the select element
        select.classList.toggle('price-select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.toggle('price-caret-rotate');
        //Add the open styles to the new element
        menu.classList.toggle('price-menu-open');
    });

    //Loop through all option elements
    options.forEach(option=>{
        //Add a click event to the option element
        option.addEventListener('click', () =>{
            //Change selected inner text to clicked option
            sselected.innerText = option.innerText;
            //Add the clicked select styles to the select element
            select.classList.remove('price-select-clicked');
            //Add the rotate styles to the caret element
            caret.classList.remove('price-caret-rotate');
            //Add the open styles to the menu element
            menu.classList.remove('price-menu-open');
            //Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('price-active');
            });
            //Add active class to clicked option element
            option.classList.add('price-active');
        });
    });
});
