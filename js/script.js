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
            {name: 'Contact', url: '#'}
      
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
                url: 'img/fi-roundup-400x263.jpg',
                description: 'Roundup: My New Favourite Recipes For Healthy Living'
            },
            {
                url: 'img/fi-korean-food-400x263.jpg',
                description: 'Meal Prep: Korean Bibimbap with Kimchi'
            },
            {
                url: 'img/fi-toasts-400x263.jpg',
                description: 'Why These Toasts with Tea are My New Favorite'
            },
            {
                url: 'img/fi-street-food-400x263.jpg',
                description: 'Exploring Street Food in Bangkok'
            },
            {
                url: 'img/fi-organic-breakfast-400x263.jpg',
                description: 'Organic Choices For Healthier Living'
            },
            {
                url: 'img/fi-water-side-rest-400x263.jpg',
                description: '5 Waterside Restaurants in Istanbul for Special Events'
            },
        ],

        // array oggetti url-foto/descrizione sezione immagini footer
        footerImgs: [
            {
                url: 'img/Yogurt-Nan-400x263.jpg',
                description: 'Lunch Favourite with Salad, Naan And Beans'
            },
            {
                url: 'img/fi-korean-food-400x263.jpg',
                description: 'Fruit Platter with Banana, Mango, Berries and Orange'
            },
            {
                url: 'img/fi-toasts-400x263.jpg',
                description: 'Breakfast Delight With Strawberry, Egg and Fruit'
            },
            {
                url: 'img/fi-street-food-400x263.jpg',
                description: 'Ice Cream Heaven With Vanilla, Chocolate And Pistachio'
            }
        ],

        // array oggetti nome/link/classe icone social
        socialIcons: [
            {
                name: 'facebook',
                link: 'https://www.facebook.com',
                class: 'fab fa-facebook-f'
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com',
                class: 'fab fa-instagram'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com',
                class: 'fab fa-twitter'
            },
            {
                name: 'youtube',
                link: 'https://www.youtube.com',
                class: 'fab fa-youtube'
            },
            {
                name: 'pinterest',
                link: 'https://www.pinterest.com',
                class: 'fab fa-pinterest'
            }
        ]
    },

    // mounted per avere la lista dei link del footer, eliminando la
    // voce Home dall'elenco
    mounted(){
        let navList=[];
        this.navbarListItems.forEach((el)=>{
            if(el.name!=='Home'){
                navList.push(el.name)
            }
        });
        return this.footerNavList=navList
    },
    methods: {

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
        }
    }
});
Vue.config.devtools=true;