Vue.component('saludo', {
    template: //html
        `
    <div>
    <h1>{{saludo}}</h1>
    <h3>asalsa</h3>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola desde Vue'
        }
    }
});