
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


<div class="nota-etica"
     style="text-align: center;">

    <p style="
        font-family: Georgia, serif;
        font-size: 18px;
        font-style: italic;
        line-height: 1.8;
        color: #FFF4D8;
        margin: 0;
    ">

        «Escuchar las voces del territorio es
        reconocer su dignidad, valorar su identidad
        y construir caminos de paz desde el respeto
        y la memoria colectiva».

    </p>

</div>

    `
},

    
{
    titulo: "Conociendo nuestro territorio",

    contenido: `

        <div class="conociendo-territorio">

            <div class="etiqueta-tematica">
                TERRITORIO Y COMUNIDAD
            </div>

            <blockquote class="frase-territorial">

                Conocer nuestro territorio es reconocer
                nuestras raíces, nuestra historia y los
                caminos que nos unen como comunidad.

            </blockquote>

            <h3>¿Dónde se encuentra ubicada la comunidad?</h3>

            <p>

                El Resguardo Indígena Kankuamo se encuentra
                ubicado en la vertiente suroriental de la
                Sierra Nevada de Santa Marta, en el municipio
                de Valledupar, departamento del Cesar, Colombia.

            </p>

            <p>

                El pueblo Kankuamo es uno de los cuatro
                pueblos indígenas originarios de la Sierra
                Nevada de Santa Marta, junto con los pueblos
                Arhuaco, Kogui y Wiwa.

                Estos pueblos comparten principios ancestrales
                relacionados con el cuidado de la naturaleza,
                el equilibrio territorial y la conservación
                de la vida.

            </p>

            <div class="ubicacion-territorio">

                <h3>Ubicación geográfica</h3>

                <div class="dato-territorio">
                    <strong>País:</strong> Colombia
                </div>

                <div class="dato-territorio">
                    <strong>Departamento:</strong> Cesar
                </div>

                <div class="dato-territorio">
                    <strong>Municipio:</strong> Valledupar
                </div>

                <div class="dato-territorio">
                    <strong>Región:</strong>
                    Sierra Nevada de Santa Marta
                </div>

                <div class="dato-territorio">
                    <strong>Población:</strong>
                    Pueblo Indígena Kankuamo
                </div>

                <a class="boton-mapa"
                   href="https://www.google.com/maps/search/?api=1&query=Atanquez%2C+Cesar%2C+Colombia"
                   target="_blank"
                   rel="noopener noreferrer">

                    📍 Explorar ubicación en el mapa

                </a>

            </div>

            <h3>Comunidades del resguardo</h3>

            <p>

                Entre las doce comunidades históricamente
                reconocidas en la conformación del
                Resguardo Indígena Kankuamo se encuentran:

            </p>

            <div class="comunidades-kankuamas">

                <span>Atánquez</span>

                <span>Chemesquemena</span>

                <span>Guatapurí</span>

                <span>La Mina</span>

                <span>Los Haticos</span>

                <span>Río Seco</span>

                <span>Las Flores</span>

                <span>Pontón</span>

                <span>Ramalito</span>

                <span>Mojao</span>

                <span>Murillo</span>

                <span>Rancho de la Goya</span>

            </div>

            <p>

                Actualmente, la presencia organizativa
                del pueblo Kankuamo comprende también
                otras comunidades, asentamientos y ciudades,
                donde se fortalece su identidad y su
                organización colectiva.

            </p>

            <h3>Características sociales y comunitarias</h3>

            <p>

                La vida comunitaria del pueblo Kankuamo
                se encuentra estrechamente relacionada
                con sus formas de organización propia,
                el trabajo colectivo, la participación
                de las familias y la transmisión de
                conocimientos entre generaciones.

            </p>

            <div class="caracteristicas-territorio">

                <details>

                    <summary>
                        🤝 Organización comunitaria
                    </summary>

                    <p>

                        Participación en reuniones, asambleas
                        y espacios de decisión colectiva,
                        orientados al bienestar de las
                        comunidades.

                    </p>

                </details>

                <details>

                    <summary>
                        🏛 Gobierno propio
                    </summary>

                    <p>

                        Ejercicio de la autonomía mediante
                        autoridades e instituciones propias,
                        orientadas por principios culturales
                        y comunitarios.

                    </p>

                </details>

                <details>

                    <summary>
                        ❤️ Solidaridad
                    </summary>

                    <p>

                        Cooperación entre familias y
                        comunidades para atender necesidades
                        colectivas y fortalecer los vínculos
                        sociales.

                    </p>

                </details>

                <details>

                    <summary>
                        🌱 Trabajo comunitario
                    </summary>

                    <p>

                        Desarrollo de actividades colectivas
                        que contribuyen al bienestar común,
                        al cuidado del entorno y al
                        fortalecimiento comunitario.

                    </p>

                </details>

                <details>

                    <summary>
                        👥 Participación intergeneracional
                    </summary>

                    <p>

                        Reconocimiento de los aportes
                        de mayores, mujeres, jóvenes y
                        familias en la vida comunitaria
                        y la transmisión de conocimientos.

                    </p>

                </details>

                <details>

                    <summary>
                        🌿 Relación con la naturaleza
                    </summary>

                    <p>

                        Protección del agua, la tierra,
                        los bosques y los espacios
                        naturales y culturales que
                        sostienen la vida comunitaria.

                    </p>

                </details>

            </div>

            <h3>La vida en comunidad</h3>

            <p>

                Las siguientes fotografías permiten
                apreciar diferentes espacios de encuentro,
                participación y trabajo colectivo.

                Selecciona cada fotografía para ampliarla.

            </p>

            <div class="galeria-territorial">

                <figure>

                    <button class="foto-ampliable"
                        onclick="ampliarFotoTerritorio(this)"
                        aria-label="Ampliar encuentro comunitario">

                        <img
                            src="comunidad-01.jpeg"
                            alt="Personas reunidas en un espacio comunitario"
                            loading="lazy">

                    </button>

                    <figcaption>

                        Encuentros comunitarios.

                    </figcaption>

                </figure>

                <figure>

                    <button class="foto-ampliable"
                        onclick="ampliarFotoTerritorio(this)"
                        aria-label="Ampliar participación colectiva">

                        <img
                            src="comunidad-02.jpeg"
                            alt="Participantes en una reunión colectiva"
                            loading="lazy">

                    </button>

                    <figcaption>

                        Participación y organización.

                    </figcaption>

                </figure>

                <figure>

                    <button class="foto-ampliable"
                        onclick="ampliarFotoTerritorio(this)"
                        aria-label="Ampliar espacios de diálogo">

                        <img
                            src="comunidad-03.jpeg"
                            alt="Reunión en una construcción tradicional"
                            loading="lazy">

                    </button>

                    <figcaption>

                        Espacios de diálogo comunitario.

                    </figcaption>

                </figure>

                <figure>

                    <button class="foto-ampliable"
                        onclick="ampliarFotoTerritorio(this)"
                        aria-label="Ampliar trabajo comunitario">

                        <img
                            src="comunidad-04.jpeg"
                            alt="Personas participando en una actividad de trabajo colectivo"
                            loading="lazy">

                    </button>

                    <figcaption>

                        Trabajo colectivo y solidaridad.

                    </figcaption>

                </figure>

            </div>

            <div class="reflexion-territorio">

                <strong>El territorio como espacio de vida</strong>

                <p>

                    El territorio no es solamente un espacio
                    geográfico. También es el lugar donde
                    se construyen relaciones, se preserva
                    la memoria y se fortalece la identidad
                    de una comunidad.

                </p>

            </div>

            <small class="fuente-territorio">

                Fundamentación: Cabildo Indígena del
                Resguardo Kankuamo (2023) e IGAC (2025).

            </small>

        </div>

    `
},

    
{
    titulo: "Identidad y cultura de nuestro territorio",

    contenido: `

        <div class="identidad-territorio">

            <div class="etiqueta-tematica">
                CULTURA, MEMORIA Y PAZ
            </div>

            <blockquote class="frase-territorial">

                La identidad de un pueblo permanece viva
                cuando su memoria, sus conocimientos
                y sus tradiciones continúan caminando
                entre generaciones.

            </blockquote>

            <h3>Características culturales</h3>

            <p>

                La identidad cultural del pueblo Kankuamo
                se fundamenta en su relación ancestral
                con la Sierra Nevada de Santa Marta,
                la Ley de Origen, la memoria colectiva
                y sus procesos de recuperación y
                fortalecimiento cultural.

            </p>

            <p>

                La tradición oral, los conocimientos
                de los mayores, las prácticas espirituales,
                las expresiones artesanales y los espacios
                de encuentro comunitario contribuyen
                a mantener viva su identidad y transmitir
                sus conocimientos a las nuevas generaciones.

            </p>

            <div class="caracteristicas-territorio">

                <details>

                    <summary>
                        🌿 Ley de Origen
                    </summary>

                    <p>

                        Constituye un fundamento ancestral
                        que orienta las relaciones entre
                        las personas, la comunidad,
                        la naturaleza y el territorio.

                    </p>

                </details>

                <details>

                    <summary>
                        📖 Memoria y tradición oral
                    </summary>

                    <p>

                        Los conocimientos y experiencias
                        transmitidos entre generaciones
                        permiten preservar la historia,
                        la identidad y los aprendizajes
                        colectivos.

                    </p>

                </details>

                <details>

                    <summary>
                        🧶 Expresiones culturales
                    </summary>

                    <p>

                        Las expresiones artesanales,
                        los saberes tradicionales y las
                        prácticas culturales contribuyen
                        al fortalecimiento de la identidad
                        del pueblo Kankuamo.

                    </p>

                </details>

                <details>

                    <summary>
                        ⛰ Territorio y espiritualidad
                    </summary>

                    <p>

                        La relación con los espacios
                        naturales y sagrados constituye
                        una dimensión fundamental de
                        la vida cultural y espiritual.

                    </p>

                </details>

                <details>

                    <summary>
                        🤝 Unidad y gobierno propio
                    </summary>

                    <p>

                        El fortalecimiento de las
                        autoridades, la participación
                        y las formas propias de organización
                        contribuye a la permanencia cultural
                        y territorial.

                    </p>

                </details>

            </div>

            <h3>Identidad cultural en imágenes</h3>

            <p>

                Estas fotografías invitan a reconocer
                la diversidad cultural, los espacios
                de encuentro y las relaciones que
                fortalecen la vida colectiva.

            </p>

            <div class="galeria-territorial">

                <figure>

                    <button class="foto-ampliable"
                        onclick="ampliarFotoTerritorio(this)"
                        aria-label="Ampliar encuentro intercultural">

                        <img
                            src="comunidad-05.jpeg"
                            alt="Encuentro colectivo en un espacio con construcciones tradicionales"
                            loading="lazy">

                    </button>

                    <figcaption>

                        Encuentros e intercambio cultural.

                    </figcaption>

                </figure>

                <figure>

                    <button class="foto-ampliable"
                        onclick="ampliarFotoTerritorio(this)"
                        aria-label="Ampliar diálogo comunitario">

                        <img
                            src="comunidad-06.jpeg"
                            alt="Persona interviniendo ante un grupo de participantes"
                            loading="lazy">

                    </button>

                    <figcaption>

                        Participación y diálogo.

                    </figcaption>

                </figure>

                <figure class="foto-destacada">

                    <button class="foto-ampliable"
                        onclick="ampliarFotoTerritorio(this)"
                        aria-label="Ampliar identidad y territorio">

                        <img
                            src="comunidad-07.jpeg"
                            alt="Grupo de personas con prendas tradicionales en un paisaje montañoso"
                            loading="lazy">

                    </button>

                    <figcaption>

                        Identidad, diversidad cultural
                        y territorio.

                    </figcaption>

                </figure>

            </div>

            <h3>¿Por qué seleccionamos esta población?</h3>

            <p>

                Seleccionamos el Resguardo Indígena
                Kankuamo por su riqueza cultural,
                histórica, social y territorial,
                así como por sus procesos de resistencia,
                recuperación de la identidad y
                fortalecimiento de la organización
                comunitaria.

            </p>

            <p>

                Como estudiantes de Licenciatura en
                Matemáticas de la Universidad Popular
                del Cesar, consideramos importante
                conocer las realidades de los pueblos
                indígenas de nuestra región, reconocer
                la diversidad cultural y comprender
                las diferentes maneras de construir
                paz desde los territorios.

            </p>

            <p>

                Esta población nos permite reflexionar
                sobre el papel de la educación, la
                memoria, el diálogo intercultural
                y la participación comunitaria
                en la transformación de la sociedad.

            </p>

            <h3>¿Qué relación tiene con la construcción de paz?</h3>

            <p>

                El pueblo Kankuamo ha afrontado diferentes
                situaciones de violencia y afectaciones
                derivadas del conflicto armado colombiano.

                Frente a estas experiencias, ha desarrollado
                procesos de resistencia, recuperación
                de la memoria y fortalecimiento de
                su identidad colectiva.

            </p>

            <p>

                La construcción de paz en este contexto
                está relacionada con la protección
                del territorio, el respeto por la autonomía,
                el reconocimiento de los derechos colectivos,
                la recuperación cultural y la participación
                comunitaria.

            </p>

            <div class="caminos-paz">

                <h3>Construyendo caminos de paz</h3>

                <div>
                    <span>01</span>
                    Protección de la identidad cultural.
                </div>

                <div>
                    <span>02</span>
                    Fortalecimiento del gobierno propio.
                </div>

                <div>
                    <span>03</span>
                    Recuperación de la memoria colectiva.
                </div>

                <div>
                    <span>04</span>
                    Protección del territorio.
                </div>

                <div>
                    <span>05</span>
                    Diálogo y participación comunitaria.
                </div>

                <div>
                    <span>06</span>
                    Educación y respeto por la diversidad.
                </div>

            </div>

            <div class="reflexion-territorio">

                <strong>Nuestra reflexión como futuros docentes</strong>

                <p>

                    Conocer las realidades del pueblo
                    Kankuamo nos invita a valorar la
                    diversidad cultural y a comprender
                    que la educación debe reconocer
                    los conocimientos, las historias
                    y las experiencias de las comunidades.

                    Construir una cultura de paz desde
                    las aulas implica promover el respeto,
                    el diálogo intercultural, la inclusión
                    y el aprendizaje colectivo.

                </p>

            </div>

            <blockquote class="cierre-territorio">

                Un territorio que protege su memoria,
                fortalece su identidad y camina en unidad
                siembra las raíces de una paz duradera.

            </blockquote>

            <small class="fuente-territorio">

                Fundamentación: Cabildo Indígena del
                Resguardo Kankuamo, IGAC y Centro
                Nacional de Memoria Histórica.

            </small>

        </div>

    `
},

    
{
    titulo: "Conflictos que afectan la paz",

    contenido: `

        <div class="conflictos-territorio">

            <div class="etiqueta-tematica">
                CONVIVENCIA Y REALIDADES SOCIALES
            </div>

            <blockquote class="frase-territorial">
                Reconocer los conflictos es el primer
                paso para transformar nuestras
                realidades y construir caminos de paz.
            </blockquote>

            <h3>Problemáticas que afectan la convivencia</h3>

            <p>
                La construcción de paz en los territorios
                requiere reconocer las situaciones que
                afectan el bienestar, la convivencia,
                la dignidad y los derechos de las personas
                y las comunidades.
            </p>

            <p>
                En el contexto del Resguardo Indígena
                Kankuamo, resulta fundamental comprender
                las afectaciones históricas del conflicto
                armado, así como analizar los desafíos
                relacionados con la inclusión social,
                la identidad cultural, la participación
                comunitaria y la protección del territorio.
            </p>

            <p>
                La Corte Constitucional, mediante el
                Auto 004 de 2009, reconoció las graves
                afectaciones ocasionadas por el conflicto
                armado al pueblo Kankuamo, particularmente
                sobre su tejido social, su territorio
                y sus procesos de recuperación cultural.
            </p>

            <h3>Explora las problemáticas</h3>

            <p>
                Selecciona cada problemática para conocer
                su descripción y las posibles alternativas
                para fortalecer la convivencia.
            </p>

            <div class="problemas-interactivos">

                <details>

                    <summary>
                        ⚠️ Violencia y conflicto armado
                    </summary>

                    <div class="contenido-problema">

                        <h4>Descripción</h4>

                        <p>
                            El pueblo Kankuamo ha sufrido
                            afectaciones históricas derivadas
                            del conflicto armado colombiano,
                            incluyendo desplazamiento forzado,
                            amenazas y rupturas del tejido social.
                        </p>

                        <h4>Consecuencias</h4>

                        <p>
                            Debilitamiento de la confianza,
                            afectaciones familiares, pérdida
                            de espacios comunitarios y
                            dificultades para la transmisión
                            de conocimientos culturales.
                        </p>

                        <h4>Alternativas de solución</h4>

                        <p>
                            Fortalecer los procesos de memoria,
                            reparación integral, reconciliación
                            y garantías de no repetición.
                        </p>

                    </div>

                </details>

                <details>

                    <summary>
                        🤝 Discriminación
                    </summary>

                    <div class="contenido-problema">

                        <h4>Descripción</h4>

                        <p>
                            La discriminación se manifiesta
                            mediante prejuicios, señalamientos
                            o tratos desiguales asociados
                            con la identidad cultural,
                            las tradiciones o la pertenencia
                            a un pueblo indígena.
                        </p>

                        <h4>Consecuencias</h4>

                        <p>
                            Puede afectar la dignidad,
                            el reconocimiento cultural,
                            la participación y el sentido
                            de pertenencia.
                        </p>

                        <h4>Alternativas de solución</h4>

                        <p>
                            Promover la educación intercultural,
                            el respeto por la diversidad
                            y el reconocimiento de los
                            derechos colectivos.
                        </p>

                    </div>

                </details>

                <details>

                    <summary>
                        ⚖️ Desigualdad social
                    </summary>

                    <div class="contenido-problema">

                        <h4>Descripción</h4>

                        <p>
                            La desigualdad social se relaciona
                            con las diferencias en el acceso
                            a oportunidades educativas,
                            económicas, laborales y a
                            servicios fundamentales.
                        </p>

                        <h4>Consecuencias</h4>

                        <p>
                            Las barreras de acceso pueden
                            limitar el bienestar de las
                            familias y generar condiciones
                            de exclusión y vulnerabilidad.
                        </p>

                        <h4>Alternativas de solución</h4>

                        <p>
                            Promover oportunidades equitativas,
                            el fortalecimiento de la educación
                            y la garantía efectiva de derechos.
                        </p>

                    </div>

                </details>

                <details>

                    <summary>
                        💬 Intolerancia
                    </summary>

                    <div class="contenido-problema">

                        <h4>Descripción</h4>

                        <p>
                            La intolerancia aparece cuando
                            las personas tienen dificultades
                            para reconocer y respetar las
                            diferencias de pensamiento,
                            opinión o comportamiento.
                        </p>

                        <h4>Consecuencias</h4>

                        <p>
                            Puede generar enfrentamientos,
                            dificultades de comunicación
                            y debilitamiento de las relaciones
                            familiares y comunitarias.
                        </p>

                        <h4>Alternativas de solución</h4>

                        <p>
                            Fortalecer la escucha activa,
                            el diálogo, la empatía y la
                            resolución pacífica de conflictos.
                        </p>

                    </div>

                </details>

                <details>

                    <summary>
                        👥 Exclusión social
                    </summary>

                    <div class="contenido-problema">

                        <h4>Descripción</h4>

                        <p>
                            La exclusión social ocurre cuando
                            determinadas personas o colectivos
                            encuentran barreras para participar
                            plenamente en las decisiones
                            y oportunidades de la sociedad.
                        </p>

                        <h4>Consecuencias</h4>

                        <p>
                            Puede afectar el ejercicio de
                            derechos, la participación
                            comunitaria y el reconocimiento
                            de las necesidades colectivas.
                        </p>

                        <h4>Alternativas de solución</h4>

                        <p>
                            Garantizar espacios de participación,
                            promover la inclusión y respetar
                            las formas propias de organización.
                        </p>

                    </div>

                </details>

                <details>

                    <summary>
                        🌿 Afectaciones territoriales y culturales
                    </summary>

                    <div class="contenido-problema">

                        <h4>Descripción</h4>

                        <p>
                            Las afectaciones al territorio,
                            los espacios de importancia
                            cultural y los procesos de
                            transmisión de conocimientos
                            pueden poner en riesgo la
                            continuidad cultural de
                            las comunidades indígenas.
                        </p>

                        <h4>Consecuencias</h4>

                        <p>
                            Debilitamiento de la identidad,
                            afectaciones a la memoria
                            colectiva y dificultades para
                            mantener las relaciones
                            ancestrales con el territorio.
                        </p>

                        <h4>Alternativas de solución</h4>

                        <p>
                            Fortalecer la autonomía,
                            la protección territorial,
                            la educación propia y la
                            transmisión intergeneracional
                            de conocimientos.
                        </p>

                    </div>

                </details>

            </div>

            <div class="reflexion-territorial">

                <strong>
                    Comprender para transformar
                </strong>

                <p>
                    Identificar las problemáticas que
                    afectan la convivencia permite
                    reflexionar sobre sus causas,
                    reconocer sus consecuencias y
                    construir alternativas colectivas
                    orientadas al respeto, la justicia
                    y el bienestar comunitario.
                </p>

            </div>

        </div>

    `
},

   
{
    titulo: "Escuchando a nuestra comunidad",

    contenido: `

        <div class="testimonios-territorio">

            <div class="etiqueta-tematica">
                VOCES Y EXPERIENCIAS COMUNITARIAS
            </div>

            <blockquote class="frase-territorial">
                Cada voz guarda una historia y cada
                historia nos invita a comprender
                los caminos de la paz.
            </blockquote>

            <h3>Testimonios de nuestro territorio</h3>

            <p>
                Como parte del acercamiento comunitario,
                se realizaron dos entrevistas a integrantes
                de la comunidad seleccionada, con el
                propósito de conocer sus percepciones
                acerca de las problemáticas que afectan
                la convivencia y la construcción de paz.
            </p>

            <p>
                Estos testimonios constituyen evidencias
                audiovisuales que permiten acercarnos
                a las experiencias de las personas
                y reconocer la importancia de escuchar
                las voces del territorio.
            </p>

            <!-- PRIMER TESTIMONIO -->

            <div class="entrevista-comunidad">

                <div class="encabezado-entrevista">

                    <span>TESTIMONIO COMUNITARIO 01</span>

                    <h3>
                        Primer testimonio:
                        problemáticas y construcción de paz
                    </h3>

                </div>

                <div class="video-entrevista">

                    <iframe
                        src="https://www.youtube-nocookie.com/embed/W8-KaDt0CCA"
                        title="Primer testimonio comunitario Kankuamo"
                        allow="accelerometer; autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture;
                        web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        loading="lazy">
                    </iframe>

                    <div class="informacion-video">

                        <strong>
                            Primer testimonio comunitario
                        </strong>

                        <p>
                            Resguardo Indígena Kankuamo
                        </p>

                        <p>
                            Duración: 6 minutos y 34 segundos.
                        </p>

                        <a
                            class="boton-youtube"
                            href="https://youtu.be/W8-KaDt0CCA"
                            target="_blank"
                            rel="noopener noreferrer">

                            ▶ Ver video en YouTube

                        </a>

                        <div class="enlace-video">

                            <small>Enlace del video:</small>

                            <a
                                href="https://youtu.be/W8-KaDt0CCA"
                                target="_blank"
                                rel="noopener noreferrer">

                                https://youtu.be/W8-KaDt0CCA

                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <!-- SEGUNDO TESTIMONIO -->

            <div class="entrevista-comunidad">

                <div class="encabezado-entrevista">

                    <span>TESTIMONIO COMUNITARIO 02</span>

                    <h3>
                        Segundo testimonio:
                        convivencia y realidades comunitarias
                    </h3>

                </div>

                <div class="video-entrevista">

                    <iframe
                        src="https://www.youtube-nocookie.com/embed/DogqIDU7XYU"
                        title="Segundo testimonio comunitario Kankuamo"
                        allow="accelerometer; autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture;
                        web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        loading="lazy">
                    </iframe>

                    <div class="informacion-video">

                        <strong>
                            Segundo testimonio comunitario
                        </strong>

                        <p>
                            Resguardo Indígena Kankuamo
                        </p>

                        <p>
                            Duración: 11 minutos y 36 segundos.
                        </p>

                        <a
                            class="boton-youtube"
                            href="https://youtu.be/DogqIDU7XYU"
                            target="_blank"
                            rel="noopener noreferrer">

                            ▶ Ver video en YouTube

                        </a>

                        <div class="enlace-video">

                            <small>Enlace del video:</small>

                            <a
                                href="https://youtu.be/DogqIDU7XYU"
                                target="_blank"
                                rel="noopener noreferrer">

                                https://youtu.be/DogqIDU7XYU

                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <div class="reflexion-territorial">

                <strong>
                    La importancia de escuchar
                </strong>

                <p>
                    Escuchar las experiencias de las
                    comunidades permite reconocer la
                    diversidad de perspectivas y
                    comprender que la construcción
                    de paz requiere participación,
                    sensibilidad y respeto por
                    las realidades territoriales.
                </p>

            </div>

            <blockquote class="frase-territorial">

                Escuchar con respeto es sembrar
                confianza; comprender al otro
                es comenzar a construir paz.

            </blockquote>

        </div>

    `
},

    
{
    titulo: "Análisis de las problemáticas",

    contenido: `

        <div class="analisis-conflictos">

            <div class="etiqueta-tematica">
                REFLEXIÓN Y TRANSFORMACIÓN SOCIAL
            </div>

            <blockquote class="frase-territorial">

                La paz comienza cuando dejamos
                de ignorar los problemas y
                decidimos construir soluciones
                colectivamente.

            </blockquote>

            <h3>Análisis del contexto territorial</h3>

            <p>
                Las problemáticas que afectan la
                convivencia deben comprenderse
                considerando las dimensiones
                históricas, sociales, culturales
                y territoriales de las comunidades.
            </p>

            <p>
                En el caso del pueblo Kankuamo,
                los antecedentes del conflicto
                armado permiten reconocer la
                importancia de fortalecer la memoria,
                la identidad cultural, la autonomía
                y los vínculos comunitarios como
                elementos necesarios para la
                construcción de una paz duradera.
            </p>

            <p>
                El análisis de categorías como
                violencia, discriminación, desigualdad,
                intolerancia y exclusión permite
                reflexionar sobre las condiciones
                que pueden afectar la convivencia
                y las posibilidades de transformación
                desde la educación y la participación.
            </p>

            <h3>
                Problemáticas, consecuencias
                y alternativas de solución
            </h3>

            <div class="tabla-comparativa-paz">

                <table>

                    <thead>

                        <tr>
                            <th>Problemática</th>
                            <th>Consecuencias</th>
                            <th>Alternativas de paz</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Violencia</td>
                            <td>
                                Ruptura del tejido social
                                y pérdida de confianza.
                            </td>
                            <td>
                                Memoria, reparación
                                y reconciliación.
                            </td>
                        </tr>

                        <tr>
                            <td>Discriminación</td>
                            <td>
                                Afectación de la dignidad
                                y la identidad cultural.
                            </td>
                            <td>
                                Educación intercultural
                                y respeto por la diversidad.
                            </td>
                        </tr>

                        <tr>
                            <td>Desigualdad</td>
                            <td>
                                Limitaciones en el acceso
                                a oportunidades y derechos.
                            </td>
                            <td>
                                Equidad y garantía
                                de derechos.
                            </td>
                        </tr>

                        <tr>
                            <td>Intolerancia</td>
                            <td>
                                Conflictos y dificultades
                                en la comunicación.
                            </td>
                            <td>
                                Diálogo, empatía
                                y mediación.
                            </td>
                        </tr>

                        <tr>
                            <td>Exclusión social</td>
                            <td>
                                Barreras para la
                                participación colectiva.
                            </td>
                            <td>
                                Inclusión y fortalecimiento
                                comunitario.
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Afectaciones territoriales
                                y culturales
                            </td>
                            <td>
                                Riesgos para la memoria,
                                la identidad y la
                                continuidad cultural.
                            </td>
                            <td>
                                Protección territorial
                                y fortalecimiento
                                de la autonomía.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <h3>
                Dimensiones para comprender
                las problemáticas
            </h3>

            <div class="problemas-interactivos">

                <details>

                    <summary>
                        👥 Dimensión social
                    </summary>

                    <div class="contenido-problema">

                        <p>
                            Permite analizar cómo las
                            desigualdades, la exclusión
                            y las dificultades de convivencia
                            pueden afectar las relaciones
                            entre las personas y limitar
                            el bienestar colectivo.
                        </p>

                    </div>

                </details>

                <details>

                    <summary>
                        🧶 Dimensión cultural
                    </summary>

                    <div class="contenido-problema">

                        <p>
                            Invita a reconocer la importancia
                            de proteger los conocimientos
                            ancestrales, las tradiciones,
                            la memoria y las expresiones
                            culturales de las comunidades.
                        </p>

                    </div>

                </details>

                <details>

                    <summary>
                        🌿 Dimensión territorial
                    </summary>

                    <div class="contenido-problema">

                        <p>
                            Permite comprender que el
                            territorio representa un
                            espacio de vida, identidad,
                            organización y construcción
                            colectiva de paz.
                        </p>

                    </div>

                </details>

                <details>

                    <summary>
                        📚 Dimensión educativa
                    </summary>

                    <div class="contenido-problema">

                        <p>
                            Reconoce la educación como una
                            herramienta para transformar
                            prácticas discriminatorias,
                            promover el pensamiento crítico
                            y fortalecer el respeto por
                            las diferencias.
                        </p>

                    </div>

                </details>

            </div>

            <h3>
                Alternativas para fortalecer la convivencia
            </h3>

            <div class="caminos-paz">

                <div>
                    <span>01</span>
                    Promover espacios de diálogo y escucha.
                </div>

                <div>
                    <span>02</span>
                    Fortalecer la identidad cultural.
                </div>

                <div>
                    <span>03</span>
                    Reconocer y respetar la diversidad.
                </div>

                <div>
                    <span>04</span>
                    Impulsar la participación comunitaria.
                </div>

                <div>
                    <span>05</span>
                    Proteger el territorio y la memoria.
                </div>

                <div>
                    <span>06</span>
                    Promover una educación inclusiva.
                </div>

                <div>
                    <span>07</span>
                    Fortalecer la resolución pacífica
                    de conflictos.
                </div>

            </div>

            <h3>Nuestra reflexión académica</h3>

            <p>
                Como estudiantes de Licenciatura en
                Matemáticas de la Universidad Popular
                del Cesar, reconocemos que nuestra
                formación profesional también implica
                una responsabilidad social frente a
                las problemáticas que afectan la
                convivencia y los derechos humanos.
            </p>

            <p>
                Desde las aulas podemos promover
                estrategias de aprendizaje colaborativo,
                respeto por la diversidad, participación
                equitativa y resolución de desacuerdos
                mediante el diálogo.
            </p>

            <p>
                Consideramos que la construcción de paz
                requiere reconocer las realidades
                particulares de las comunidades y
                fortalecer sus capacidades para
                participar en la transformación
                de su entorno.
            </p>

            <div class="reflexion-territorial">

                <strong>
                    Sembrando paz desde nuestra profesión
                </strong>

                <p>
                    Educar para la paz significa formar
                    personas capaces de pensar críticamente,
                    reconocer las diferencias, actuar
                    con responsabilidad y construir
                    soluciones que favorezcan el
                    bienestar colectivo.
                </p>

            </div>

            <blockquote class="cierre-territorio">

                Los conflictos pueden convertirse
                en oportunidades de transformación
                cuando elegimos el diálogo,
                el respeto y la unidad.

            </blockquote>

        </div>

    `
},

    
{
    titulo: "Instituciones que construyen paz",

    contenido: `

        <div class="institucion-paz">

            <div class="etiqueta-tematica">
                JUSTICIA, REPARACIÓN Y TERRITORIO
            </div>

            <blockquote class="frase-territorial">

                Restituir los derechos de las víctimas
                es contribuir a sanar las heridas del
                pasado y construir nuevas oportunidades
                para la paz.

            </blockquote>

            <div class="presentacion-urt">

                <div class="sigla-urt">URT</div>

                <h3>Unidad de Restitución de Tierras</h3>

                <p>
                    Ministerio de Agricultura y Desarrollo Rural
                </p>

                <small>
                    República de Colombia
                </small>

            </div>

            <h3>¿Qué es la Unidad de Restitución de Tierras?</h3>

            <p>
                La Unidad de Restitución de Tierras es una
                entidad del Gobierno colombiano, adscrita
                al Ministerio de Agricultura y Desarrollo
                Rural, creada mediante la Ley 1448 de 2011,
                conocida como Ley de Víctimas y Restitución
                de Tierras.
            </p>

            <p>
                Su objetivo principal consiste en gestionar
                la restitución de tierras y derechos
                territoriales de las víctimas que sufrieron
                despojo o abandono forzado en el contexto
                del conflicto armado colombiano.
            </p>

            <p>
                Su labor contribuye a la reparación integral,
                al restablecimiento de los derechos de las
                víctimas y a la reconstrucción de sus
                proyectos de vida.
            </p>

            <h3>Principales funciones de la entidad</h3>

            <div class="caracteristicas-territorio">

                <details>
                    <summary>
                        🤝 Atención y orientación a las víctimas
                    </summary>

                    <p>
                        Brindar información y acompañamiento
                        a las personas y comunidades sobre
                        las rutas de restitución de tierras
                        y derechos territoriales.
                    </p>
                </details>

                <details>
                    <summary>
                        📋 Investigación administrativa
                    </summary>

                    <p>
                        Recopilar información, estudiar las
                        solicitudes y analizar las circunstancias
                        relacionadas con el despojo y el
                        abandono forzado de tierras.
                    </p>
                </details>

                <details>
                    <summary>
                        ⚖️ Representación judicial
                    </summary>

                    <p>
                        Presentar las solicitudes de
                        restitución ante los jueces
                        especializados, cuando corresponda,
                        para que estos adopten las decisiones
                        judiciales respectivas.
                    </p>
                </details>

                <details>
                    <summary>
                        🌿 Restitución de derechos territoriales
                    </summary>

                    <p>
                        Gestionar los procesos de restitución
                        de derechos territoriales de los pueblos
                        y comunidades étnicas afectados por el
                        conflicto armado, respetando sus
                        características culturales.
                    </p>
                </details>

                <details>
                    <summary>
                        🏛 Articulación institucional
                    </summary>

                    <p>
                        Coordinar acciones con otras entidades
                        del Estado para contribuir al
                        restablecimiento de derechos y al
                        cumplimiento de las decisiones judiciales.
                    </p>
                </details>

                <details>
                    <summary>
                        🌱 Acompañamiento posterior
                    </summary>

                    <p>
                        Apoyar los procesos que favorecen
                        la sostenibilidad de la restitución,
                        incluyendo el acompañamiento a
                        proyectos productivos cuando corresponda.
                    </p>
                </details>

            </div>

            
<!-- PROGRAMAS INTERACTIVOS DE LA URT -->

<h3>Programas y líneas de acción</h3>

<p>
    Selecciona cada programa para conocer
    su contribución a la restitución de tierras
    y la construcción de paz.
</p>

<div class="programas-urt-interactivos">

    <details>

        <summary>
            <span class="numero-programa">01</span>

            Restitución individual de tierras
        </summary>

        <p>
            Gestión de las solicitudes de personas
            y familias víctimas del despojo o
            abandono forzado.
        </p>

    </details>

    <details>

        <summary>
            <span class="numero-programa">02</span>

            Restitución de derechos territoriales étnicos
        </summary>

        <p>
            Atención diferencial a pueblos indígenas
            y comunidades negras, afrocolombianas,
            raizales y palenqueras.
        </p>

    </details>

    <details>

        <summary>
            <span class="numero-programa">03</span>

            Protección territorial
        </summary>

        <p>
            Gestión de medidas orientadas a proteger
            los derechos sobre tierras y territorios
            afectados por el abandono forzado
            y otras situaciones de riesgo.
        </p>

    </details>

    <details>

        <summary>
            <span class="numero-programa">04</span>

            Proyectos productivos
        </summary>

        <p>
            Acompañamiento a iniciativas productivas
            que contribuyan a la recuperación
            económica y a la sostenibilidad
            de los procesos de restitución.
        </p>

    </details>

    <details>

        <summary>
            <span class="numero-programa">05</span>

            Participación social
        </summary>

        <p>
            Promoción de espacios de información,
            participación y acompañamiento
            a las víctimas y comunidades.
        </p>

    </details>

</div>
            
<!-- RUTA DE RESTITUCIÓN DESPLEGABLE -->

<div class="programas-urt-interactivos">

    <details>

        <summary>

            🏛️ ¿Cómo funciona la restitución de tierras?

        </summary>

        <div class="ruta-restitucion ruta-completa">

            <div class="etapa-restitucion">

                <h4>
                    <span>01</span>
                    Solicitud de restitución
                </h4>

                <p>
                    La víctima o comunidad inicia el trámite
                    y recibe orientación institucional.
                </p>

            </div>

            <div class="flecha-ruta">↓</div>

            <div class="etapa-restitucion">

                <h4>
                    <span>02</span>
                    Estudio administrativo
                </h4>

                <p>
                    La URT analiza la solicitud, recopila
                    información y determina si procede
                    la inscripción en el registro
                    correspondiente.
                </p>

            </div>

            <div class="flecha-ruta">↓</div>

            <div class="etapa-restitucion">

                <h4>
                    <span>03</span>
                    Etapa judicial
                </h4>

                <p>
                    Los jueces especializados estudian
                    las solicitudes, las pruebas y
                    los derechos involucrados.
                </p>

            </div>

            <div class="flecha-ruta">↓</div>

            <div class="etapa-restitucion">

                <h4>
                    <span>04</span>
                    Sentencia judicial
                </h4>

                <p>
                    La autoridad judicial decide sobre
                    la restitución y las medidas
                    de reparación correspondientes.
                </p>

            </div>

            <div class="flecha-ruta">↓</div>

            <div class="etapa-restitucion">

                <h4>
                    <span>05</span>
                    Cumplimiento de las órdenes
                </h4>

                <p>
                    Las entidades responsables desarrollan
                    las acciones ordenadas judicialmente
                    para restablecer los derechos
                    y contribuir a una restitución sostenible.
                </p>

            </div>

            <small>
                Esquema pedagógico general.
                Los procesos de restitución étnica
                cuentan con procedimientos diferenciales.
            </small>

        </div>

    </details>

</div>

            <h3>La restitución y el pueblo Kankuamo</h3>

            <p>
                El Decreto Ley 4633 de 2011 establece
                medidas especiales de atención,
                reparación integral y restitución
                de derechos territoriales para los
                pueblos y comunidades indígenas
                víctimas del conflicto armado.
            </p>

            <p>
                En el contexto del pueblo Kankuamo,
                la restitución territorial constituye
                una herramienta importante para
                la recuperación de los derechos
                colectivos afectados por la violencia.
            </p>

            <p>
                El territorio no representa únicamente
                un espacio físico, sino también el
                fundamento de la identidad cultural,
                la memoria colectiva, la espiritualidad,
                la autonomía y la continuidad de
                los conocimientos ancestrales.
            </p>

            
<!-- PROMOCIÓN DE LOS DERECHOS HUMANOS -->

<div class="programas-urt-interactivos">

    <details>

        <summary>

            ⚖️ Promoción de los derechos humanos

        </summary>

        <div class="caminos-paz derechos-urt">

            <div>
                <span>01</span>
                Reconocimiento de la dignidad
                de las víctimas.
            </div>

            <div>
                <span>02</span>
                Protección y recuperación
                de derechos territoriales.
            </div>

            <div>
                <span>03</span>
                Acceso a la justicia.
            </div>

            <div>
                <span>04</span>
                Reparación integral.
            </div>

            <div>
                <span>05</span>
                Respeto por la diversidad
                étnica y cultural.
            </div>

            <div>
                <span>06</span>
                Contribución a las garantías
                de no repetición.
            </div>

        </div>

    </details>

</div>


            <div class="reflexion-territorial">

                <strong>
                    Restituir derechos para construir paz
                </strong>

                <p>
                    La restitución de tierras contribuye
                    a enfrentar las consecuencias del
                    conflicto armado, recuperar la
                    confianza institucional y generar
                    condiciones para una convivencia
                    fundamentada en la justicia,
                    la dignidad y el respeto.
                </p>

            </div>

            <a class="boton-institucional"
               href="https://www.urt.gov.co/"
               target="_blank"
               rel="noopener noreferrer">

                🌐 Conoce la página oficial de la URT

            </a>

        </div>

    `
},

    
{
    titulo: "Nuestra experiencia institucional",

    contenido: `

        <div class="experiencia-institucional">

            <div class="etiqueta-tematica">
                EXPERIENCIA Y APRENDIZAJE
            </div>

            <blockquote class="frase-territorial">

                La paz se fortalece cuando las
                instituciones y las comunidades
                trabajan juntas para recuperar
                derechos y transformar realidades.

            </blockquote>

            <h3>Descripción de la visita institucional</h3>

            <p>
                Como parte de las actividades académicas
                de la asignatura Cátedra de la Paz,
                seleccionamos la Unidad de Restitución
                de Tierras como entidad de interés para
                comprender el papel de las instituciones
                públicas en la construcción de paz.
            </p>

            <p>
                Nuestro acercamiento institucional tiene
                como propósito conocer sus funciones,
                las rutas de atención a las víctimas,
                los procesos de restitución de tierras
                y su relación con la reparación integral
                y la recuperación de derechos territoriales.
            </p>

            <p>
                Esta experiencia se relaciona con
                nuestra investigación sobre el
                Resguardo Indígena Kankuamo, debido
                a la importancia del territorio,
                la memoria, la identidad cultural
                y los derechos colectivos en la
                construcción de una paz duradera.
            </p>

            <!-- VIDEO DE LA VISITA INSTITUCIONAL -->

            <div class="entrevista-comunidad">

                <div class="encabezado-entrevista">

                    <span>VISITA INSTITUCIONAL</span>

                    <h3>
                        Unidad de Restitución de Tierras
                    </h3>

                </div>

                <div class="video-entrevista">

                    <iframe
                        src="https://www.youtube-nocookie.com/embed/TeX0XX9kQkw"
                        title="Visita institucional a la Unidad de Restitución de Tierras"
                        allow="accelerometer; autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture;
                        web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        loading="lazy">
                    </iframe>

                    <div class="informacion-video">

                        <strong>
                            Experiencia institucional — URT
                        </strong>

                        <p>
                            Cátedra de la Paz · 2026
                        </p>

                        <p>
                            Universidad Popular del Cesar
                        </p>

                        <a
                            class="boton-youtube"
                            href="https://youtu.be/TeX0XX9kQkw"
                            target="_blank"
                            rel="noopener noreferrer">

                            ▶ Ver video en YouTube

                        </a>

                        <div class="enlace-video">

                            <small>Enlace del video:</small>

                            <a
                                href="https://youtu.be/TeX0XX9kQkw"
                                target="_blank"
                                rel="noopener noreferrer">

                                https://youtu.be/TeX0XX9kQkw

                            </a>

                        </div>

                    </div>

                </div>

                <div class="datos-entrevista">

                    <p>
                        <strong>Entidad:</strong>
                        Unidad de Restitución de Tierras.
                    </p>

                    <p>
                        <strong>Actividad:</strong>
                        Visita y entrevista institucional.
                    </p>

                    <p>
                        <strong>Propósito:</strong>
                        Comprender su contribución a
                        la construcción de paz.
                    </p>

                </div>

            </div>

            
<!-- APRENDIZAJES Y REFLEXIONES DESPLEGABLES -->

<div class="programas-urt-interactivos">

    <details>

        <summary>

            📖 Aprendizajes y reflexiones sobre la URT

        </summary>

        <div class="aprendizajes-urt">

            <p class="introduccion-aprendizajes">

                El estudio de las funciones de la Unidad
                de Restitución de Tierras nos permite
                comprender que la construcción de paz
                requiere acciones institucionales
                orientadas a garantizar los derechos
                humanos y atender las consecuencias
                del conflicto armado.

            </p>

            <div class="aprendizaje-urt">

                <h4>

                    ⚖️ La importancia de la justicia

                </h4>

                <p>

                    La construcción de paz requiere
                    mecanismos que permitan reconocer
                    las afectaciones sufridas por
                    las víctimas y promover el
                    restablecimiento de sus derechos.

                </p>

            </div>

            <div class="aprendizaje-urt">

                <h4>

                    🌿 El valor del territorio

                </h4>

                <p>

                    La recuperación de los derechos
                    territoriales contribuye a la
                    protección de los proyectos de vida,
                    la identidad cultural y las
                    relaciones comunitarias.

                </p>

            </div>

            <div class="aprendizaje-urt">

                <h4>

                    🤝 La reparación de las víctimas

                </h4>

                <p>

                    La reparación integral busca
                    responder a los daños ocasionados
                    por la violencia y contribuir
                    a recuperar condiciones de
                    dignidad y bienestar.

                </p>

            </div>

            <div class="aprendizaje-urt">

                <h4>

                    👥 La participación comunitaria

                </h4>

                <p>

                    La participación de las comunidades
                    resulta fundamental para reconocer
                    sus necesidades y orientar las
                    acciones institucionales desde
                    sus realidades territoriales.

                </p>

            </div>

            <div class="aprendizaje-urt">

                <h4>

                    🕊️ Las garantías de no repetición

                </h4>

                <p>

                    La construcción de una paz duradera
                    implica transformar las condiciones
                    que han favorecido la violencia
                    y fortalecer la protección
                    de los derechos humanos.

                </p>

            </div>

        </div>

    </details>

</div>

            <h3>¿Cómo contribuye la URT a la paz?</h3>

            <div class="tabla-comparativa-paz">

                <table>

                    <thead>

                        <tr>
                            <th>Acción institucional</th>
                            <th>Aporte a la construcción de paz</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Restitución de tierras</td>
                            <td>
                                Recuperación de derechos
                                afectados por el despojo
                                y el abandono forzado.
                            </td>
                        </tr>

                        <tr>
                            <td>Atención a las víctimas</td>
                            <td>
                                Reconocimiento de la dignidad
                                y acceso a mecanismos
                                de reparación.
                            </td>
                        </tr>

                        <tr>
                            <td>Enfoque diferencial étnico</td>
                            <td>
                                Protección de la identidad
                                cultural, la autonomía y
                                los derechos territoriales.
                            </td>
                        </tr>

                        <tr>
                            <td>Proyectos productivos</td>
                            <td>
                                Apoyo a la recuperación
                                económica y a la
                                sostenibilidad de la restitución.
                            </td>
                        </tr>

                        <tr>
                            <td>Articulación institucional</td>
                            <td>
                                Coordinación para
                                el restablecimiento
                                efectivo de derechos.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <h3>Relación con la convivencia comunitaria</h3>

            <p>
                El acceso a la justicia y la recuperación
                de los derechos territoriales pueden
                contribuir a fortalecer la confianza,
                reconstruir el tejido social y generar
                condiciones favorables para la
                convivencia pacífica.
            </p>

            <p>
                En los pueblos indígenas, estos procesos
                deben reconocer las particularidades
                culturales, las autoridades propias,
                la memoria colectiva y la relación
                ancestral con el territorio.
            </p>

            <h3>Nuestra reflexión como futuros docentes</h3>

            <p>
                Como estudiantes de Licenciatura en
                Matemáticas de la Universidad Popular
                del Cesar, consideramos que conocer
                las instituciones que trabajan por
                la garantía de derechos permite
                ampliar nuestra comprensión de
                la realidad social colombiana.
            </p>

            <p>
                Nuestra formación profesional también
                implica una responsabilidad frente
                a la promoción de la justicia,
                el respeto por la diversidad,
                la inclusión y la convivencia pacífica.
            </p>

            <p>
                Desde las aulas podemos contribuir
                a formar ciudadanos conscientes de
                sus derechos y responsabilidades,
                capaces de reconocer las realidades
                de sus territorios y participar
                en su transformación.
            </p>

            <div class="reflexion-territorial">

                <strong>
                    Educar para la justicia y la paz
                </strong>

                <p>
                    La educación nos permite comprender
                    nuestra historia, reconocer las
                    consecuencias de la violencia
                    y fortalecer una sociedad
                    fundamentada en el respeto,
                    la solidaridad y la garantía
                    de los derechos humanos.
                </p>

            </div>

            <blockquote class="cierre-territorio">

                Recuperar un territorio es también
                recuperar la esperanza, fortalecer
                la memoria y abrir nuevos caminos
                para la construcción de paz.

            </blockquote>

        </div>

    `
},

    
{
    titulo: "Derechos humanos y cultura de paz",

    contenido: `

        <div class="derechos-humanos-paz">

            <div class="etiqueta-tematica">
                DIGNIDAD, IGUALDAD Y JUSTICIA
            </div>

            <blockquote class="frase-territorial">
                Reconocer los derechos de los demás
                es reconocer nuestra humanidad
                y nuestra responsabilidad de construir paz.
            </blockquote>

            <h3>¿Qué son los derechos humanos?</h3>

            <p>
                Los derechos humanos son principios y garantías
                fundamentales que protegen la dignidad,
                la libertad, la igualdad y el bienestar
                de todas las personas, sin distinción
                de origen, identidad cultural, género,
                creencias o condición social.
            </p>

            <p>
                En el contexto del pueblo Kankuamo,
                la construcción de una cultura de paz
                requiere reconocer tanto los derechos
                individuales como los derechos colectivos
                relacionados con el territorio, la autonomía,
                la identidad cultural y la participación comunitaria.
            </p>

            <h3>Principios fundamentales</h3>

            <div class="programas-urt-interactivos">

                <details>
                    <summary>🤝 Respeto</summary>

                    <p>
                        Reconocer y valorar las diferencias
                        culturales, sociales y personales,
                        promoviendo relaciones fundamentadas
                        en la convivencia y la tolerancia.
                    </p>
                </details>

                <details>
                    <summary>❤️ Dignidad humana</summary>

                    <p>
                        Reconocer el valor inherente
                        de todas las personas, proteger
                        su integridad y garantizar
                        condiciones de vida dignas.
                    </p>
                </details>

                <details>
                    <summary>⚖️ Igualdad</summary>

                    <p>
                        Garantizar los derechos y las
                        oportunidades sin discriminación,
                        reconociendo las necesidades
                        particulares de cada población.
                    </p>
                </details>

                <details>
                    <summary>👥 Inclusión</summary>

                    <p>
                        Promover la participación de todas
                        las personas en la vida social,
                        educativa, cultural y comunitaria.
                    </p>
                </details>

                <details>
                    <summary>🏛️ Justicia social</summary>

                    <p>
                        Promover condiciones equitativas,
                        el acceso efectivo a los derechos
                        y la transformación de las situaciones
                        que generan desigualdad y exclusión.
                    </p>
                </details>

            </div>

            <h3>Derechos humanos en el contexto Kankuamo</h3>

            <p>
                La historia del pueblo Kankuamo permite
                comprender la importancia de proteger
                los derechos humanos y fortalecer
                las iniciativas comunitarias de memoria,
                participación, resistencia y recuperación cultural.
            </p>

            <div class="programas-urt-interactivos">

                <details>

                    <summary>
                        🌱 Situaciones que promueven
                        los derechos humanos
                    </summary>

                    <div class="aprendizajes-urt">

                        <div class="aprendizaje-urt">

                            <h4>Identidad cultural</h4>

                            <p>
                                Fortalecimiento de las tradiciones,
                                los conocimientos ancestrales
                                y las formas propias de organización.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Participación comunitaria</h4>

                            <p>
                                Desarrollo de reuniones,
                                encuentros y actividades
                                colectivas que favorecen
                                la participación y la cooperación.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Memoria y reparación</h4>

                            <p>
                                Procesos de reconocimiento
                                de las víctimas, recuperación
                                de la memoria colectiva
                                y reconstrucción del tejido social.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Protección territorial</h4>

                            <p>
                                Acciones comunitarias
                                e institucionales orientadas
                                a proteger los derechos territoriales,
                                la identidad y la autonomía.
                            </p>

                        </div>

                    </div>

                </details>

                <details>

                    <summary>
                        ⚠️ Situaciones de vulneración
                        y riesgo de los derechos humanos
                    </summary>

                    <div class="aprendizajes-urt">

                        <div class="aprendizaje-urt">

                            <h4>Conflicto armado</h4>

                            <p>
                                Las afectaciones históricas
                                de la violencia han generado
                                daños individuales, familiares
                                y colectivos.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Desplazamiento forzado</h4>

                            <p>
                                El abandono involuntario
                                del territorio afecta
                                las relaciones familiares,
                                culturales y comunitarias.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Discriminación cultural</h4>

                            <p>
                                Los prejuicios y la
                                estigmatización pueden
                                afectar la dignidad
                                y el reconocimiento
                                de la identidad indígena.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Desigualdad y exclusión</h4>

                            <p>
                                Las barreras de acceso
                                a servicios, oportunidades
                                y espacios de participación
                                representan riesgos para
                                el bienestar colectivo.
                            </p>

                        </div>

                    </div>

                </details>

            </div>

            <h3>Relación entre derechos humanos y paz</h3>

            <div class="tabla-comparativa-paz">

                <table>

                    <thead>
                        <tr>
                            <th>Derecho</th>
                            <th>Aporte a la cultura de paz</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Respeto</td>
                            <td>Convivencia y reconocimiento cultural.</td>
                        </tr>

                        <tr>
                            <td>Dignidad</td>
                            <td>Protección y valoración de la vida.</td>
                        </tr>

                        <tr>
                            <td>Igualdad</td>
                            <td>Garantía de derechos sin discriminación.</td>
                        </tr>

                        <tr>
                            <td>Inclusión</td>
                            <td>Participación activa de las comunidades.</td>
                        </tr>

                        <tr>
                            <td>Justicia social</td>
                            <td>Equidad, reparación y oportunidades.</td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <div class="reflexion-territorial">

                <strong>
                    Nuestra responsabilidad como futuros docentes
                </strong>

                <p>
                    Como estudiantes de Licenciatura
                    en Matemáticas, reconocemos que
                    la educación constituye una herramienta
                    fundamental para promover la igualdad,
                    prevenir la discriminación y fortalecer
                    una convivencia basada en el respeto.
                </p>

                <p>
                    Desde las aulas podemos contribuir
                    al reconocimiento de la diversidad
                    cultural, la participación equitativa
                    y la formación de ciudadanos
                    conscientes de sus derechos.
                </p>

            </div>

            <small class="fuente-territorio">

                Fundamentación: Declaración Universal
                de los Derechos Humanos (1948);
                Constitución Política de Colombia (1991);
                Corte Constitucional, Auto 004 de 2009.

            </small>

            <blockquote class="cierre-territorio">

                La paz comienza cuando reconocemos
                que todas las personas tienen derecho
                a vivir con dignidad, conservar su identidad
                y participar en la construcción de su futuro.

            </blockquote>

        </div>

    `
},

    
{
    titulo: "Resolución pacífica de conflictos",

    contenido: `

        <div class="resolucion-conflictos-paz">

            <div class="etiqueta-tematica">
                DIÁLOGO, MEDIACIÓN Y ACUERDOS
            </div>

            <blockquote class="frase-territorial">

                Las diferencias no deben convertirse
                en barreras, sino en oportunidades
                para comprendernos y construir soluciones.

            </blockquote>

            <h3>¿Qué es la resolución pacífica de conflictos?</h3>

            <p>
                Es un proceso mediante el cual las personas
                y las comunidades buscan transformar
                sus desacuerdos utilizando el diálogo,
                el respeto, la cooperación y la construcción
                de soluciones sin recurrir a la violencia.
            </p>

            <p>
                Los conflictos forman parte de las
                relaciones humanas. La manera en
                que se enfrentan puede contribuir
                al fortalecimiento o al debilitamiento
                de la convivencia.
            </p>

            <h3>Principales estrategias</h3>

            <div class="programas-urt-interactivos">

                <details>

                    <summary>💬 Diálogo</summary>

                    <p>
                        Permite expresar ideas,
                        sentimientos y necesidades,
                        escuchar diferentes perspectivas
                        y construir una comprensión mutua
                        de las situaciones.
                    </p>

                </details>

                <details>

                    <summary>👥 Mediación</summary>

                    <p>
                        Consiste en el acompañamiento
                        de una persona o autoridad legítima
                        que facilita la comunicación
                        y ayuda a las partes a buscar
                        soluciones pacíficas.
                    </p>

                </details>

                <details>

                    <summary>🤝 Negociación</summary>

                    <p>
                        Es el proceso mediante el cual
                        las partes buscan alternativas
                        que permitan atender sus intereses
                        y necesidades, procurando
                        beneficios compartidos.
                    </p>

                </details>

                <details>

                    <summary>📋 Construcción de acuerdos</summary>

                    <p>
                        Consiste en establecer compromisos,
                        responsabilidades y mecanismos
                        de seguimiento que favorezcan
                        el cumplimiento de las soluciones
                        acordadas colectivamente.
                    </p>

                </details>

            </div>

            <h3>Espacios comunitarios que favorecen la paz</h3>

            <p>
                En el contexto Kankuamo, los espacios
                de encuentro comunitario, la participación
                colectiva y el reconocimiento de las
                autoridades propias pueden contribuir
                a prevenir y transformar conflictos.
            </p>

            <div class="programas-urt-interactivos">

                <details>

                    <summary>

                        🌿 Diálogo desde la comunidad

                    </summary>

                    <div class="caminos-paz derechos-urt">

                        <div>
                            <span>01</span>
                            Reuniones y asambleas comunitarias.
                        </div>

                        <div>
                            <span>02</span>
                            Escucha y orientación de los mayores.
                        </div>

                        <div>
                            <span>03</span>
                            Participación de las autoridades propias.
                        </div>

                        <div>
                            <span>04</span>
                            Encuentros de intercambio de conocimientos.
                        </div>

                        <div>
                            <span>05</span>
                            Trabajo colectivo y cooperación.
                        </div>

                    </div>

                </details>

            </div>

            <h3>Propuestas para fortalecer la convivencia</h3>

            <p>
                A partir de los conceptos trabajados
                en Cátedra de la Paz, proponemos
                una ruta comunitaria para abordar
                los conflictos de manera pacífica,
                respetando las autoridades propias,
                la autonomía y los derechos humanos.
            </p>

            <div class="programas-urt-interactivos">

                <details>

                    <summary>
                        🕊️ Explorar la ruta de resolución
                        pacífica de conflictos
                    </summary>

                    <div class="ruta-restitucion ruta-completa">

                        <div class="etapa-restitucion">
                            <h4><span>01</span> Identificar el conflicto</h4>

                            <p>
                                Reconocer la situación
                                y las personas involucradas.
                            </p>
                        </div>

                        <div class="flecha-ruta">↓</div>

                        <div class="etapa-restitucion">
                            <h4><span>02</span> Escuchar a las partes</h4>

                            <p>
                                Permitir que cada persona
                                exprese su perspectiva
                                de manera respetuosa.
                            </p>
                        </div>

                        <div class="flecha-ruta">↓</div>

                        <div class="etapa-restitucion">
                            <h4><span>03</span> Reconocer las causas</h4>

                            <p>
                                Analizar las necesidades,
                                intereses y circunstancias
                                que originaron el conflicto.
                            </p>
                        </div>

                        <div class="flecha-ruta">↓</div>

                        <div class="etapa-restitucion">
                            <h4><span>04</span> Facilitar la mediación</h4>

                            <p>
                                Buscar el acompañamiento
                                de una persona o autoridad
                                legítima cuando sea necesario.
                            </p>
                        </div>

                        <div class="flecha-ruta">↓</div>

                        <div class="etapa-restitucion">
                            <h4><span>05</span> Construir acuerdos</h4>

                            <p>
                                Identificar soluciones
                                respetuosas y aceptables
                                para las partes involucradas.
                            </p>
                        </div>

                        <div class="flecha-ruta">↓</div>

                        <div class="etapa-restitucion">
                            <h4><span>06</span> Establecer compromisos</h4>

                            <p>
                                Definir responsabilidades
                                y acciones concretas
                                para cumplir los acuerdos.
                            </p>
                        </div>

                        <div class="flecha-ruta">↓</div>

                        <div class="etapa-restitucion">
                            <h4><span>07</span> Realizar seguimiento</h4>

                            <p>
                                Revisar el cumplimiento
                                de los compromisos
                                y fortalecer la convivencia.
                            </p>
                        </div>

                    </div>

                </details>

            </div>

            <h3>Ejemplos de aplicación</h3>

            <div class="programas-urt-interactivos">

                <details>

                    <summary>
                        📋 Consultar situaciones hipotéticas
                        y alternativas de solución
                    </summary>

                    <div class="tabla-comparativa-paz">

                        <table>

                            <thead>

                                <tr>
                                    <th>Situación</th>
                                    <th>Alternativa propuesta</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr>
                                    <td>Desacuerdos entre vecinos.</td>
                                    <td>Diálogo y mediación comunitaria.</td>
                                </tr>

                                <tr>
                                    <td>Conflictos sobre recursos naturales.</td>
                                    <td>Acuerdos para el cuidado territorial.</td>
                                </tr>

                                <tr>
                                    <td>Dificultades de convivencia escolar.</td>
                                    <td>Escucha activa y acuerdos de convivencia.</td>
                                </tr>

                                <tr>
                                    <td>Discriminación cultural.</td>
                                    <td>Educación intercultural y acciones restaurativas.</td>
                                </tr>

                                <tr>
                                    <td>Desacuerdos en actividades colectivas.</td>
                                    <td>Participación y construcción de compromisos.</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </details>

            </div>

            <div class="reflexion-territorial">

                <strong>
                    Resolver conflictos desde la educación
                </strong>

                <p>
                    Como futuros docentes, podemos
                    contribuir a la resolución pacífica
                    de conflictos mediante actividades
                    colaborativas, la escucha activa,
                    el respeto por las diferencias
                    y la construcción de acuerdos
                    dentro y fuera del aula.
                </p>

                <p>
                    Estas estrategias deben desarrollarse
                    respetando los derechos humanos.
                    Las situaciones de violencia grave
                    requieren protección y atención
                    de las autoridades competentes,
                    y no deben reducirse a una negociación.
                </p>

            </div>

            <blockquote class="cierre-territorio">

                El conflicto no tiene que dividirnos;
                puede enseñarnos a escucharnos,
                comprendernos y caminar juntos.

            </blockquote>

        </div>

    `
},

    
{
    titulo: "Voces del territorio",

    contenido: `

        <div class="voces-territorio">

            <div class="etiqueta-tematica">
                MEMORIA, IDENTIDAD Y EXPRESIONES CULTURALES
            </div>

            <blockquote class="frase-territorial">

                Cada voz, cada paisaje y cada tradición
                guardan una parte de la historia
                que nos invita a construir paz.

            </blockquote>

            <h3>El territorio también tiene voz</h3>

            <p>
                Conocer un territorio implica escuchar
                a las personas que lo habitan,
                reconocer sus experiencias y valorar
                las expresiones culturales que
                forman parte de su identidad.
            </p>

            <p>
                Los paisajes, las tradiciones,
                los encuentros comunitarios
                y las manifestaciones artísticas
                permiten acercarnos a diferentes
                dimensiones de la vida territorial.
            </p>

            <h3>Un territorio que cuenta su historia</h3>

            <p>
                Explora nuestra galería audiovisual.
                Selecciona cada título para observar
                los registros del territorio.
            </p>

            <div class="programas-urt-interactivos">

                <!-- VIDEO 1 -->

                <details>

                    <summary>
                        <span class="numero-programa">01</span>
                        Paisajes y espacios comunitarios
                    </summary>

                    <div class="video-voz-territorio">

                        <video controls
                               playsinline
                               preload="none">

                            <source src="voces-01.mp4"
                                    type="video/mp4">

                        </video>

                        <p>
                            Una mirada a los espacios
                            públicos y al paisaje urbano.
                        </p>

                        <small>Duración: 24 segundos.</small>

                    </div>

                </details>

                <!-- VIDEO 2 -->

                <details>

                    <summary>
                        <span class="numero-programa">02</span>
                        Nuestro territorio desde las alturas
                    </summary>

                    <div class="video-voz-territorio">

                        <video controls
                               playsinline
                               preload="none">

                            <source src="voces-02.mp4"
                                    type="video/mp4">

                        </video>

                        <p>
                            Una perspectiva aérea
                            del paisaje y los espacios
                            habitados por la comunidad.
                        </p>

                        <small>Duración: 18 segundos.</small>

                    </div>

                </details>

                <!-- VIDEO 3 -->

                <details>

                    <summary>
                        <span class="numero-programa">03</span>
                        Caminos y vida cotidiana
                    </summary>

                    <div class="video-voz-territorio">

                        <video controls
                               playsinline
                               preload="none">

                            <source src="voces-03.mp4"
                                    type="video/mp4">

                        </video>

                        <p>
                            Los caminos rurales y
                            las actividades cotidianas
                            forman parte de las relaciones
                            entre las personas y el territorio.
                        </p>

                        <small>Duración: 39 segundos.</small>

                    </div>

                </details>

                <!-- VIDEO 4 -->

                <details>

                    <summary>
                        <span class="numero-programa">04</span>
                        Naturaleza y territorio
                    </summary>

                    <div class="video-voz-territorio">

                        <video controls
                               playsinline
                               preload="none">

                            <source src="voces-04.mp4"
                                    type="video/mp4">

                        </video>

                        <p>
                            Las montañas y los paisajes
                            naturales nos invitan
                            a reflexionar sobre el valor
                            de proteger los espacios de vida.
                        </p>

                        <small>Duración: 25 segundos.</small>

                    </div>

                </details>

                <!-- VIDEO 5 -->

                <details>

                    <summary>
                        <span class="numero-programa">05</span>
                        Encuentros y expresiones culturales
                    </summary>

                    <div class="video-voz-territorio">

                        <video controls
                               playsinline
                               preload="none">

                            <source src="voces-05.mp4"
                                    type="video/mp4">

                        </video>

                        <p>
                            Las presentaciones artísticas
                            y los festivales culturales
                            constituyen espacios para
                            compartir expresiones
                            de identidad y creatividad.
                        </p>

                        <small>Duración: 36 segundos.</small>

                    </div>

                </details>

                <!-- VIDEO 6 -->

                <details>

                    <summary>
                        <span class="numero-programa">06</span>
                        Tradiciones que permanecen vivas
                    </summary>

                    <div class="video-voz-territorio">

                        <video controls
                               playsinline
                               preload="none">

                            <source src="voces-06.mp4"
                                    type="video/mp4">

                        </video>

                        <p>
                            Las danzas y manifestaciones
                            culturales colectivas
                            representan oportunidades
                            para compartir conocimientos,
                            fortalecer la identidad
                            y valorar las tradiciones.
                        </p>

                        <small>
                            Duración: 4 minutos y 26 segundos.
                        </small>

                    </div>

                </details>

            </div>

            <h3>Escuchando las voces de la comunidad</h3>

            <p>
                Los testimonios comunitarios constituyen
                una oportunidad para conocer directamente
                las perspectivas de las personas
                sobre la convivencia, los conflictos
                y la construcción de paz.
            </p>

            <div class="programas-urt-interactivos">

                <details>

                    <summary>
                        🎙️ Primer testimonio comunitario
                    </summary>

                    <div class="video-entrevista">

                        <iframe
                            src="https://www.youtube-nocookie.com/embed/W8-KaDt0CCA"
                            title="Primer testimonio comunitario"
                            allow="accelerometer; autoplay;
                            clipboard-write; encrypted-media;
                            gyroscope; picture-in-picture;
                            web-share"
                            allowfullscreen
                            loading="lazy">
                        </iframe>

                        <div class="informacion-video">

                            <strong>
                                Primer testimonio comunitario
                            </strong>

                            <a class="boton-youtube"
                               href="https://youtu.be/W8-KaDt0CCA"
                               target="_blank"
                               rel="noopener noreferrer">

                                ▶ Ver video en YouTube

                            </a>

                            <div class="enlace-video">

                                <a href="https://youtu.be/W8-KaDt0CCA"
                                   target="_blank"
                                   rel="noopener noreferrer">

                                    https://youtu.be/W8-KaDt0CCA

                                </a>

                            </div>

                        </div>

                    </div>

                </details>

                <details>

                    <summary>
                        🎙️ Segundo testimonio comunitario
                    </summary>

                    <div class="video-entrevista">

                        <iframe
                            src="https://www.youtube-nocookie.com/embed/DogqIDU7XYU"
                            title="Segundo testimonio comunitario"
                            allow="accelerometer; autoplay;
                            clipboard-write; encrypted-media;
                            gyroscope; picture-in-picture;
                            web-share"
                            allowfullscreen
                            loading="lazy">
                        </iframe>

                        <div class="informacion-video">

                            <strong>
                                Segundo testimonio comunitario
                            </strong>

                            <a class="boton-youtube"
                               href="https://youtu.be/DogqIDU7XYU"
                               target="_blank"
                               rel="noopener noreferrer">

                                ▶ Ver video en YouTube

                            </a>

                            <div class="enlace-video">

                                <a href="https://youtu.be/DogqIDU7XYU"
                                   target="_blank"
                                   rel="noopener noreferrer">

                                    https://youtu.be/DogqIDU7XYU

                                </a>

                            </div>

                        </div>

                    </div>

                </details>

                <details>

                    <summary>
                        🏛️ Voz institucional de la URT
                    </summary>

                    <div class="video-entrevista">

                        <iframe
                            src="https://www.youtube-nocookie.com/embed/TeX0XX9kQkw"
                            title="Entrevista institucional URT"
                            allow="accelerometer; autoplay;
                            clipboard-write; encrypted-media;
                            gyroscope; picture-in-picture;
                            web-share"
                            allowfullscreen
                            loading="lazy">
                        </iframe>

                        <div class="informacion-video">

                            <strong>
                                Unidad de Restitución de Tierras
                            </strong>

                            <a class="boton-youtube"
                               href="https://youtu.be/TeX0XX9kQkw"
                               target="_blank"
                               rel="noopener noreferrer">

                                ▶ Ver video en YouTube

                            </a>

                            <div class="enlace-video">

                                <a href="https://youtu.be/TeX0XX9kQkw"
                                   target="_blank"
                                   rel="noopener noreferrer">

                                    https://youtu.be/TeX0XX9kQkw

                                </a>

                            </div>

                        </div>

                    </div>

                </details>

            </div>

            <div class="programas-urt-interactivos">

                <details>

                    <summary>

                        📖 Nuestros aprendizajes
                        y reflexiones como estudiantes

                    </summary>

                    <div class="aprendizajes-urt">

                        <div class="aprendizaje-urt">

                            <h4>Identidad y cultura</h4>

                            <p>
                                Reconocemos la importancia
                                de valorar las expresiones
                                culturales y los conocimientos
                                transmitidos entre generaciones.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Territorio y naturaleza</h4>

                            <p>
                                Comprendemos que la protección
                                del territorio puede contribuir
                                a la conservación de la vida,
                                la identidad y el bienestar colectivo.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Participación y escucha</h4>

                            <p>
                                Consideramos que escuchar
                                las experiencias de las comunidades
                                es fundamental para comprender
                                sus necesidades y reconocer
                                la diversidad de perspectivas.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Instituciones y reparación</h4>

                            <p>
                                El conocimiento de las funciones
                                de la URT nos permite reflexionar
                                sobre la importancia de la justicia,
                                la reparación y el reconocimiento
                                de los derechos territoriales.
                            </p>

                        </div>

                        <div class="aprendizaje-urt">

                            <h4>Educación y cultura de paz</h4>

                            <p>
                                Como futuros docentes,
                                debemos promover el respeto,
                                la inclusión, el diálogo
                                intercultural y la valoración
                                de las experiencias comunitarias.
                            </p>

                        </div>

                    </div>

                </details>

            </div>

            <blockquote class="cierre-territorio">

                Cuando escuchamos las voces del territorio,
                comprendemos que la paz también
                se construye desde la memoria,
                la cultura y la esperanza colectiva.

            </blockquote>

        </div>

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
    ${indice === 4 ? 'pagina-paz-comunitaria' : ''}
    ${indice === 5 ? 'pagina-conociendo-territorio' : ''}
    ${indice === 6 ? 'pagina-identidad-territorio' : ''}
    ${indice === 7 ? 'pagina-conflictos-territorio' : ''}
    ${indice === 8 ? 'pagina-testimonios-territorio' : ''}
    ${indice === 9 ? 'pagina-analisis-conflictos' : ''}
    ${indice === 10 ? 'pagina-institucion-paz' : ''}
    ${indice === 11 ? 'pagina-experiencia-institucional' : ''}
    ${indice === 12 ? 'pagina-derechos-humanos' : ''}
    ${indice === 13 ? 'pagina-resolucion-conflictos' : ''}
    ${indice === 14 ? 'pagina-voces-territorio' : ''}">
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

/* ==========================================
   GALERÍA INTERACTIVA DE LAS PÁGINAS 6 Y 7
========================================== */

function ampliarFotoTerritorio(boton) {

    const imagen = boton.querySelector("img");

    if (!imagen) return;

    const figura = boton.closest("figure");

    const descripcion = figura
        ?.querySelector("figcaption")
        ?.textContent.trim() || imagen.alt;

    const ventana = document.createElement("dialog");

    ventana.className = "visor-foto-territorio";

    ventana.setAttribute(
        "aria-label",
        "Visor de fotografía"
    );

    const cerrar = document.createElement("button");

    cerrar.className = "cerrar-foto-territorio";

    cerrar.textContent = "✕ Cerrar";

    const fotografia = document.createElement("img");

    fotografia.src = imagen.src;

    fotografia.alt = imagen.alt;

    const texto = document.createElement("p");

    texto.textContent = descripcion;

    ventana.append(cerrar, fotografia, texto);

    document.body.appendChild(ventana);

    cerrar.addEventListener("click", function() {

        ventana.close();

    });

    ventana.addEventListener("click", function(evento) {

        if (evento.target === ventana) {

            ventana.close();

        }

    });

    ventana.addEventListener("keydown", function(evento) {

        evento.stopPropagation();

    });

    ventana.addEventListener("close", function() {

        ventana.remove();

        boton.focus();

    });

    ventana.showModal();

}

