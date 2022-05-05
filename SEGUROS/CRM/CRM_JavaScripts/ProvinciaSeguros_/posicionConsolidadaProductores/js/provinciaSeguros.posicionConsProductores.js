provinciaSeguros = {};
provinciaSeguros.posicionConsProductores = {};

provinciaSeguros.posicionConsProductores.inicializar = function () {
    
    // Ejecucion Bootstrap
    window.app = new Vue({
        el: "#app",
        data: {
            name: ''
        },
        computed: {
            showAlert() {
                return this.name.length > 4 ? true : false;
            }
        }
    });
    
    provinciaSeguros.posicionConsProductores.servicios = {};
    provinciaSeguros.posicionConsProductores.inicializarServicios();
    provinciaSeguros.posicionConsProductores.modelo = {};
    provinciaSeguros.posicionConsProductores.inicializarModelo();
}
