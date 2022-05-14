
Vue.createApp({
    mounted(){
             var today = new Date();
             this.$refs.p.textContent = 'Current Date:  ' + today;
    },

    
    data(){
        return{
            show: false, //this.name == 'Erik'? true : false,
            hideCompleted: false,
            name: 'Chihuahua',
            text: '',
            valor: 0,
            lugares: ['Oaxaca','San Luis Potosí','Tampico', 'Xalapa'],
            mex: 'Tampico',
            books: [
                { Title: 'Opencv', Topic: 'Computer Vision', URL: 'https://opencv.org/'},
                { Title: 'ROS', Topic: 'Robotics', URL: 'https://ros.org/' },
                { Title: 'Robotics and Slam', Topic: 'Robotics', URL: 'https://rosslam.org/' },
                { Title: 'Kinematics', Topic: 'Robotics', URL: 'https://ros_kinematics.org/' },
                { Title: 'Path Planning', Topic: 'Robotics', URL: 'https://rosplan.org/' }
            ]
        }
    },


    methods: {

        alerta(){
            alert('Valor de name es: ' + this.name)
            //var nombre = this.name
            //this.name = 'Felipe'
            //nombre = 'Jose'
        },
        addline(){
            this.text += event.target.value;
            event.target.value = '';
        },

        toogleShow(){
            this.show = !this.show
        },

        queuePurchase() {
            this.queue.push( this.books );
          }
    },

    computed: {
        mostrar() {
            return this.books
           // return this.show
           //     ? this.tasks.filter((t) => !t.done)
            //    : this.tasks
        }
    },

}).mount('#app');