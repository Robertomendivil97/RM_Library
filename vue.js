
Vue.createApp({
    mounted(){
             var today = new Date();
             this.$refs.p.textContent = 'Current Date:  ' + today;
    },

    
    data(){
        return{
            show: false, 
            hideCompleted: false,
            
            text: '',
            valor: 0,
            
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
            
        },
        addline(){
            this.text += event.target.value;
            event.target.value = ''+ ' ';
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