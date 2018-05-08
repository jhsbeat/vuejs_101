Vue.component('todo-footer', {
    template: '<p>This is another global child component</p>'
});

var todoListCmp = {
    template: '<p>This is another local child component</p>'
};

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    components: {
        'todo-list': todoListCmp
    },
    beforeCreate: function(){
        console.log('beforeCreate');
    },
    created: function(){
        console.log('created');
    },
    mounted: function(){
        console.log('mounted');
        this.message = 'Hello Vue!';
    },
    updated: function(){
        console.log('updated');
    }
});