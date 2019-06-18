const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Soy el ciclo de vida de vue'
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        //Al crear los métodos, observadores y eventos, pero aún no accede al DOM.
        //Aún no se puede acceder a "el"
        console.log('created');
    },
    beforeMount(){
        //Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted(){
        //Se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate(){
        //Al detectar un cambio
        console.log('beforeUpdate');
    },
    updated(){
        //Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy(){
        //Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed(){
        //Se destruye la instancia
        console.log('destroyed');
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }


})