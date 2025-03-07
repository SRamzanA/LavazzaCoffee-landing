const enLanguageMainHTML = `
        <header>
        <div class="header__language-container">
            <div class="header__language-actions">
                <span id="ru-lang" class="header__language-item">RU</span>
                <span id="en-lang" class="header__language-item header__language-item_active">EN</span>
            </div>
            <p class="header__tel">+371000000</p>
        </div>
        <div class="header__container">
            <nav>
                <a class="nav__link nav__link_active" href="index.html">HOME</a>
                <a class="nav__link" href="#">ABOUT</a>
                <a class="nav__link" href="#">MENU</a>
                <a class="nav__link" href="reservation.html">RESERVATION</a>
            </nav>
            <img class="header__logo" src="img/logo.png" alt="">
            <div class="header__action">
                <img class="header-icon" src="img/actions__icon/user.png" alt="">
                <img class="header-icon" src="img/actions__icon/favorite.png" alt="">
                <img class="header-icon" src="img/actions__icon/cart.png" alt="">
            </div>
        </div>
    </header>
    <main>
        <div class="intro">
            <img class="intro__bg-img" src="img/intro.png" alt="">
            <div class="intro__container">
                <h1 class="intro__title">ROASTED COFFEE BEST CHOICE</h1>
                <p class="intro__subtitle">The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.</p>
                <div class="intro__button-container">
                    <a class="intro__button button-buy" href="reservation.html">BUY NOW</a>
                    <a class="intro__button button-read" href="">READ MORE</a>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="about__container">
                <div class="about__image"><img src="img/about.png" alt=""></div>
                <div class="about__text">
                    <h1>ROASTED COFFEE</h1>
                    <p>Carefully selected Arabica and Robusta beans create a balanced blend with a rich aroma and full-bodied, intense flavor. Slow roasting gives the coffee a unique, memorable character, revealing all the flavor nuances: from light fruity notes to delicate hints of dark chocolate and roasted nuts. Ideal for preparing espresso, cappuccino, and other exquisite coffee drinks, giving a true, incomparable enjoyment.</p>
                </div>
            </div>
        </div>
        <div class="catalog">
            <h1 class="catalog__title">CATALOG</h1>
            <div class="catalog__cards-container">

                <div class="card">
                    <div class="card__image-container"><img src="img/catalog/product1.png" alt=""></div>
                    <h1 class="card__title">LAVAZZA COFFEE</h1>
                    <div class="card__price">
                        <p>$19.99 <span>$29.99</span></p>
                        <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                    </div>
                    <div class="card__back">
                        <span class="card__button-back">BACK</span>
                        <h1 class="card__title">LAVAZZA COFFEE</h1>
                        <p>Discover the rich aroma and exceptional flavor that makes Lavazza a symbol of quality and passion in every cup. Perfect for your everyday moments of indulgence.</p>
                        <button class="card__add-to-cart">ADD TO CART</button>
                    </div>
                    <span class="card__rev-button">READ MORE</span>
                </div>

                <div class="card">
                    <div class="card__image-container"><img src="img/catalog/product2.png" alt=""></div>
                    <h1 class="card__title">LAVAZZA COFFEE</h1>
                    <div class="card__price">
                        <p>$19.99</p>
                        <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                    </div>
                    <div class="card__back">
                        <span class="card__button-back">BACK</span>
                        <h1 class="card__title">LAVAZZA COFFEE</h1>
                        <p>Discover the rich aroma and exceptional flavor that makes Lavazza a symbol of quality and passion in every cup. Perfect for your everyday moments of indulgence.</p>
                        <button class="card__add-to-cart">ADD TO CART</button>
                    </div>
                    <span class="card__rev-button">READ MORE</span>
                </div>
                
                <div class="card">
                    <div class="card__image-container"><img src="img/catalog/product1.png" alt=""></div>
                    <h1 class="card__title">LAVAZZA COFFEE</h1>
                    <div class="card__price">
                        <p>$19.99</p>
                        <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                    </div>
                    <div class="card__back">
                        <span class="card__button-back">BACK</span>
                        <h1 class="card__title">LAVAZZA COFFEE</h1>
                        <p>Discover the rich aroma and exceptional flavor that makes Lavazza a symbol of quality and passion in every cup. Perfect for your everyday moments of indulgence.</p>
                        <button class="card__add-to-cart">ADD TO CART</button>
                    </div>
                    <span class="card__rev-button">READ MORE</span>
                </div>

                <div class="card">
                    <div class="card__image-container"><img src="img/catalog/product1.png" alt=""></div>
                    <h1 class="card__title">LAVAZZA COFFEE</h1>
                    <div class="card__price">
                        <p>$19.99 <span>$29.99</span></p>
                        <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                    </div>
                    <div class="card__back">
                        <span class="card__button-back">BACK</span>
                        <h1 class="card__title">LAVAZZA COFFEE</h1>
                        <p>Discover the rich aroma and exceptional flavor that makes Lavazza a symbol of quality and passion in every cup. Perfect for your everyday moments of indulgence.</p>
                        <button class="card__add-to-cart">ADD TO CART</button>
                    </div>
                    <span class="card__rev-button">READ MORE</span>
                </div>

                <div class="card">
                    <div class="card__image-container"><img src="img/catalog/product2.png" alt=""></div>
                    <h1 class="card__title">LAVAZZA COFFEE</h1>
                    <div class="card__price">
                        <p>$19.99</p>
                        <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                    </div>
                    <div class="card__back">
                        <span class="card__button-back">BACK</span>
                        <h1 class="card__title">LAVAZZA COFFEE</h1>
                        <p>Discover the rich aroma and exceptional flavor that makes Lavazza a symbol of quality and passion in every cup. Perfect for your everyday moments of indulgence.</p>
                        <button class="card__add-to-cart">ADD TO CART</button>
                    </div>
                    <span class="card__rev-button">READ MORE</span>
                </div>

                <div class="card">
                    <div class="card__image-container"><img src="img/catalog/product1.png" alt=""></div>
                    <h1 class="card__title">LAVAZZA COFFEE</h1>
                    <div class="card__price">
                        <p>$19.99 <span>$29.99</span></p>
                        <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                    </div>
                    <div class="card__back">
                        <span class="card__button-back">BACK</span>
                        <h1 class="card__title">LAVAZZA COFFEE</h1>
                        <p>Discover the rich aroma and exceptional flavor that makes Lavazza a symbol of quality and passion in every cup. Perfect for your everyday moments of indulgence.</p>
                        <button class="card__add-to-cart">ADD TO CART</button>
                    </div>
                    <span class="card__rev-button">READ MORE</span>
                </div>

            </div>
        </div>
        <div class="news">
            <h1 class="news__title">NEWS</h1>
            <div class="news__container">
                <div class="new__item">
                    <div class="new__image"><img src="img/news/product1.png" alt=""></div>
                    <h1>LAVAZZA COFFEE</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div class="new__item">
                    <div class="new__image"><img src="img/news/product2.png" alt=""></div>
                    <h1>LAVAZZA COFFEE</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div class="new__item">
                    <div class="new__image"><img src="img/news/product3.png" alt=""></div>
                    <h1>LAVAZZA COFFEE</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="footer__content">
            <div class="footer__logo"><img src="img/footer-logo.png" alt=""></div>
            <div class="footer__links">
                <a href="index.html">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">MENU</a>
                <a href="reservation.html">RESERVATION</a>
            </div>
            <div class="footer__links">
                <a href="#">CONTACTS</a>
                <a href="#">PRIVACY POLICY</a>
            </div>
        </div>
    </footer>
        `
const ruLanguageMainHTML = `
        <header>
            <div class="header__language-container">
                <div class="header__language-actions">
                    <span id="ru-lang" class="header__language-item header__language-item_active">RU</span>
                    <span id="en-lang" class="header__language-item">EN</span>
                </div>
                <p class="header__tel">+371000000</p>
            </div>
            <div class="header__container">
                <nav>
                    <a class="nav__link nav__link_active" href="index.html">ГЛАВНАЯ</a>
                    <a class="nav__link" href="#">О НАС</a>
                    <a class="nav__link" href="#">МЕНЮ</a>
                    <a class="nav__link" href="reservation.html">БРОНИРОВАНИЕ</a>
                </nav>
                <img class="header__logo" src="img/logo.png" alt="">
                <div class="header__action">
                    <img class="header-icon" src="img/actions__icon/user.png" alt="">
                    <img class="header-icon" src="img/actions__icon/favorite.png" alt="">
                    <img class="header-icon" src="img/actions__icon/cart.png" alt="">
                </div>
            </div>
        </header>
        <main>
            <div class="intro">
                <img class="intro__bg-img" src="img/intro.png" alt="">
                <div class="intro__container">
                    <h1 class="intro__title">ЛУЧШИЙ ВЫБОР ЖАРЕНОГО КОФЕ</h1>
                    <p class="intro__subtitle">Кофе готовится путем предварительной обжарки зеленых кофейных зерен на раскаленных углях в жаровне. предоставляется возможность попробовать.</p>
                    <div class="intro__button-container">
                        <a class="intro__button button-buy" href="reservation.html">КУПИТЬ СЕЙЧАС</a>
                        <a class="intro__button button-read" href="">ПОДРОБНЕЕ</a>
                    </div>
                </div>
            </div>
            <div class="about">
                <div class="about__container">
                    <div class="about__image"><img src="img/about.png" alt=""></div>
                    <div class="about__text">
                        <h1>ОБЖАРЕННЫЙ КОФЕ</h1>
                        <p>Тщательно отобранные зерна арабики и робусты создают сбалансированный купаж с насыщенным ароматом и богатым, насыщенным вкусом. Медленная обжарка придает кофе неповторимый, запоминающийся характер, раскрывая все оттенки вкуса: от легких фруктовых нот до деликатных нюансов темного шоколада и поджаренных орехов. Идеально подходит для приготовления эспрессо, капучино и других изысканных кофейных напитков, даря настоящее, ни с чем не сравнимое наслаждение.</p>
                    </div>
                </div>
            </div>
            <div class="catalog">
                <h1 class="catalog__title">КАТАЛОГ</h1>
                <div class="catalog__cards-container">
                    <div class="card">
                        <div class="card__image-container"><img src="img/catalog/product1.png" alt=""></div>
                        <h1 class="card__title">КОФЕ LAVAZZA</h1>
                        <div class="card__price">
                            <p>$19.99 <span>$29.99</span></p>
                            <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                        </div>
                        <div class="card__back">
                            <span class="card__button-back">НАЗАД</span>
                            <h1 class="card__title">LAVAZZA COFFEE</h1>
                            <p>Откройте для себя богатый аромат и исключительный вкус, которые делают Lavazza символом качества и страсти в каждой чашке. Идеально подходит для ваших ежедневных моментов наслаждения.</p>
                            <button class="card__add-to-cart">В КОРЗИНУ</button>
                        </div>
                        <span class="card__rev-button">ПОДРОБНЕЕ</span>
                    </div>
                    <div class="card">
                        <div class="card__image-container"><img src="img/catalog/product2.png" alt=""></div>
                        <h1 class="card__title">КОФЕ LAVAZZA</h1>
                        <div class="card__price">
                            <p>$19.99</p>
                            <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                        </div>
                        <div class="card__back">
                            <span class="card__button-back">НАЗАД</span>
                            <h1 class="card__title">LAVAZZA COFFEE</h1>
                            <p>Откройте для себя богатый аромат и исключительный вкус, которые делают Lavazza символом качества и страсти в каждой чашке. Идеально подходит для ваших ежедневных моментов наслаждения.</p>
                            <button class="card__add-to-cart">В КОРЗИНУ</button>
                        </div>
                        <span class="card__rev-button">ПОДРОБНЕЕ</span>
                    </div>
                    <div class="card">
                        <div class="card__image-container"><img src="img/catalog/product1.png" alt=""></div>
                        <h1 class="card__title">КОФЕ LAVAZZA</h1>
                        <div class="card__price">
                            <p>$19.99</p>
                            <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                        </div>
                        <div class="card__back">
                            <span class="card__button-back">НАЗАД</span>
                            <h1 class="card__title">LAVAZZA COFFEE</h1>
                            <p>Откройте для себя богатый аромат и исключительный вкус, которые делают Lavazza символом качества и страсти в каждой чашке. Идеально подходит для ваших ежедневных моментов наслаждения.</p>
                            <button class="card__add-to-cart">В КОРЗИНУ</button>
                        </div>
                        <span class="card__rev-button">ПОДРОБНЕЕ</span>
                    </div>
                    <div class="card">
                        <div class="card__image-container"><img src="img/catalog/product1.png" alt=""></div>
                        <h1 class="card__title">КОФЕ LAVAZZA</h1>
                        <div class="card__price">
                            <p>$19.99 <span>$29.99</span></p>
                            <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                        </div>
                        <div class="card__back">
                            <span class="card__button-back">НАЗАД</span>
                            <h1 class="card__title">LAVAZZA COFFEE</h1>
                            <p>Откройте для себя богатый аромат и исключительный вкус, которые делают Lavazza символом качества и страсти в каждой чашке. Идеально подходит для ваших ежедневных моментов наслаждения.</p>
                            <button class="card__add-to-cart">В КОРЗИНУ</button>
                        </div>
                        <span class="card__rev-button">ПОДРОБНЕЕ</span>
                    </div>
                    <div class="card">
                        <div class="card__image-container"><img src="img/catalog/product2.png" alt=""></div>
                        <h1 class="card__title">КОФЕ LAVAZZA</h1>
                        <div class="card__price">
                            <p>$19.99</p>
                            <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                        </div>
                        <div class="card__back">
                            <span class="card__button-back">НАЗАД</span>
                            <h1 class="card__title">LAVAZZA COFFEE</h1>
                            <p>Откройте для себя богатый аромат и исключительный вкус, которые делают Lavazza символом качества и страсти в каждой чашке. Идеально подходит для ваших ежедневных моментов наслаждения.</p>
                            <button class="card__add-to-cart">В КОРЗИНУ</button>
                        </div>
                        <span class="card__rev-button">ПОДРОБНЕЕ</span>
                    </div>
                    <div class="card">
                        <div class="card__image-container"><img src="img/catalog/product1.png" alt=""></div>
                        <h1 class="card__title">КОФЕ LAVAZZA</h1>
                        <div class="card__price">
                            <p>$19.99 <span>$29.99</span></p>
                            <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="24"><path id="like-path" class="like" fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.12C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>
                        </div>
                        <div class="card__back">
                            <span class="card__button-back">НАЗАД</span>
                            <h1 class="card__title">LAVAZZA COFFEE</h1>
                            <p>Откройте для себя богатый аромат и исключительный вкус, которые делают Lavazza символом качества и страсти в каждой чашке. Идеально подходит для ваших ежедневных моментов наслаждения.</p>
                            <button class="card__add-to-cart">В КОРЗИНУ</button>
                        </div>
                        <span class="card__rev-button">ПОДРОБНЕЕ</span>
                    </div>
                </div>
            </div>
            <div class="news">
                <h1 class="news__title">НОВОЕ</h1>
                <div class="news__container">
                    <div class="new__item">
                        <div class="new__image"><img src="img/news/product1.png" alt=""></div>
                        <h1>КОФЕ LAVAZZA</h1>
                        <p>Существует множество вариаций отрывков из "Lorem Ipsum", но большинство из них в той или иной форме подверглись изменениям из-за привнесенного юмора или случайн слов</p>
                    </div>
                    <div class="new__item">
                        <div class="new__image"><img src="img/news/product2.png" alt=""></div>
                        <h1>КОФЕ LAVAZZA</h1>
                        <p>Существует множество вариаций отрывков из "Lorem Ipsum", но большинство из них в той или иной форме подверглись изменениям из-за привнесенного юмора или случайн слов</p>
                    </div>
                    <div class="new__item">
                        <div class="new__image"><img src="img/news/product3.png" alt=""></div>
                        <h1>КОФЕ LAVAZZA</h1>
                        <p>Существует множество вариаций отрывков из "Lorem Ipsum", но большинство из них в той или иной форме подверглись изменениям из-за привнесенного юмора или случайн слов</p>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div class="footer__content">
                <div class="footer__logo"><img src="img/footer-logo.png" alt=""></div>
                <div class="footer__links">
                    <a href="index.html">ГЛАВНАЯ</a>
                    <a href="#">О НАС</a>
                    <a href="#">МЕНЮ</a>
                    <a href="reservation.html">БРОНИРОВАНИЕ</a>
                </div>
                <div class="footer__links">
                    <a href="#">КОНТАКТЫ</a>
                    <a href="#">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                </div>
            </div>
        </footer>
        <script src="js/script.js"></script>
        <script src="js/language.js"r></script>
        `