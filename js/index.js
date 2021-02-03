/*
    Globale variabelen
    Deze variabelen zijn in mijn gehele code te gebruiken
*/

let buy_buttons = document.querySelectorAll('.buy-btn');    // Array van twee buttons
let shopping_cart = document.querySelector('#shopping-cart');
let shopping_cart_list = document.querySelector('#game-table-rows');

// Hieronder worden alle elementen (buttons) uit de array buy_buttons stuk voor stuk door de 
// forEach functie opgepakt om dan tussen accolades er iets mee te kunnen doen.
buy_buttons.forEach( (button) => {
    button.addEventListener('click', addGameToShoppingCart);    // We koppelen een event listener aan deze ene button
});

shopping_cart.classList.add('hide-shopping-cart');


/*
    addGameToShoppingCart
    ---------------------
    Dit is de functie die aangeroepen wordt op het moment dat een gebruiker
    op een van de buttons clicked.
    In deze functie gaan we programmeren wat er dan moet gebeuren, oftewel
    de aangeklikte game toevoegen aan de winkelwagen.

    Deze functie noemen we een Event Handler
*/
function addGameToShoppingCart(event)
{
    let button = null;

    if(event.path[0] === "I")
        button = event.path[1];
    else
        button = event.path[0];

    let template = `
        <tr>
            <td>${button.dataset.game_id}</td>
            <td>${button.dataset.gamename}</td>
            <td>1</td>
            <td>&euro; ${button.dataset.gameprice}</td>
            <td></td>
        </tr>
    `;

    if(shopping_cart.classList.contains('hide-shopping-cart'))
        shopping_cart.classList.remove('hide-shopping-cart');
        
    shopping_cart_list.innerHTML += template;


}