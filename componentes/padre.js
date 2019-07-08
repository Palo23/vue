Vue.component('padre', {
    template: //html
        `
    <div class="p-5 bg-dark text-white">
    <h2>Componente padre {{numeroPadre}}</h2>
    <button class="btn btn-danger" @click="numeroPadre++">+</button>
    {{nombrePadre}}
    <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,

    data() {
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }

})