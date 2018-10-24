//IIFE

//Funcionalidade : Fazer o menu animado
/*STEP BY STEP
    1. Pegar o menu;
    2. Add um evento de click no menu;
    3. Pegar o <items>;
    4. Add a class -active no items quando o menu for clicado;
    5. Remove a class -active  e esconde o menu
*/
"use strict";
(function(){
    const $menuBraven = document.querySelector('.menu-braven');
    const $menu = $menuBraven.querySelector('.menu');
    const $items = $menuBraven.querySelector('.items');

    $menu.addEventListener('click', (event) => {
        event.preventDefault();

       //Add a class e exibe o menu
       $items.classList.add('-active');

       //
    });

    $items.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Remove a class e esconde o menu
        $items.classList.remove('-active');
       
    });
})();