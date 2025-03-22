function func() {
    const cards = document.querySelectorAll(".card")

    cards.forEach(card => {
        const like = card.querySelector("#like")
        const likePath = card.querySelector("#like-path")
        const revButton = card.querySelector(".card__rev-button")
        const revButton2 = card.querySelector(".card__button-back")

        // rotation card
        if (revButton) {
            revButton.addEventListener("click", function () {
                card.classList.toggle("card__reverse")
            })
        }

        if (revButton2) {
            revButton2.addEventListener("click", function () {
                card.classList.toggle("card__reverse")
            })
        }

        // click on like
        like.addEventListener("click", function () {
            likePath.classList.toggle("like_active")
        })

        // card button
        const buttonAddToCart = card.querySelector(".card__add-to-cart")
        let cardProductIMG = card.querySelector(".card__image-container > img").src
        let cardProductPRICE = card.querySelector(".card__price > p").innerHTML

        buttonAddToCart.addEventListener("click", function () {
            localStorage.setItem('productIMG-key', cardProductIMG)
            localStorage.setItem('productPRICE-key', cardProductPRICE)
            window.location.href = "reservation.html"
        })
    })

    // Change Language Function
    const ruLangButton = document.getElementById("ru-lang")
    const enLangButton = document.getElementById("en-lang")
    const bodyMainPage = document.getElementById("main-body")

    if (ruLangButton && enLangButton) {
        enLangButton.addEventListener("click", function () {
            bodyMainPage.innerHTML = enLanguageMainHTML
            func()
        })

        ruLangButton.addEventListener("click", function () {
            bodyMainPage.innerHTML = ruLanguageMainHTML
            func()
        })
    }

    // product size
    productSizeContainer = document.querySelectorAll(".product__size-item")
    productSizeContainer.forEach(item => {
        item.addEventListener("click", function () {
            productSizeContainer.forEach(i => {
                i.classList.remove("product__size-item_active")
            })
            item.classList.add("product__size-item_active")
        })
    })

    // to cart.html
    const cartSvgButton = document.getElementById("cart-svg")
    if (cartSvgButton) {
        cartSvgButton.addEventListener("click", () => {
            window.location.href = "cart.html"
        })
    }



}

func()