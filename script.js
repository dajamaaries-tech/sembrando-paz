
/* ==============================================
   SEMBRANDO PAZ DESDE NUESTRO TERRITORIO
   Programación de la cartilla digital interactiva
   Cátedra de la Paz - 2026
============================================== */


/* ==============================================
   1. ESTRUCTURA DE LAS 20 PÁGINAS
============================================== */

const paginas = [

    {
        titulo: "Portada",
        contenido: ""
    },

    {
        titulo: "Índice interactivo",
        contenido: ""
    },

    {
        titulo: "Introducción",
        contenido: `
            <p>
                Espacio destinado a la introducción
                de nuestra cartilla digital.
            </p>
        `
    },

    {
        titulo: "¿Qué es la paz territorial?",
        contenido: `
            <p>
                Aquí desarrollaremos el concepto,
                las características y la importancia
                de la paz territorial.
            </p>
        `
    },

    {
        titulo: "La paz desde la mirada de la comunidad",
        contenido: `
            <p>
                Aquí incorporaremos las percepciones
                de los integrantes de la comunidad.
            </p>
        `
    },

    {
        titulo: "Conociendo nuestro territorio",
        contenido: `
            <p>
                Aquí presentaremos la ubicación y
                las características del territorio.
            </p>
        `
    },

    {
        titulo: "Identidad y cultura de nuestro territorio",
        contenido: `
            <p>
                Espacio destinado a las características
                culturales, sociales y comunitarias.
            </p>
        `
    },

    {
        titulo: "Conflictos que afectan la paz",
        contenido: `
            <p>
                Aquí identificaremos las problemáticas
                encontradas durante el trabajo de campo.
            </p>
        `
    },

    {
        titulo: "Escuchando a nuestra comunidad",
        contenido: `
            <p>
                Espacio reservado para los dos
                testimonios audiovisuales.
            </p>

            <div class="tarjetas">

                <div class="tarjeta">
                    <h3>Testimonio 1</h3>
                    <p>Video pendiente de incorporar.</p>
                </div>

                <div class="tarjeta">
                    <h3>Testimonio 2</h3>
                    <p>Video pendiente de incorporar.</p>
                </div>

            </div>
        `
    },

    {
        titulo: "Análisis de las problemáticas",
        contenido: `
            <p>
                Aquí analizaremos los resultados
                obtenidos durante las entrevistas
                y el trabajo comunitario.
            </p>
        `
    },

    {
        titulo: "Instituciones que construyen paz",
        contenido: `
            <p>
                Aquí presentaremos las funciones,
                programas y aportes de la entidad visitada.
            </p>
        `
    },

    {
        titulo: "Nuestra experiencia institucional",
        contenido: `
            <p>
                Espacio destinado al video de la visita
                institucional y la reflexión académica.
            </p>
        `
    },

    {
        titulo: "Derechos humanos y cultura de paz",
        contenido: `
            <p>
                Aquí desarrollaremos los conceptos
                de dignidad, igualdad, respeto,
                inclusión y justicia social.
            </p>
        `
    },

    {
        titulo: "Resolución pacífica de conflictos",
        contenido: `
            <p>
                Aquí presentaremos estrategias
                de diálogo, mediación, negociación
                y construcción de acuerdos.
            </p>
        `
    },

    {
        titulo: "Voces del territorio",
        contenido: `
            <p>
                Espacio reservado para las experiencias,
                fotografías y testimonios autorizados
                de la comunidad.
            </p>
        `
    },

    {
        titulo: "Aprendamos jugando",
        contenido: `
            <h3>Actividades educativas</h3>

            <div class="tarjetas">

                <div class="tarjeta">
                    <h3>Sopa de letras</h3>
                    <p>Actividad pendiente de desarrollar.</p>
                </div>

                <div class="tarjeta">
                    <h3>Crucigrama</h3>
                    <p>Actividad pendiente de desarrollar.</p>
                </div>

            </div>
        `
    },

    {
        titulo: "Retos para construir paz",
        contenido: `
            <div class="actividad">

                <h3>Reto interactivo de demostración</h3>

                <p>
                    Dos integrantes de una comunidad
                    tienen opiniones diferentes sobre
                    el uso de un espacio colectivo.
                    ¿Qué deberían hacer?
                </p>

                <div class="opciones">

                    <button onclick="evaluarRespuesta(this, false)">
                        Imponer su opinión.
                    </button>

                    <button onclick="evaluarRespuesta(this, true)">
                        Dialogar y construir un acuerdo.
                    </button>

                    <button onclick="evaluarRespuesta(this, false)">
                        Evitar hablar del problema.
                    </button>

                </div>

                <p class="retroalimentacion"
                   aria-live="polite"></p>

            </div>
        `
    },

    {
        titulo: "Nuestros compromisos con la paz",
        contenido: `
            <p>
                Aquí incorporaremos los compromisos
                individuales y colectivos de los
                integrantes del grupo.
            </p>
        `
    },

    {
        titulo: "Conclusiones",
        contenido: `
            <p>
                Espacio destinado a las reflexiones
                finales y los aprendizajes obtenidos
                durante la investigación.
            </p>
        `
    },

    {
        titulo: "Referencias bibliográficas",
        contenido: `
            <p>
                Aquí incorporaremos todas las fuentes
                consultadas bajo las normas APA,
                séptima edición.
            </p>
        `
    }

];


/* ==============================================
   2. CONFIGURACIÓN GENERAL
============================================== */

let paginaActual = 0;

let sonidoActivado = false;

let nivelZoom = 100;

let contextoAudio = null;

const totalPaginas = paginas.length;


/* ==============================================
   3. DETECTAR EL TAMAÑO DE PANTALLA
============================================== */

function esPantallaPequena() {

    return window.innerWidth <= 768;

}


/* ==============================================
   4. GENERAR PORTADA
============================================== */

function generarPortada() {

    return `

        <div class="portada">

            <div class="etiqueta">
                CÁTEDRA DE LA PAZ · 2026
            </div>

            <h1>
                Sembrando Paz<br>
                desde nuestro<br>
                Territorio
            </h1>

            <p class="frase">

                Construyendo caminos de diálogo,
                memoria, convivencia y esperanza
                desde las voces de nuestro territorio.

            </p>

            <p>
                Cartilla digital interactiva
            </p>

            <button onclick="irPagina(1)">

                Explorar cartilla ▶

            </button>

        </div>

    `;

}


/* ==============================================
   5. GENERAR ÍNDICE INTERACTIVO
============================================== */

function generarIndice() {

    let contenido = `

        <h2>Índice interactivo</h2>

        <p>
            Selecciona una sección para explorar
            los contenidos de la cartilla.
        </p>

        <div class="indice">

    `;

    paginas.forEach((pagina, indice) => {

        if (indice > 1) {

            contenido += `

                <button onclick="irPagina(${indice})">

                    ${indice + 1}. ${pagina.titulo}

                </button>

            `;

        }

    });

    contenido += "</div>";

    return contenido;

}


/* ==============================================
   6. GENERAR CONTENIDO DE UNA PÁGINA
============================================== */

function generarPagina(indice, posicion = "") {

    if (indice >= totalPaginas) {
        return "";
    }

    let contenido;

    if (indice === 1) {

        contenido = generarIndice();

    } else {

        contenido = `

            <small>
                SEMBRANDO PAZ · 2026
            </small>

            <h2>
                ${paginas[indice].titulo}
            </h2>

            ${paginas[indice].contenido}

        `;

    }

    return `

        <section class="pagina ${posicion}">

            ${contenido}

            <div class="numero-pagina">

                ${indice + 1}

            </div>

        </section>

    `;

}


/* ==============================================
   7. MOSTRAR EL LIBRO
============================================== */

function mostrarPagina(animar = true) {

    const libro = document.getElementById("libro");

    if (!libro) {
        return;
    }

    libro.className = "libro";

    if (paginaActual === 0) {

        libro.classList.add("portada-libro");

        libro.innerHTML = generarPortada();

    } else if (esPantallaPequena()) {

        libro.innerHTML = generarPagina(paginaActual);

    } else {

        if (paginaActual < totalPaginas - 1) {

            libro.classList.add("doble");

            libro.innerHTML =

                generarPagina(
                    paginaActual,
                    "izquierda"
                ) +

                generarPagina(
                    paginaActual + 1,
                    "derecha"
                );

        } else {

            libro.innerHTML =

                generarPagina(paginaActual);

        }

    }

    if (animar) {

        libro.classList.remove("animar-pagina");

        void libro.offsetWidth;

        libro.classList.add("animar-pagina");

    }

    libro.style.zoom = nivelZoom / 100;

    actualizarControles();

    guardarProgreso();

}


/* ==============================================
   8. ACTUALIZAR CONTROLES
============================================== */

function actualizarControles() {

    const contador = document.getElementById("contador");

    const barra = document.getElementById("barra");

    const anterior = document.getElementById("anterior");

    const siguiente = document.getElementById("siguiente");

    let ultimaVisible = paginaActual + 1;

    if (

        paginaActual > 0 &&

        !esPantallaPequena() &&

        paginaActual < totalPaginas - 1

    ) {

        ultimaVisible = paginaActual + 2;

        contador.textContent =

            `${paginaActual + 1} - ${ultimaVisible}` +

            ` / ${totalPaginas}`;

    } else {

        contador.textContent =

            `${paginaActual + 1} / ${totalPaginas}`;

    }

    barra.style.width =

        (ultimaVisible / totalPaginas * 100) + "%";

    anterior.disabled = paginaActual === 0;

    siguiente.disabled = ultimaVisible >= totalPaginas;

}


/* ==============================================
   9. IR A UNA PÁGINA ESPECÍFICA
============================================== */

function irPagina(numero) {

    paginaActual = Math.max(

        0,

        Math.min(totalPaginas - 1, numero)

    );

    if (!esPantallaPequena() && paginaActual > 0) {

        if (paginaActual % 2 === 0) {

            paginaActual--;

        }

    }

    reproducirSonido();

    mostrarPagina();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ==============================================
   10. AVANZAR Y RETROCEDER
============================================== */

function cambiar(direccion) {

    if (esPantallaPequena()) {

        irPagina(paginaActual + direccion);

        return;

    }

    if (paginaActual === 0 && direccion > 0) {

        irPagina(1);

        return;

    }

    if (paginaActual === 1 && direccion < 0) {

        irPagina(0);

        return;

    }

    irPagina(paginaActual + direccion * 2);

}


/* ==============================================
   11. MODO PANTALLA COMPLETA
============================================== */

async function pantallaCompleta() {

    try {

        if (!document.fullscreenElement) {

            if (!document.documentElement.requestFullscreen) {

                alert(
                    "Este navegador no admite pantalla completa."
                );

                return;

            }

            await document.documentElement.requestFullscreen();

        } else {

            await document.exitFullscreen();

        }

    } catch (error) {

        alert(
            "No fue posible activar la pantalla completa."
        );

    }

}


/* ==============================================
   12. ZOOM DE LECTURA
============================================== */

function aumentarZoom() {

    nivelZoom = Math.min(160, nivelZoom + 10);

    aplicarZoom();

}

function disminuirZoom() {

    nivelZoom = Math.max(80, nivelZoom - 10);

    aplicarZoom();

}

function restaurarZoom() {

    nivelZoom = 100;

    aplicarZoom();

}

function aplicarZoom() {

    const libro = document.getElementById("libro");

    const indicador = document.getElementById("zoom");

    if (libro) {

        libro.style.zoom = nivelZoom / 100;

    }

    if (indicador) {

        indicador.textContent = nivelZoom + "%";

    }

}


/* ==============================================
   13. SONIDO OPCIONAL
============================================== */

function activarSonido() {

    sonidoActivado = !sonidoActivado;

    const boton = document.getElementById("sonido");

    if (boton) {

        boton.textContent = sonidoActivado

            ? "🔊 Sonido"

            : "🔇 Sonido";

        boton.setAttribute(
            "aria-pressed",
            sonidoActivado
        );

    }

    if (sonidoActivado) {

        reproducirSonido();

    }

}


function reproducirSonido() {

    if (!sonidoActivado) {
        return;
    }

    try {

        const AudioContext =

            window.AudioContext ||

            window.webkitAudioContext;

        if (!AudioContext) {
            return;
        }

        if (!contextoAudio) {

            contextoAudio = new AudioContext();

        }

        if (contextoAudio.state === "suspended") {

            contextoAudio.resume().catch(() => {});

        }

        const duracion = 0.18;

        const buffer = contextoAudio.createBuffer(

            1,

            contextoAudio.sampleRate * duracion,

            contextoAudio.sampleRate

        );

        const datos = buffer.getChannelData(0);

        for (let i = 0; i < datos.length; i++) {

            datos[i] = (Math.random() * 2 - 1) *

                Math.sin(Math.PI * i / datos.length);

        }

        const fuente = contextoAudio.createBufferSource();

        const filtro = contextoAudio.createBiquadFilter();

        const volumen = contextoAudio.createGain();

        fuente.buffer = buffer;

        filtro.type = "lowpass";

        filtro.frequency.value = 2200;

        volumen.gain.value = 0.045;

        fuente.connect(filtro);

        filtro.connect(volumen);

        volumen.connect(contextoAudio.destination);

        fuente.start();

    } catch (error) {

        console.log("Audio no disponible.");

    }

}


/* ==============================================
   14. GUARDAR EL PROGRESO DE LECTURA
============================================== */

function guardarProgreso() {

    try {

        localStorage.setItem(

            "sembrandoPazPagina",

            paginaActual

        );

    } catch (error) {

        console.log("Almacenamiento no disponible.");

    }

}


function recuperarProgreso() {

    try {

        const guardado = localStorage.getItem(

            "sembrandoPazPagina"

        );

        const numero = Number(guardado);

        if (

            guardado !== null &&

            Number.isInteger(numero) &&

            numero >= 0 &&

            numero < totalPaginas

        ) {

            paginaActual = numero;

        }

    } catch (error) {

        paginaActual = 0;

    }

}


/* ==============================================
   15. ACTIVIDADES INTERACTIVAS
============================================== */

function evaluarRespuesta(boton, correcta) {

    const actividad = boton.closest(".actividad");

    if (!actividad) {
        return;
    }

    const opciones = actividad.querySelectorAll(

        ".opciones button"

    );

    const mensaje = actividad.querySelector(

        ".retroalimentacion"

    );

    opciones.forEach(opcion => {

        opcion.classList.remove(

            "respuesta-correcta",

            "respuesta-incorrecta"

        );

    });

    if (correcta) {

        boton.classList.add("respuesta-correcta");

        mensaje.textContent =

            "¡Correcto! El diálogo y la construcción " +

            "de acuerdos fortalecen la cultura de paz.";

        mensaje.style.color = "#285329";

    } else {

        boton.classList.add("respuesta-incorrecta");

        mensaje.textContent =

            "Inténtalo nuevamente. Busca una solución " +

            "que permita escuchar y respetar a ambas partes.";

        mensaje.style.color = "#8D3029";

    }

}


/* ==============================================
   16. NAVEGACIÓN CON EL TECLADO
============================================== */

document.addEventListener("keydown", function(evento) {

    if (

        evento.target.closest(

            "input, textarea, select, button, " +

            "[contenteditable], iframe"

        )

    ) {

        return;

    }

    if (evento.key === "ArrowRight") {

        if (!document.getElementById("siguiente").disabled) {

            cambiar(1);

        }

    }

    if (evento.key === "ArrowLeft") {

        cambiar(-1);

    }

    if (evento.key === "Home") {

        irPagina(0);

    }

    if (evento.key === "End") {

        irPagina(totalPaginas - 1);

    }

});


/* ==============================================
   17. ADAPTACIÓN AUTOMÁTICA DE PANTALLA
============================================== */

let modoMovil = esPantallaPequena();

window.addEventListener("resize", function() {

    const nuevoModo = esPantallaPequena();

    if (nuevoModo !== modoMovil) {

        modoMovil = nuevoModo;

        if (!modoMovil && paginaActual > 0) {

            if (paginaActual % 2 === 0) {

                paginaActual--;

            }

        }

        mostrarPagina(false);

    }

});


/* ==============================================
   18. INICIAR LA CARTILLA
============================================== */

document.addEventListener("DOMContentLoaded", function() {

    recuperarProgreso();

    if (!esPantallaPequena() && paginaActual > 0) {

        if (paginaActual % 2 === 0) {

            paginaActual--;

        }

    }

    mostrarPagina(false);

});
