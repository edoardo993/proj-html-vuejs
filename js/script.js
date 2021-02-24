new Vue({
    el: '#app',
    data: {
        
        // input utente per l'iscrizione al sito nel footer
        userEmailInput: '',

        // lista link footer
        footerNavList: [],

        // array oggetti navbar
        navbarListItems: [

            {name: 'Home', url:'#'},
            {name: 'Recipes', url: '#'},
            {name: 'Places', url: '#'},
            {name: 'Blog', url: '#'},
            {name: 'About', url: '#'},
            {name: 'Contact', url: '#'},
            {name: '<i class="fas fa-search"></i>', url: '#'}
      
        ],

        // array oggetti url-foto/titolo sezione foodie journal
        foodieJournalPhotoContainer: [
            {
                url: 'img/single-post-img3.jpg',
                title: 'Food Corner: Top Japanese Restaurants for Sushi'
            },
            {
                url: 'img/fi-roundup.jpg',
                title: 'Roundup: My New Favourite Recipes For Healthy Living'
            },
            {
                url: 'img/fi-toasts.jpg',
                title: 'Why These Toasts with Tea are My New Favorite'
            }
        ],
        popularLinks: [
            {
                url: 'img/single-post-img3-66x66.jpg',
                title: 'Food Corner: Top Japanese Restaurants for Sushi',
                date: 'March 25th, 2019'
            },
            {
                url: 'img/singapore-featured-image-66x66.jpg',
                title: 'City Guide: Singapore',
                date: 'March 25th, 2019'
            },
            {
                url: 'img/slide1-bg-66x66.jpg',
                title: '6 Nutritional Tips to Help Burn Body Fat',
                date: 'March 25th, 2019'
            }
        ],

        // array oggetti url-foto/descrizione sezione popular recipes
        popularRecipesImgsRight: [
            {
                url: 'img/Mixed-fruits-460x295.jpg',
                description: 'Fruit Platter with Banana, Mango, Berries and Orange'
            },
            {
                url: 'img/r-rachel-park-366508-unsplash-min-460x295.jpg',
                description: 'Breakfast Delight With Strawberry, Egg And Fruit'
            },
            {
                url: 'img/r-michelle-tsang-500721-unsplash-min-460x295.jpg',
                description: 'Ice Cream Heaven With Vanilla, Chocolate And Pistachio'
            },
            {
                url: 'img/quick-summer-drink-460x295.jpg',
                description: 'Video Recipe: How to Make a Cool Summer Drink'
            },
            {
                url: 'img/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
                description: 'Ketogenic Diet Recipe with Avocado'
            },
            {
                url: 'img/perfect-cosmopolitan-460x295.jpg',
                description: 'Video Reciper: The Perfect Cosmopolitan'
            },
            {
                url: 'img/fi2x-6-460x295.jpg',
                description: 'Summer Cheese Platter with Berries, Crackers and Wine'
            },
            {
                url: 'img/r-brooke-lark-96398-unsplash-min-460x295.jpg',
                description: 'Strawberry Fruit Pies Served With Tea'
            }
        ],

        // array oggetti url-foto/descrizione sezione culinary collection
        culinarySectionImgs: [
            {
                url: 'img/drinks-recipes.png',
                description: 'drinks'
            },
            {
                url: 'img/soups-recipes.png',
                description: 'soups'
            },
            {
                url: 'img/baking-recipes.png',
                description: 'bakery'
            },
            {
                url: 'img/dinner-recipes.png',
                description: 'dinner'
            },
            {
                url: 'img/healthy-recipes.png',
                description: 'healthy'
            },
            {
                url: 'img/staff-picks.png',
                description: 'staff picks'
            },
            {
                url: 'img/premium-recipes.png',
                description: 'appetisers'
            },
            {
                url: 'img/quick-easy-recipes.png',
                description: 'quick & easy'
            }
        ],

        // array oggetti url-foto/descrizione sezione miniatures container
        miniaturesContainer: [
            {
                url: 'img/fi-roundup-600x395.jpg',
                description: 'Roundup: My New Favourite Recipes For Healthy Living'
            },
            {
                url: 'img/fi-korean-food-1200x790.jpg',
                description: 'Meal Prep: Korean Bibimbap with Kimchi'
            },
            {
                url: 'img/fi-toasts-1200x790.jpg',
                description: 'Why These Toasts with Tea are My New Favorite'
            },
            {
                url: 'img/fi-street-food-1200x790.jpg',
                description: 'Exploring Street Food in Bangkok'
            },
            {
                url: 'img/fi-organic-breakfast-1200x790.jpg',
                description: 'Organic Choices For Healthier Living'
            },
            {
                url: 'img/fi-water-side-rest-1200x790.jpg',
                description: '5 Waterside Restaurants in Istanbul for Special Events'
            },
        ],
        hiddenMiniaturesContainer: [
            {
                url: 'img/fruits-coffee.png',
                description: 'Tasting Banana Chocolate Loaf Cake in Singapore'
            },
            {
                url: 'img/tea-cups.png',
                description: 'Popular Malaysian Rice Dishes Reviewed'
            },
            {
                url: 'img/nuts.png',
                description: 'Why These Toasts with Tea are My New Favorite'
            },
            {
                url: 'img/people-bar.png',
                description: 'Hanging Out in Buenos Aires - Finding the Bet Outdoor Cafes Around the City'
            },
            {
                url: 'img/egg-avocado.png',
                description: '6 Nutritional Tips to Help Burn Body Fat'
            },
            {
                url: 'img/singapore-view.png',
                description: 'City Guide: Singapore'
            },
        ],

        // array oggetti url-foto/descrizione sezione immagini footer
        footerImgs: [
            {
                url: 'img/Yogurt-Nan-400x263.jpg',
                description: 'Lunch Favourite with Salad, Naan And Beans'
            },
            {
                url: 'img/Mixed-fruits-400x263.jpg',
                description: 'Fruit Platter with Banana, Mango, Berries and Orange'
            },
            {
                url: 'img/r-rachel-park-366508-unsplash-min-400x263.jpg',
                description: 'Breakfast Delight With Strawberry, Egg and Fruit'
            },
            {
                url: 'img/r-michelle-tsang-500721-unsplash-min-400x263.jpg',
                description: 'Ice Cream Heaven With Vanilla, Chocolate And Pistachio'
            }
        ],
        footerContacts: [
            {
                icon: '<i class="fas fa-map-marker-alt"></i>',
                info: '775 New York Ave, Brroklyn, Kings, New York 11203'
            },
            {
                icon: '<i class="fas fa-phone"></i>',
                info: '+ 0100-505-0000'
            },
            {
                icon: '<i class="fas fa-envelope"></i>',
                info: 'info@your-domain.com'
            }
        ],

        // array oggetti nome/link/classe icone social
        socialIcons: [
            {
                name: 'Facebook',
                link: 'https://www.facebook.com',
                class: 'fab fa-facebook-f',
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com',
                class: 'fab fa-instagram'
            },
            {
                name: 'Twitter',
                link: 'https://www.twitter.com',
                class: 'fab fa-twitter'
            },
            {
                name: 'Youtube',
                link: 'https://www.youtube.com',
                class: 'fab fa-youtube'
            },
            {
                name: 'Pinterest',
                link: 'https://www.pinterest.com',
                class: 'fab fa-pinterest'
            }
        ]
    },

    // richiamo nel mounted la funzione footerNavListCreator
    mounted(){
        this.footerNavListCreator()
    },
    methods: {

        // funzione per generare dalla lista link navbar un'altra lista
        // escludendo gli item 'Home' e icona search
        footerNavListCreator(){
            let navList=[];
            this.navbarListItems.forEach((el)=>{
            if(el.name!=='Home' && el.name!=='<i class="fas fa-search"></i>'){
                navList.push(el.name)
            }
            });
            return this.footerNavList=navList
        },

        // funzione per mostrare div con display:none quando si va in hover
        // su un'immagine (con classe comune, per div con più immagini)
        viewHoverCommonClass(commonClass, index){
            let hoverDiv=document.getElementsByClassName(commonClass)[index];
            hoverDiv.classList.remove('hide')
        },

        // funzione per nascondere div con display:block quando lasciamo l'hover
        // da un'immagine (con classe comune, per div con più immagini)
        hideHoverCommonClass(commonClass, index){
            let hoverDiv=document.getElementsByClassName(commonClass)[index];
            hoverDiv.classList.add('hide')
        },

        // funzione per mostrare div con display:none quando si va in hover
        // su un'immagine (con ID, per div con una sola immagine)
        viewHoverId(idName){
            let hoverDiv=document.getElementById(idName);
            hoverDiv.classList.remove('hide')
        },

        // funzione per nascondere div con display:block quando lasciamo l'hover
        // da un'immagine (con ID, per div con una sola immagine)
        hideHoverId(idName){
            let hoverDiv=document.getElementById(idName);
            hoverDiv.classList.add('hide')
        },

        // funzione per il pulsante 'load more posts' per il caricamento async
        // dei restanti post (#carineriaEstetica)
        clickToLoadPosts(idName){

            let hoverDivScnd=document.getElementById(idName);
            hoverDivScnd.classList.remove('hide');

            setTimeout(function(){
                let loadingSetPosts=document.getElementById('loading-set-posts');
                loadingSetPosts.classList.add('hide');

                let morePostsButton=document.getElementById('more-posts-button');
                morePostsButton.classList.add('hide');

                let morePostsDiv=document.getElementById('more-posts-hidden');
                morePostsDiv.classList.remove('hide');
            }, 1400)
        }
    }
});
Vue.config.devtools=true;