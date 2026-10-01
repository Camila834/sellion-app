const ICONS = "https://img.icons8.com/ios-glyphs/30/55338f/";

const products = [

    {
        id: 1,
        name: "Fone Bluetooth Comfort Plus",
        price: 159.90,
        category: "Eletrônicos",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 2,
        name: "Smartwatch X1",
        price: 199.90,
        category: "Eletrônicos",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 3,
        name: "Cafeteira Elétrica",
        price: 89.90,
        category: "Eletrodomésticos",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 4,
        name: "Notebook",
        price: 2499.90,
        category: "Eletrônicos",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 5,
        name: "Poltrona Moderna",
        price: 699.90,
        category: "Móveis",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 6,
        name: "Perfume",
        price: 129.90,
        category: "Beleza e Saúde",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 7,
        name: "Tênis Esportivo",
        price: 219.90,
        category: "Esporte e Lazer",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 8,
        name: "Furadeira",
        price: 189.90,
        category: "Ferramentas",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80"
    }
];

let cart = [
    products[0],
    products[1],
    products[2]
];

let favorites = [
    products[0],
    products[1],
    products[2],
    products[3],
    products[6],
    products[7]
];

let currentPage = "home";

const app = document.getElementById("app");

function money(value) {

    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}

/* =========================
   LOGO
========================= */

function logo() {

    return `
        <div class="logo">
            <img src="sellion-logo.png" alt="Sellion">
        </div>
    `;
}

/* =========================
   MENU
========================= */

function icon(name) {

    return `${ICONS}${name}.png`;
}

function navigation() {

    return `

        <aside class="sidebar">

            ${logo()}

            <nav class="nav">

                <button
                    class="${currentPage === "home" ? "active" : ""}"
                    onclick="go('home')">

                    <img
                        class="nav-icon"
                        src="${icon("home")}">

                    Início

                </button>


                <button
                    class="${currentPage === "categories" ? "active" : ""}"
                    onclick="go('categories')">

                    <img
                        class="nav-icon"
                        src="${icon("grid")}">

                    Categorias

                </button>


                <button
                    class="${currentPage === "favorites" ? "active" : ""}"
                    onclick="go('favorites')">

                    <img
                        class="nav-icon"
                        src="${icon("like")}">

                    Favoritos

                </button>


                <button
                    class="${currentPage === "orders" ? "active" : ""}"
                    onclick="go('orders')">

                    <img
                        class="nav-icon"
                        src="${icon("shopping-bag")}">

                    Pedidos

                </button>


                <button
                    class="${currentPage === "profile" ? "active" : ""}"
                    onclick="go('profile')">

                    <img
                        class="nav-icon"
                        src="${icon("user")}">

                    Perfil

                </button>

            </nav>

        </aside>
    `;
}

/* =========================
   TOPO
========================= */

function topbar() {

    return `

        <header class="topbar">

            <div class="search">

                <img
                    src="${icon("search")}">

                <input
                    id="searchInput"
                    type="text"
                    placeholder="O que você está procurando?"
                    oninput="searchProducts(this.value)">

            </div>

            <button
                class="cart-button"
                onclick="go('cart')">

                <img
                    src="${icon("shopping-cart")}">

            </button>

        </header>

    `;
}

/* =========================
   ESTRUTURA
========================= */

function layout(content) {

    return `

        <div class="app">

            ${navigation()}

            <main class="main">

                ${topbar()}

                <section class="content">

                    ${content}

                </section>

            </main>

        </div>

    `;
}

/* =========================
   PRODUTO
========================= */

function productCard(product) {

    return `

        <article class="product">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}">

            </div>

            <div class="product-info">

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="old-price">
                    ${money(product.price * 1.12)}
                </div>

                <div class="price">
                    ${money(product.price)}
                </div>

                <button
                    class="add-button"
                    onclick="addCart(${product.id})">

                    Adicionar

                </button>

            </div>

        </article>

    `;
}

/* =========================
   HOME
========================= */

function homePage() {

    return `

        <div class="hero">

            <div>

                <span>Ofertas especiais</span>

                <h1>
                    até 40% OFF
                </h1>

                <p>
                    em produtos selecionados
                </p>

                <button>
                    Aproveite!
                </button>

            </div>

        </div>


        <div class="category-row">

            <div class="category">

                <div class="category-icon">

                    <img src="${icon("smartphone")}">

                </div>

                <span>Eletrônicos</span>

            </div>


            <div class="category">

                <div class="category-icon">

                    <img src="${icon("home")}">

                </div>

                <span>Casa</span>

            </div>


            <div class="category">

                <div class="category-icon">

                    <img src="${icon("beauty")}">

                </div>

                <span>Beleza</span>

            </div>


            <div class="category">

                <div class="category-icon">

                    <img src="${icon("t-shirt")}">

                </div>

                <span>Moda</span>

            </div>


            <div class="category">

                <div class="category-icon">

                    <img src="${icon("wrench")}">

                </div>

                <span>Ferramentas</span>

            </div>


            <div class="category">

                <div class="category-icon">

                    <img src="${icon("game-controller")}">

                </div>

                <span>Lazer</span>

            </div>

        </div>


        <h2 class="page-title">
            Produtos em destaque
        </h2>


        <div
            id="productsGrid"
            class="product-grid">

            ${products
                .slice(0, 4)
                .map(productCard)
                .join("")}

        </div>

    `;
}

/* =========================
   CATEGORIAS
========================= */

function categoriesPage() {

    return `

        <h2 class="page-title">
            Categorias
        </h2>


        <div class="category-grid">

            ${products.map(product => `

                <div class="category-card">

                    <img
                        src="${product.image}">

                    <span>
                        ${product.category}
                    </span>

                </div>

            `).join("")}

        </div>

    `;
}

/* =========================
   FAVORITOS
========================= */

function favoritesPage() {

    return `

        <h2 class="page-title">
            Favoritos
        </h2>


        <div class="favorite-grid">

            ${favorites.map(product => `

                <article class="favorite-card">

                    <button
                        class="heart"
                        onclick="removeFavorite(${product.id})">

                        ♥
                    </button>

                    <img
                        src="${product.image}">

                    <div class="favorite-info">

                        <b>
                            ${product.name}
                        </b>

                        <br>

                        ${money(product.price)}

                    </div>

                </article>

            `).join("")}

        </div>

    `;
}

/* =========================
   PEDIDOS
========================= */

function ordersPage() {

    const orders = [
        products[0],
        products[2],
        products[6]
    ];

    return `

        <h2 class="page-title">
            Meus pedidos
        </h2>


        <div class="order-list">

            ${orders.map((product, index) => `

                <article class="order">

                    <img
                        src="${product.image}">

                    <div>

                        <b>
                            #1425${6 - index}
                        </b>

                        <br>

                        ${product.name}

                        <br>

                        <small>
                            ${money(product.price)}
                        </small>

                        <br>

                        <a
                            href="#"
                            style="color:#55338f">

                            Ver detalhes ›

                        </a>

                    </div>


                    <span
                        class="status
                        ${index === 1 ? "blue" : ""}
                        ${index === 2 ? "green" : ""}">

                        ${
                            index === 0
                                ? "Em preparação"
                                : index === 1
                                ? "A caminho"
                                : "Entregue"
                        }

                    </span>

                </article>

            `).join("")}

        </div>

    `;
}

/* =========================
   CARRINHO
========================= */

function cartPage() {

    const total = cart.reduce(
        (sum, product) => sum + product.price,
        0
    );

    return `

        <h2 class="page-title">
            Carrinho
        </h2>


        <div class="cart">

            ${cart.map(product => `

                <div class="cart-item">

                    <img
                        src="${product.image}">


                    <div>

                        <b>
                            ${product.name}
                        </b>

                        <br>

                        ${money(product.price)}


                        <div class="quantity">

                            <button>
                                -
                            </button>

                            <span>
                                1
                            </span>

                            <button>
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        onclick="removeCart(${product.id})"
                        style="border:none;background:white">

                        🗑️

                    </button>

                </div>

            `).join("")}

        </div>


        <div class="summary">

            <div class="summary-row">

                <span>
                    Subtotal
                </span>

                <span>
                    ${money(total)}
                </span>

            </div>


            <div class="summary-row">

                <span>
                    Frete
                </span>

                <span>
                    R$ 19,90
                </span>

            </div>


            <div class="summary-row total">

                <span>
                    Total
                </span>

                <span>
                    ${money(total + 19.90)}
                </span>

            </div>


            <button
                class="primary-button"
                onclick="go('checkout')">

                Finalizar compra

            </button>

        </div>

    `;
}

/* =========================
   CHECKOUT
========================= */

function checkoutPage() {

    return `

        <h2 class="page-title">
            Finalizar compra
        </h2>


        <div class="checkout">

            <div class="box">

                <b>
                    Endereço de entrega
                </b>

                <br><br>

                📍

                <b>
                    Rua das Flores, 123
                </b>

                <br>

                <small>
                    Jardim das Acácias -
                    São Paulo, SP
                </small>

            </div>


            <div class="box">

                <b>
                    Forma de pagamento
                </b>


                <div class="payment">

                    ◉

                    <b>
                        Cartão de crédito
                    </b>

                </div>


                <div class="payment">

                    ○

                    <b>
                        Pix
                    </b>

                </div>


                <div class="payment">

                    ○

                    <b>
                        Boleto bancário
                    </b>

                </div>

            </div>


            <button
                class="primary-button"
                onclick="finishOrder()">

                Finalizar compra

            </button>

        </div>

    `;
}

/* =========================
   PEDIDO REALIZADO
========================= */

function successPage() {

    return `

        <div class="success">

            <div>

                <img
                    src="${icon("checked")}">

                <h2>
                    Pedido realizado!
                </h2>

                <p>
                    Seu pedido foi confirmado com sucesso.
                    <br>
                    Você receberá um e-mail com todos os detalhes.
                </p>


                <button
                    class="primary-button"
                    onclick="go('orders')">

                    Acompanhar pedido

                </button>

            </div>

        </div>

    `;
}

/* =========================
   PERFIL
========================= */

function profilePage() {

    const options = [

        ["user", "Camila Souza", "camila@email.com"],

        ["marker", "Meus endereços", "2 endereços cadastrados"],

        ["wallet", "Formas de pagamento", "2 cartões cadastrados"],

        ["bell", "Notificações", "Ativadas"],

        ["shopping-bag", "Meus pedidos", "Acompanhe seus pedidos"],

        ["like", "Favoritos", "Seus produtos salvos"],

        ["settings", "Configurações", "Edite suas preferências"]

    ];


    return `

        <h2 class="page-title">
            Meu perfil
        </h2>


        <div class="profile">

            ${options.map(option => `

                <div class="profile-row">

                    <div class="profile-icon">

                        <img
                            src="${icon(option[0])}">

                    </div>


                    <div>

                        <b>
                            ${option[1]}
                        </b>

                        <br>

                        <small>
                            ${option[2]}
                        </small>

                    </div>


                    <span class="arrow">
                        ›
                    </span>

                </div>

            `).join("")}


            <br>

            <button
                class="primary-button"
                onclick="loginPage()">

                Sair da conta

            </button>

        </div>

    `;
}

/* =========================
   LOGIN
========================= */

function loginPage() {

    app.innerHTML = `

        <div class="login-page">

            <div class="login-card">

                <div class="login-logo">

                    <img
                        src="sellion-logo.png"
                        alt="Sellion">

                </div>


                <div class="login-form">

                    <h1>
                        Acesse sua conta
                    </h1>

                    <p>
                        Entre para continuar suas compras
                        e aproveitar melhores ofertas.
                    </p>


                    <div class="field">

                        <label>
                            E-mail
                        </label>

                        <input
                            type="email"
                            placeholder="seuemail@exemplo.com">

                    </div>


                    <div class="field">

                        <label>
                            Senha
                        </label>

                        <input
                            type="password"
                            placeholder="Digite sua senha">

                    </div>


                    <button
                        class="login-button"
                        onclick="go('home')">

                        Entrar

                    </button>


                    <button
                        class="google-button"
                        onclick="go('home')">

                        🌈 &nbsp; Entrar com Google

                    </button>

                </div>

            </div>

        </div>

    `;
}

/* =========================
   FUNÇÕES
========================= */

function addCart(id) {

    const product = products.find(
        product => product.id === id
    );

    if (
        product &&
        !cart.some(item => item.id === id)
    ) {

        cart.push(product);

    }

    go("cart");
}


function removeCart(id) {

    cart = cart.filter(
        product => product.id !== id
    );

    go("cart");
}


function removeFavorite(id) {

    favorites = favorites.filter(
        product => product.id !== id
    );

    go("favorites");
}


function finishOrder() {

    currentPage = "success";

    render();

}


function searchProducts(text) {

    const grid =
        document.getElementById("productsGrid");

    if (!grid) return;


    const result =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(text.toLowerCase())

            ||

            product.category
                .toLowerCase()
                .includes(text.toLowerCase())

        );


    grid.innerHTML =
        result
            .map(productCard)
            .join("");

}


function go(page) {

    currentPage = page;

    render();

    window.scrollTo(0, 0);

}


function render() {

    let content;


    switch (currentPage) {

        case "home":
            content = homePage();
            break;

        case "categories":
            content = categoriesPage();
            break;

        case "favorites":
            content = favoritesPage();
            break;

        case "orders":
            content = ordersPage();
            break;

        case "cart":
            content = cartPage();
            break;

        case "checkout":
            content = checkoutPage();
            break;

        case "profile":
            content = profilePage();
            break;

        case "success":
            content = successPage();
            break;

        default:
            content = homePage();

    }


    app.innerHTML =
        layout(content);

}


/* =========================
   INICIAR
========================= */

loginPage();