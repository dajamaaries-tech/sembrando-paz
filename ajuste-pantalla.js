
/* ==========================================
   AJUSTE DE LA CARTILLA A LA PANTALLA
========================================== */

(function () {

    function iniciarAjuste() {

        const libro = document.getElementById("libro");

        if (!libro) return;

        let ajustado = false;
        let escalaActual = 1;

        const estiloOriginal = {
            zoom: libro.style.zoom
        };

        const panel = document.createElement("div");

        panel.className = "panel-ajuste-pantalla";

        panel.innerHTML = `
            <button id="ajustar-pantalla">
                ⛶ Ajustar a pantalla
            </button>

            <button id="reducir-pantalla"
                    aria-label="Reducir escala">
                −
            </button>

            <span id="porcentaje-pantalla">
                100%
            </span>

            <button id="ampliar-pantalla"
                    aria-label="Aumentar escala">
                +
            </button>

            <button id="pantalla-normal"
                    aria-label="Restablecer escala">
                ↶
            </button>
        `;

        document.body.appendChild(panel);

        const porcentaje = document.getElementById(
            "porcentaje-pantalla"
        );

        function aplicarEscala(valor) {

            escalaActual = Math.max(
                0.10,
                Math.min(1.5, valor)
            );

            libro.style.zoom = escalaActual;

            porcentaje.textContent =
                Math.round(escalaActual * 100) + "%";

        }

        function ajustarPantalla() {

            libro.style.zoom = 1;

            const rect = libro.getBoundingClientRect();

            const anchoDisponible =
                window.innerWidth - 40;

            const altoDisponible =
                window.innerHeight -
                Math.max(0, rect.top) - 90;

            const anchoLibro = Math.max(
                libro.scrollWidth,
                rect.width
            );

            const altoLibro = Math.max(
                libro.scrollHeight,
                rect.height
            );

            const escala = Math.min(
                anchoDisponible / anchoLibro,
                altoDisponible / altoLibro,
                1
            );

            aplicarEscala(escala);

            ajustado = true;

        }

        function restablecerPantalla() {

            ajustado = false;

            libro.style.zoom = estiloOriginal.zoom;

            escalaActual = 1;

            porcentaje.textContent = "100%";

        }

        document.getElementById(
            "ajustar-pantalla"
        ).addEventListener("click", ajustarPantalla);

        document.getElementById(
            "reducir-pantalla"
        ).addEventListener("click", function () {

            ajustado = false;

            aplicarEscala(escalaActual - 0.1);

        });

        document.getElementById(
            "ampliar-pantalla"
        ).addEventListener("click", function () {

            ajustado = false;

            aplicarEscala(escalaActual + 0.1);

        });

        document.getElementById(
            "pantalla-normal"
        ).addEventListener("click", restablecerPantalla);

        window.addEventListener("resize", function () {

            if (ajustado) ajustarPantalla();

        });

        const observador = new MutationObserver(
            function () {

                if (ajustado) {

                    requestAnimationFrame(ajustarPantalla);

                }

            }
        );

        observador.observe(libro, {
            childList: true,
            subtree: true
        });

    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            iniciarAjuste
        );

    } else {

        iniciarAjuste();

    }

})();
