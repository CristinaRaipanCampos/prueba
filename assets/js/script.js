/* funcion de inicio (funtion ready) */
$(function () {
    /* funcion que realiza el scroll lento */
    $("a").click(function () {
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 1000, function () {
            window.location.hash = hash;
        });
    });
    /* para mostrar mensaje cuando se pasa el cursor sobre el boton */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    /* funcion para desaparecer el text area */
    $("#boton-form").click(function () {
        $(".form-control").toggle(500);
    });
    $("#cerrar").click(function () {
        $(".form-control").toggle(500);
    });
    /* muestra mensaje en el modal */
    $("#boton-form").click(function () {
        //obtener valor usando jquery
        var nombreFromInput = $("#nombre").val();
        document.getElementById('mostrarNombre').innerHTML = nombreFromInput;
        //obtener valor usando javaScript
        var asuntoFromInput = document.getElementById("asunto").value;
        document.getElementById('mostrarAsunto').innerHTML = asuntoFromInput;
    })
    /* limpia los campos del formulario */
    $('#cerrar').click(function () {
        /* document.getElementById("nombre").value = "";
        document.getElementById("asunto").value = ""; */
        $('#nombre').val("");
        $('#asunto').val("");
    });


});
