/* funcion de inicio (funtion ready) */
$(function () {
    /* para mostrar mensaje cuando se pasa el cursor sobre el boton */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    $("a").click(function () {
        var enlace = this.hash;
        console.log(enlace)
        $("html, body").animate(
            {
                scrolltop: $(enlace).offset().top - 89
            }, 
            3000
        )
    });
});




