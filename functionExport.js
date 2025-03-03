    /**
 * Exercice 7
 * Modules import / export
 */

// Exercice 7 : Voici un exemple de code pour gérer un panier d'achat
// On souhaite pouvoir utiliser ce code à plusieurs endroits dans un projet
// On souhaite également le faire pour éviter d'exposer la constante cart
// qui pourrait être modifiée par erreur
//
// Migre ce code dans un module, importe le nécéssaire pour l'utiliser
    const cart = [];

    function addToCart(productInfo, quantity = 1) {
    const cartLine = findItemInCart(productInfo.product);

    if (cartLine) {
    cartLine.quantity += quantity;
    return;
    }

    cart.push({ ...productInfo, quantity });
    }

    function findItemInCart(productName) {
    return cart.find((cartLine) => cartLine.product === productName);
    }

    function updateCartQuantity(productName, quantity) {
    const cartLine = findItemInCart(productName);

    if (!cartLine) {
    addToCart(productName, quantity);
    return;
    }

    cartLine.quantity = quantity;
    }

    function computeTotal() {
    return cart.reduce(
    (total, cartLine) => total + cartLine.quantity * cartLine.price,
    0
    );
    }

    function displayAmount(amount) {
    return Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    }).format(amount);
    }

    console.log("Exercice 7");

    console.log("Ajout d'un Shampoing x2 à 10€");
    addToCart({ product: "Shampoing", price: 10 }, 2);

    console.log("Mise à jour du panier : Shampoing x4");
    updateCartQuantity("Shampoing", 4);

    console.log("Ajout d'un Biscuit x10 à 3€");
    addToCart({ product: "Biscuit", price: 3 }, 10);

    console.log("Ajout d'un Biscuit x2 à 3€");
    addToCart({ product: "Biscuit", price: 3 }, 2);

    console.log("Affichage du total panier :");
    console.log(displayAmount(computeTotal()));

    export { addToCart, updateCartQuantity, computeTotal, displayAmount };