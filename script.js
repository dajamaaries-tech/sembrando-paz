
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

        <div class="introduccion">

            <figure class="foto-introduccion">

                <img
                    src="introduccion-cascada.png"
                    alt="Cascada rodeada de vegetación y formaciones rocosas"
                    loading="lazy"
                >

                <figcaption>
                    Naturaleza, territorio y vida.
                </figcaption>

            </figure>

            <blockquote class="frase-paz">

                La paz se siembra en el territorio,
                se fortalece en la comunidad y se
                cultiva mediante el respeto.

            </blockquote>

            <p class="texto-introduccion">

                La construcción de una cultura de paz
                comienza en los territorios, en las relaciones
                que establecemos con los demás y en la manera
                como reconocemos y respetamos nuestras diferencias.

                La paz no significa únicamente la ausencia
                de violencia, sino también la posibilidad de
                vivir con dignidad, fortalecer la convivencia,
                proteger los derechos humanos y construir
                soluciones colectivas mediante el diálogo,
                el respeto y la participación comunitaria.

            </p>

            <p class="texto-introduccion">

                La presente cartilla digital interactiva,
                titulada <strong>Sembrando Paz desde nuestro
                Territorio</strong>, tiene como propósito
                comprender la importancia de la paz territorial
                a partir de las experiencias, conocimientos
                y realidades sociales de las comunidades.

                Asimismo, busca generar espacios de reflexión
                y aprendizaje que permitan reconocer las
                problemáticas que afectan la convivencia
                y promover acciones orientadas a la construcción
                de una sociedad más justa, incluyente y solidaria.

            </p>

            <p class="texto-introduccion">

                Para el desarrollo de esta propuesta se seleccionó
                el <strong>Resguardo Indígena Kankuamo</strong>,
                ubicado en la Sierra Nevada de Santa Marta,
                reconociendo la importancia de su identidad cultural,
                sus conocimientos ancestrales, sus formas de
                organización propia y su relación con el territorio.

                Desde esta perspectiva, la construcción de paz
                implica también fortalecer la memoria colectiva,
                respetar los usos y costumbres, reconocer la
                diversidad cultural y proteger el territorio
                como espacio de vida y encuentro comunitario.

            </p>

            <p class="texto-introduccion">

                La metodología propuesta tiene un enfoque
                cualitativo y descriptivo, mediante la revisión
                de documentos, el acercamiento comunitario,
                la observación directa, las entrevistas a
                integrantes de la comunidad y la visita a una
                institución vinculada con la construcción de paz.

                Estas actividades permitirán relacionar los
                fundamentos teóricos de la asignatura Cátedra
                de la Paz con las experiencias y percepciones
                de la población seleccionada.

            </p>

            <p class="texto-introduccion">

                Como estudiantes de Licenciatura en Matemáticas
                de la Universidad Popular del Cesar y futuros
                docentes, reconocemos nuestra responsabilidad
                en la formación de ciudadanos capaces de convivir,
                dialogar, respetar las diferencias y contribuir
                a la transformación de sus realidades.

                Por ello, esta cartilla integra contenidos
                académicos, testimonios, recursos audiovisuales
                y actividades interactivas como herramientas
                pedagógicas para sembrar paz desde nuestros
                territorios.

            </p>

            <div style="clear:both;"></div>

            <h3 class="titulo-explorar">

                Explora los fundamentos de nuestra cartilla

            </h3>

            <p class="instruccion-introduccion">

                Presiona cada elemento para ampliar
                la información.

            </p>

            <div class="explorar-introduccion">

                <details>

                    <summary>

                        🕊️ Cultura de paz

                    </summary>

                    <p>

                        Promueve el respeto, la convivencia,
                        la dignidad humana, el diálogo y la
                        resolución pacífica de los conflictos.

                    </p>

                </details>

                <details>

                    <summary>

                        🎯 Nuestro propósito

                    </summary>

                    <p>

                        Comprender la paz territorial,
                        reconocer las problemáticas comunitarias
                        y promover acciones que contribuyan
                        a la construcción colectiva de paz.

                    </p>

                </details>

                <details>

                    <summary>

                        ⛰️ Nuestra comunidad

                    </summary>

                    <p>

                        Resguardo Indígena Kankuamo,
                        Sierra Nevada de Santa Marta.
                        Reconocemos su identidad cultural,
                        memoria colectiva, organización propia
                        y relación ancestral con el territorio.

                    </p>

                </details>

                <details>

                    <summary>

                        📋 Metodología

                    </summary>

                    <p>

                        Enfoque cualitativo y descriptivo,
                        revisión documental, observación directa,
                        entrevistas comunitarias, visita
                        institucional y producción digital.

                    </p>

                </details>

            </div>

            <div class="reflexion-introduccion">

                <strong>Sembrando paz desde la educación</strong>

                <p>

                    Como futuros docentes, tenemos el compromiso
                    de promover espacios educativos donde
                    el respeto, la inclusión y el diálogo
                    contribuyan a transformar nuestras realidades.

                </p>

            </div>

        </div>

    `
},



{
    titulo: "¿Qué es la paz territorial?",

    contenido: `

        <div class="paz-territorial">

            <div class="etiqueta-tematica">
                FUNDAMENTACIÓN TEÓRICA
            </div>

            <blockquote class="frase-territorial">

                Construir paz es aprender a vivir juntos,
                respetando nuestras diferencias,
                nuestra memoria y nuestro territorio.

            </blockquote>

            <h3>Concepto de paz territorial</h3>

            <p>

                La paz territorial es un proceso de
                construcción colectiva que reconoce las
                características, necesidades, historias
                y particularidades culturales de cada
                territorio. Su finalidad es transformar
                las condiciones que generan violencia,
                desigualdad, exclusión y conflictos sociales,
                promoviendo la participación de las comunidades
                en la búsqueda de soluciones que permitan
                vivir dignamente.

            </p>

            <p>

                A partir de las recomendaciones de la
                Comisión de la Verdad (2022), comprendemos
                que construir paz requiere reconocer las
                realidades particulares de los territorios,
                fortalecer la participación comunitaria,
                garantizar los derechos humanos y promover
                el diálogo social, la reconciliación y
                la no repetición de las violencias.

            </p>

            <h3>Características de la paz territorial</h3>

            <p>

                Explora los seis pilares que hemos seleccionado
                para comprender la construcción de paz
                desde los territorios.

            </p>

            <div class="diagrama-paz">

                <div class="diagrama-circulo">

                    <svg class="conexiones-paz"
                         viewBox="0 0 100 100"
                         aria-hidden="true">

                        <g stroke="#E9CD91"
                           stroke-width="0.5"
                           stroke-dasharray="2 1"
                           opacity="0.7">

                            <line x1="50" y1="50"
                                  x2="50" y2="15"/>

                            <line x1="50" y1="50"
                                  x2="81" y2="32"/>

                            <line x1="50" y1="50"
                                  x2="81" y2="68"/>

                            <line x1="50" y1="50"
                                  x2="50" y2="85"/>

                            <line x1="50" y1="50"
                                  x2="19" y2="68"/>

                            <line x1="50" y1="50"
                                  x2="19" y2="32"/>

                        </g>

                    </svg>

                    <div class="centro-paz">

                        <span>🕊️</span>

                        <strong>
                            Paz<br>territorial
                        </strong>

                    </div>

                    <button class="pilar pilar-1"
                            onclick="mostrarPilar(this, 0)"
                            aria-pressed="false">

                        <span>🤝</span>
                        Participación

                    </button>

                    <button class="pilar pilar-2"
                            onclick="mostrarPilar(this, 1)"
                            aria-pressed="false">

                        <span>🌿</span>
                        Identidad

                    </button>

                    <button class="pilar pilar-3"
                            onclick="mostrarPilar(this, 2)"
                            aria-pressed="false">

                        <span>⚖️</span>
                        Justicia

                    </button>

                    <button class="pilar pilar-4"
                            onclick="mostrarPilar(this, 3)"
                            aria-pressed="false">

                        <span>💬</span>
                        Diálogo

                    </button>

                    <button class="pilar pilar-5"
                            onclick="mostrarPilar(this, 4)"
                            aria-pressed="false">

                        <span>⛰️</span>
                        Territorio

                    </button>

                    <button class="pilar pilar-6"
                            onclick="mostrarPilar(this, 5)"
                            aria-pressed="false">

                        <span>📖</span>
                        Memoria

                    </button>

                </div>

                <div class="informacion-pilar"
                     aria-live="polite">

                    <h4>Descubre los pilares de la paz</h4>

                    <p>

                        Presiona cualquiera de los seis
                        círculos para conocer su significado.

                    </p>

                </div>

            </div>

            <h3>Importancia para la convivencia</h3>

            <p>

                La paz territorial es fundamental porque
                fortalece las relaciones comunitarias,
                promueve el respeto por las diferencias
                y genera oportunidades para construir
                acuerdos colectivos.

                Además, permite que las comunidades
                participen activamente en la transformación
                de sus propias realidades y en la búsqueda
                de soluciones pacíficas a sus conflictos.

            </p>

            <div class="enfoque-kankuamo">

                <h3>La paz en el territorio Kankuamo</h3>

                <p>

                    En el contexto del Resguardo Indígena
                    Kankuamo, resulta importante abordar
                    la paz desde el reconocimiento de
                    la identidad cultural, la autonomía,
                    la memoria colectiva, la protección
                    del territorio y el respeto por las
                    autoridades y los conocimientos
                    tradicionales.

                </p>

                <p>

                    Desde esta perspectiva, la construcción
                    de paz también implica reconocer la relación
                    entre las personas, la comunidad y la
                    naturaleza, así como la importancia de
                    preservar los conocimientos culturales
                    para las futuras generaciones.

                </p>

                <p>

                    Estos planteamientos serán contrastados
                    con las percepciones recogidas durante
                    el trabajo de campo.

                </p>

            </div>

            <h3>La educación como camino hacia la paz</h3>

            <p>

                Desde nuestra formación como estudiantes
                de Licenciatura en Matemáticas y futuros
                docentes, comprendemos que la educación
                constituye una herramienta fundamental
                para construir una cultura de paz.

                Nuestra responsabilidad no se limita a
                transmitir conocimientos, sino también a
                promover el pensamiento crítico, el trabajo
                colaborativo, la inclusión, el respeto
                y la convivencia pacífica.

            </p>

            <div class="reflexion-territorial">

                <strong>Reflexionemos</strong>

                <p>

                    La paz no se construye únicamente
                    mediante acuerdos institucionales.
                    También nace de nuestras acciones
                    cotidianas, del respeto por los demás
                    y del compromiso con nuestro territorio.

                </p>

            </div>

            <small class="credito-fotografico">
                Fotografía de fondo: @elatanquero.
            </small>

        </div>

    `
},

    
{
    titulo: "La paz desde la mirada de la comunidad",

    contenido: `

        <div class="mirada-comunidad">

            <div class="etiqueta-tematica">
                INVESTIGACIÓN COMUNITARIA
            </div>

            <blockquote class="frase-territorial">

                Escuchar las voces de la comunidad
                es reconocer que la paz se construye
                desde las experiencias de quienes
                habitan el territorio.

            </blockquote>

            <h3>Escuchando nuestro territorio</h3>

            <p>

                Para comprender la paz territorial
                desde una perspectiva comunitaria,
                se propone un acercamiento a integrantes
                del Resguardo Indígena Kankuamo.

                Este ejercicio busca conocer sus
                percepciones, experiencias y reflexiones
                sobre el significado de la paz en
                relación con su identidad, su cultura
                y su territorio.

            </p>

            <p>

                La entrevista constituye una herramienta
                de investigación cualitativa que nos
                permitirá escuchar directamente las voces
                de la comunidad y relacionarlas con los
                fundamentos teóricos desarrollados
                en la asignatura Cátedra de la Paz.

            </p>

            <!-- ENTREVISTA COMUNITARIA -->

            <div class="entrevista-comunidad">

                <div class="encabezado-entrevista">

                    <span>
                        VOCES DEL TERRITORIO
                    </span>

                    <h3>

                        ¿Qué entiende usted por
                        paz territorial?

                    </h3>

                </div>

                <!-- AQUÍ COLOCAREMOS EL VIDEO -->

                
<div class="video-entrevista">

    <iframe
        src="https://www.youtube-nocookie.com/embed/VRWk0ElQdQE"
        title="Paz territorial - Resguardo Indígena Kankuamo"
        allow="accelerometer; autoplay; clipboard-write;
               encrypted-media; gyroscope; picture-in-picture;
               web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy">
    </iframe>

    <div class="informacion-video">

        <strong>
            Voces del territorio Kankuamo
        </strong>

        <p>
            Duración: 4 minutos y 39 segundos.
        </p>

        <a
            class="boton-youtube"
            href="https://youtu.be/VRWk0ElQdQE"
            target="_blank"
            rel="noopener noreferrer">

            ▶ Ver video en YouTube

        </a>

        <div class="enlace-video">

            <small>Enlace del video:</small>

            <a
                href="https://youtu.be/VRWk0ElQdQE"
                target="_blank"
                rel="noopener noreferrer">

                https://youtu.be/VRWk0ElQdQE

            </a>

        </div>

    </div>

</div>            

            
<!-- PERSPECTIVA COMUNITARIA -->

<h3>La paz desde el contexto Kankuamo</h3>

<p>
    Desde una lectura contextual del territorio Kankuamo,
    la construcción de paz puede comprenderse como un proceso
    que involucra la convivencia comunitaria, el fortalecimiento
    de la identidad cultural, el respeto por los conocimientos
    ancestrales y la protección del territorio.
</p>

<p>
    La paz no se limita a la ausencia de conflictos o
    enfrentamientos, sino que también implica generar
    condiciones que permitan a las comunidades vivir
    dignamente, conservar sus tradiciones, fortalecer
    su autonomía y transmitir sus conocimientos a las
    nuevas generaciones.
</p>

<p>
    El territorio constituye un elemento fundamental
    para comprender esta perspectiva, pues representa
    un espacio de vida, memoria, identidad y encuentro
    comunitario.
</p>

<!-- COMPARACIÓN DE PERSPECTIVAS -->

<h3>Teoría y perspectiva territorial</h3>

<div class="tabla-comparativa-paz">

    <table>

        <thead>
            <tr>
                <th>Categoría</th>
                <th>Perspectiva teórica</th>
                <th>Contexto Kankuamo</th>
            </tr>
        </thead>

        <tbody>

            <tr>
                <td>Paz territorial</td>
                <td>
                    Proceso colectivo de transformación social.
                </td>
                <td>
                    Construcción de unidad, armonía
                    y bienestar comunitario.
                </td>
            </tr>

            <tr>
                <td>Participación</td>
                <td>
                    Participación activa de las comunidades
                    en la toma de decisiones.
                </td>
                <td>
                    Fortalecimiento de la organización
                    propia y el trabajo colectivo.
                </td>
            </tr>

            <tr>
                <td>Identidad cultural</td>
                <td>
                    Reconocimiento y respeto
                    de la diversidad cultural.
                </td>
                <td>
                    Protección de los conocimientos
                    ancestrales, usos y costumbres.
                </td>
            </tr>

            <tr>
                <td>Territorio</td>
                <td>
                    Espacio de vida, identidad
                    y construcción social.
                </td>
                <td>
                    Espacio de importancia cultural,
                    natural y espiritual.
                </td>
            </tr>

            <tr>
                <td>Convivencia</td>
                <td>
                    Diálogo, respeto y resolución
                    pacífica de conflictos.
                </td>
                <td>
                    Fortalecimiento de la unidad
                    y las relaciones comunitarias.
                </td>
            </tr>

            <tr>
                <td>Memoria</td>
                <td>
                    Reconciliación y garantías
                    de no repetición.
                </td>
                <td>
                    Reconocimiento de la historia
                    y preservación de la memoria colectiva.
                </td>
            </tr>

        </tbody>

    </table>

</div>

<!-- ANÁLISIS COMPARATIVO -->

<h3>Análisis de las perspectivas</h3>

<div class="analisis-comunitario">

    <details>

        <summary>
            Semejanzas entre las perspectivas
        </summary>

        <p>
            Ambas perspectivas pueden relacionarse mediante
            el reconocimiento de la paz como una construcción
            colectiva que requiere participación, respeto,
            diálogo y compromiso social.
        </p>

        <p>
            Asimismo, coinciden en la importancia de reconocer
            las particularidades de los territorios, fortalecer
            las relaciones comunitarias y promover condiciones
            que permitan una vida digna.
        </p>

        <p>
            La protección de la identidad cultural y el
            reconocimiento de la diversidad también constituyen
            elementos importantes para construir una convivencia
            pacífica y prevenir nuevas formas de violencia
            y exclusión.
        </p>

    </details>

    <details>

        <summary>
            Diferencias entre las perspectivas
        </summary>

        <p>
            La perspectiva teórica aborda la paz territorial
            desde conceptos como la justicia social,
            los derechos humanos, la participación ciudadana,
            la reconciliación y la transformación de las
            condiciones que generan violencia.
        </p>

        <p>
            Por su parte, una interpretación desde el contexto
            indígena Kankuamo permite incorporar dimensiones
            culturales, espirituales y ancestrales, relacionadas
            con la protección del territorio, la organización
            propia y la conservación de los conocimientos
            tradicionales.
        </p>

        <p>
            Estas diferencias no necesariamente representan
            una contradicción, sino una oportunidad para
            ampliar la comprensión de la paz desde la
            diversidad cultural.
        </p>

    </details>

    <details>

        <summary>
            Nuestra reflexión académica
        </summary>

        <p>
            Como estudiantes de Licenciatura en Matemáticas
            de la Universidad Popular del Cesar, consideramos
            que la construcción de paz debe partir del
            reconocimiento de las realidades, necesidades
            y particularidades culturales de cada comunidad.
        </p>

        <p>
            El acercamiento al territorio Kankuamo nos invita
            a reflexionar sobre la importancia de respetar
            la diversidad, fortalecer la memoria colectiva
            y reconocer el papel de las comunidades en la
            transformación de sus propias realidades.
        </p>

        <p>
            Como futuros docentes, tenemos la responsabilidad
            de promover espacios educativos fundamentados
            en el diálogo, la inclusión, el respeto
            y el aprendizaje colaborativo.
        </p>

        <p>
            Comprendemos que sembrar paz no es únicamente
            evitar los conflictos, sino aprender a resolverlos
            de manera pacífica, reconocer las diferencias
            y contribuir al bienestar colectivo desde
            nuestras acciones cotidianas.
        </p>

    </details>

</div>

<!-- REFLEXIÓN FINAL -->

<div class="reflexion-territorial">

    <strong>Construir la paz es caminar en unidad</strong>

    <p>
        La paz se fortalece cuando reconocemos nuestras
        diferencias, valoramos nuestra identidad y trabajamos
        colectivamente por el bienestar de las comunidades
        y sus territorios.
    </p>

</div>

<div class="nota-etica">
    <p>
        Nota metodológica: este análisis corresponde a una
        interpretación académica del contexto territorial.
        Las percepciones específicas de los participantes
        deberán contrastarse con el contenido de la entrevista.
    </p>
</div>

            <div class="nota-etica">

                <strong>

                    Respeto por las voces del territorio

                </strong>

                <p>

                    Las entrevistas serán incorporadas
                    respetando el consentimiento informado,
                    la dignidad, la identidad cultural
                    y la privacidad de las personas
                    participantes.

                    La información será utilizada
                    con fines académicos y únicamente
                    conforme a las autorizaciones obtenidas.

                </p>

            </div>

        </div>

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

            <div class="simbolo">🌱</div>

            <h1>
                Sembrando Paz<br>
                desde nuestro<br>
                Territorio
            </h1>

            <p class="frase">
                Una propuesta académica para comprender la paz territorial
                desde la memoria, la convivencia, los derechos humanos
                y las voces de la comunidad.
            </p>

            <div style="
                max-width: 850px;
                margin: 25px auto 0;
                background: rgba(255,255,255,0.10);
                border: 1px solid rgba(255,255,255,0.25);
                border-radius: 10px;
                padding: 22px;
                color: #F7E8CD;
                line-height: 1.8;
                font-size: 16px;
                text-align: left;
                backdrop-filter: blur(4px);
            ">

                <p style="margin-top:0;">
                    <strong>Cartilla digital interactiva</strong>
                </p>

                <p>
                    <strong>Asignatura:</strong> Cátedra de la Paz<br>
                    <strong>Institución:</strong> Universidad Popular del Cesar<br>
                    <strong>Programa:</strong> Licenciatura en Matemáticas<br>
                    <strong>Comunidad seleccionada:</strong> Resguardo Indígena Kankuamo<br>
                    <strong>Docente:</strong> Yonaidis Ibarra<br>
                    <strong>Año:</strong> 2026
                </p>

                <p style="margin-bottom: 8px;">
                    <strong>Integrantes:</strong>
                </p>

                <p style="margin-top:0; margin-bottom:0;">
                    DAYANA MICHEL ESCOBAR MARTÍNEZ<br>
                    JOSE MIGUEL MEZA ANDARA<br>
                    JHONATAN DAVID VERDECIA JIMÉNEZ<br>
                    BRIANA PICÓN LENGUA<br>
                    CARLOS ANDRÉS TORRES ROJAS
                </p>

            </div>

            <button onclick="irPagina(1)" style="margin-top: 28px;">
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

        <small>
            SEMBRANDO PAZ · 2026
        </small>

        <h2>Índice interactivo</h2>

        <p>
            Esta cartilla presenta una reflexión sobre la paz territorial
            desde el Resguardo Indígena Kankuamo, articulando fundamentos
            teóricos, trabajo de campo, voces comunitarias, construcción
            de paz y actividades interactivas.
        </p>

        <div class="tarjetas" style="margin-top: 25px;">

            <div class="tarjeta">
                <h3>Fundamentación</h3>
                <div class="indice">
                    <button onclick="irPagina(2)">
                        3. Introducción
                    </button>
                    <button onclick="irPagina(3)">
                        4. ¿Qué es la paz territorial?
                    </button>
                    <button onclick="irPagina(4)">
                        5. La paz desde la mirada de la comunidad
                    </button>
                </div>
            </div>

            <div class="tarjeta">
                <h3>Territorio y comunidad</h3>
                <div class="indice">
                    <button onclick="irPagina(5)">
                        6. Conociendo nuestro territorio
                    </button>
                    <button onclick="irPagina(6)">
                        7. Identidad y cultura de nuestro territorio
                    </button>
                    <button onclick="irPagina(7)">
                        8. Conflictos que afectan la paz
                    </button>
                    <button onclick="irPagina(8)">
                        9. Escuchando a nuestra comunidad
                    </button>
                    <button onclick="irPagina(9)">
                        10. Análisis de las problemáticas
                    </button>
                </div>
            </div>

            <div class="tarjeta">
                <h3>Instituciones y derechos</h3>
                <div class="indice">
                    <button onclick="irPagina(10)">
                        11. Instituciones que construyen paz
                    </button>
                    <button onclick="irPagina(11)">
                        12. Nuestra experiencia institucional
                    </button>
                    <button onclick="irPagina(12)">
                        13. Derechos humanos y cultura de paz
                    </button>
                    <button onclick="irPagina(13)">
                        14. Resolución pacífica de conflictos
                    </button>
                    <button onclick="irPagina(14)">
                        15. Voces del territorio
                    </button>
                </div>
            </div>

            <div class="tarjeta">
                <h3>Participación y cierre</h3>
                <div class="indice">
                    <button onclick="irPagina(15)">
                        16. Aprendamos jugando
                    </button>
                    <button onclick="irPagina(16)">
                        17. Retos para construir paz
                    </button>
                    <button onclick="irPagina(17)">
                        18. Nuestros compromisos con la paz
                    </button>
                    <button onclick="irPagina(18)">
                        19. Conclusiones
                    </button>
                    <button onclick="irPagina(19)">
                        20. Referencias bibliográficas
                    </button>
                </div>
            </div>

        </div>

    `;

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

        <section class="pagina ${posicion}
    ${indice === 2 ? 'pagina-introduccion' : ''}
    ${indice === 3 ? 'pagina-paz-territorial' : ''}
    ${indice === 4 ? 'pagina-paz-comunitaria' : ''}">

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

  
if (animar && paginaActual > 0) {

    const hoja = libro.querySelector(
        ".pagina.derecha"
    ) || libro.querySelector(".pagina");

    if (hoja) {

        hoja.classList.add("hoja-siguiente");

    }

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

    if (direccion > 0 &&
        document.getElementById("siguiente").disabled) {
        return;
    }

    if (direccion < 0 &&
        paginaActual === 0) {
        return;
    }

    if (esPantallaPequena()) {

        irPagina(paginaActual + direccion);

    } else if (paginaActual === 0 && direccion > 0) {

        irPagina(1);

    } else if (paginaActual === 1 && direccion < 0) {

        irPagina(0);

    } else {

        irPagina(paginaActual + direccion * 2);

    }

    if (paginaActual === 0) {
        return;
    }

    const libro = document.getElementById("libro");

    libro.querySelectorAll(".pagina").forEach(hoja => {

        hoja.classList.remove(
            "hoja-siguiente",
            "hoja-anterior"
        );

    });

    const selector = direccion > 0
    ? ".pagina.izquierda"
    : ".pagina.derecha";

    const hoja = libro.querySelector(selector)
        || libro.querySelector(".pagina");

    if (hoja) {

        void hoja.offsetWidth;

        hoja.classList.add(
            direccion > 0
                ? "hoja-siguiente"
                : "hoja-anterior"
        );

    }

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

/* ==========================================
   SEIS PILARES DE LA PAZ TERRITORIAL
========================================== */

const pilaresPaz = [

    {
        titulo: "Participación comunitaria",

        descripcion:
            "Reconoce a las comunidades como protagonistas " +
            "de las decisiones y transformaciones de sus " +
            "territorios, fortaleciendo la construcción " +
            "colectiva de soluciones."
    },

    {
        titulo: "Identidad y diversidad cultural",

        descripcion:
            "Respeta los conocimientos ancestrales, " +
            "las tradiciones, las diferencias culturales " +
            "y las formas propias de organización."
    },

    {
        titulo: "Justicia social",

        descripcion:
            "Busca reducir las desigualdades, garantizar " +
            "los derechos humanos y promover condiciones " +
            "de vida dignas para todas las personas."
    },

    {
        titulo: "Diálogo y reconciliación",

        descripcion:
            "Promueve la escucha activa, la solución " +
            "pacífica de los conflictos, la construcción " +
            "de acuerdos y la recuperación de la confianza."
    },

    {
        titulo: "Protección del territorio",

        descripcion:
            "Reconoce la importancia de cuidar la naturaleza, " +
            "el agua, los ecosistemas y los espacios donde " +
            "se desarrolla la vida social, cultural " +
            "y comunitaria."
    },

    {
        titulo: "Memoria y no repetición",

        descripcion:
            "Permite reconocer y aprender de las experiencias " +
            "del pasado para evitar nuevas situaciones " +
            "de violencia y fortalecer la reconciliación."
    }

];


function mostrarPilar(boton, indice) {

    const diagrama = boton.closest(".diagrama-paz");

    if (!diagrama || !pilaresPaz[indice]) {

        return;

    }

    diagrama.querySelectorAll(".pilar").forEach(pilar => {

        pilar.classList.remove("pilar-activo");

        pilar.setAttribute("aria-pressed", "false");

    });

    boton.classList.add("pilar-activo");

    boton.setAttribute("aria-pressed", "true");

    const informacion = diagrama.querySelector(
        ".informacion-pilar"
    );

    informacion.innerHTML =

        "<h4>" + pilaresPaz[indice].titulo + "</h4>" +

        "<p>" + pilaresPaz[indice].descripcion + "</p>";

}
