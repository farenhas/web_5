const { createApp } = Vue
const app  = createApp({
    data() { return{
        books: [
            { title: 'title1', author:'a', year:'01', isBlock: false },
            { title: 'title2', author:'b', year:'02', isBlock: false },
            { title: 'title3', author:'c', year:'03', isBlock: false },
            { title: 'title4', author:'d', year:'04', isBlock: false }
        ]
    }
},
    methods: {
        funct(listbook){
            listbook.isBlock =!listbook.isBlock

        }
    }

})
app.mount('#list')