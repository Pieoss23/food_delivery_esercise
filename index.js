/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/


//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [{
    id: 324234,
    category: 0,
    quantity: 1,
    title: 'Margherita',
    description: "Pomodoro, mozzarella e basilico",
    ingredients: ['pomodoro', 'mozzarella', 'basilico'],
    price: 6.5
},
{
    id: 098394,
    category: 0,
    quantity: 1,
    title: 'Calzone Classico',
    description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",
    ingredients: ['pomodoro', 'mozzarella', 'prosciutto cotto'],
    price: 7.0
},
{
    id: 432432,
    category: 4,
    quantity: 1,
    title: 'Coca Cola Zero (33CL)',
    description: "",
    price: 3.0
},
{
    id: 564564,
    category: 0,
    quantity: 1,
    title: 'Salamino',
    description: "Pomodoro, mozzarella e salamino piccante",
    ingredients: ['pomodoro', 'mozzarella', 'salamino'],
    price: 7.5
},
{
    id: 564564,
    category: 0,
    quantity: 1,
    title: 'Salamino',
    description: "Mozzarella, salsiccia, patate al forno",
    ingredients: ['mozzarella', 'salsiccia', 'patate al forno'],
    price: 7.5
},
{
    id: 333445,
    category: 4,
    quantity: 1,
    title: 'Acqua Naturale (1L)',
    description: "",
    price: 2
},
{
    id: 656765,
    category: 3,
    quantity: 3,
    title: 'Cheesecake Cioccolato',
    description: "Dolce a base di formaggio fresco e topping al cioccolato",
    price: 5
},
]

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [{
    id: 0,
    name: "pizze"
},
{
    id: 1,
    name: "panini"
},
{
    id: 2,
    name: "sushi"
},
{
    id: 3,
    name: "dessert"
},
{
    id: 4,
    name: "bevande"
},
];

//FUNZIONI DA IMPLEMENTARE:

/* 
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
*/
const getTotalAmount = () => {
    let total = 0;
    for (let product of productsInCart) {
        total += (product.quantity * product.price);
    }
    return total;
}

console.log(getTotalAmount());


/* 
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------
    */
const getCategoryCode = (categoryName) => {
    return categories.find(category => categoryName === category.name)?.id;
}
console.log(getCategoryCode('pizze'));


/*
    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/
const getCategoryCount = (categoryName) => {
    return productsInCart.filter(product => getCategoryCode(categoryName) === product.category).length;
}

console.log(getCategoryCount(''))

/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/



const removeFromCart = (productId) => {
    let selectProduct = productsInCart.find(product => productId === product.id);
    selectProduct.quantity -= 1;
    if (selectProduct.quantity <= 1) {
        let itemIndex = productsInCart.findIndex(product => product.id === selectProduct.id);
        return productsInCart.splice(itemIndex, 1);
    } else {
        return selectProduct.quantity;
    }
}

console.log(removeFromCart(656765))
console.log(productsInCart)

/*
---------------------------------------
getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
---------------------------------------

*/
const getPizzeBianche = () =>
    productsInCart.filter((item) => (item.category) === 0 && !item.ingredients.includes('pomodoro'));

console.log('pizza bianca', getPizzeBianche());

/*
---------------------------------------
printCart: stampa su console tutti i prodotti divisi per categoria. 

formato richiesto:
  *** PIZZA ***
  - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
  - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

  *** BEVANDE ***
  - 1 x Coca Cola Zero (33CL) | 3€

  *** TOTALE ***
  16.5€
---------------------------------------
*/
const printCart = () => {
    let pizze = productsInCart.filter(product => product.category === 0);
    let bevande = productsInCart.filter(product => product.category === 4);
    let dessert = productsInCart.filter(product => product.category === 3);
    let tot = 0;
    productsInCart.forEach(product => tot += product.price)
    console.log("*** PIZZE ***")
    pizze.map(obj => {
        console.log(`${obj.quantity} x ${obj.title} (${obj.ingredients}) | ${obj.price}€`)
    })
    console.log("*** BEVANDE ***")
    bevande.map(obj => {
        console.log(`${obj.quantity} x ${obj.title} | ${obj.price}€`)
    })
    console.log("*** DESSERT ***")
    dessert.map(obj => {
        console.log(`${obj.quantity} x ${obj.title} | ${obj.price}€`)
    })
    console.log("*** TOTALE ***")
    console.log(`${tot}€`)
}
printCart()
