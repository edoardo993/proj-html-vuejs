new Vue({
    el: '#app',
    data: {
        navbarListItems: [

            {name: 'Home'},
            {name: 'Recipes'},
            {name: 'Places'},
            {name: 'Blog'},
            {name: 'About'},
            {name: 'Contact'},
            {name: '<i class="fas fa-search"></i>'}
      
        ]
    },
    methods: {
        
    }
});
Vue.config.devtools=true;