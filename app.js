const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        getUser() {
            axios.get('https://randomuser.me/api/')
                .then((res) => {
                    this.firstName = res.data.results[0].name.first;
                    this.lastName = res.data.results[0].name.last;
                    this.email = res.data.results[0].email;
                    this.gender = res.data.results[0].gender;
                    this.picture = res.data.results[0].picture.large;

                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});

app.mount('#app');