import { DefaultLayout } from "../../shared/components/defaultLayout.tsx";

const ViewHome = () => {
  return (
    <DefaultLayout>
      {/* Quien Soy? */}
      <section id="aboutMe">
        <div className="blog-container">
          <div className="blog-header">
            <div className="blog-cover">
              <div className="blog-author">
                <h3>Luis Acuña</h3>
              </div>
            </div>
          </div>

          <div className="blog-body">
            <div className="blog-title">
              <h1>
                <a href="#">Quien Soy?</a>
              </h1>
            </div>
            <div className="blog-summary">
              <p>
                ¡Hola a todos! Soy Luis Fernando Acuña Acosta, un apasionado de
                la tecnología y la conectividad. Mi enfoque principal es la
                configuración de sistemas de red, un campo donde la precisión y
                la eficiencia son claves. Mi pasión: Conectar el mundo digital
                Desde que me adentré en el mundo de la informática, me fascinó
                la forma en que las redes conectan dispositivos y personas. Me
                especializo en diseñar, implementar y mantener infraestructuras
                de red robustas y seguras. ¿Qué hago? Configuración de equipos
                de red: routers, switches, firewalls y otros dispositivos.
                Diseño e implementación de redes: desde pequeñas LANs hasta
                complejas WANs. Optimización de rendimiento: asegurando que las
                redes funcionen de manera eficiente y sin interrupciones.
                Seguridad de redes: protegiendo los datos y sistemas contra
                amenazas externas. Solución de problemas: diagnosticando y
                resolviendo incidencias de red de forma rápida y eficaz.
              </p>
            </div>

            <div className="divider"></div>

            <div className="blog-tags">
              <ul></ul>
            </div>

            <div className="blog-footer">
              <ul></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mis Servicios */}
      <section id="myService">
        <div className="blog-container">
          <br />
          <div className="blog-body">
            <div className="blog-title">
              <h1>
                <a href="#">¿Problemas con tu red?</a>
              </h1>
            </div>
            <div className="blog-summary">
              <p>
                ¡Yo te ayudo! En mi blog, quiero que conozcas todos los
                servicios que ofrezco para que tu conexión a internet sea
                rápida, segura y confiable. ¡Dile adiós a los problemas de red!
                Mis servicios estrella: Diseño e instalación de redes a medida:
                ¿Necesitas una red desde cero? Diseño la mejor solución para tu
                hogar o empresa, desde el cableado hasta la configuración de los
                equipos. Instalación profesional de routers, switches y puntos
                de acceso Wi-Fi, ¡para que no te falte señal en ningún rincón!
                Optimización y mantenimiento de redes: ¿Tu internet va lento?
                Optimizo tu red para que funcione al máximo rendimiento.
                Mantenimiento preventivo y correctivo para evitar caídas y
                problemas inesperados. ¡Monitoreo constante para que tu red esté
                siempre en las mejores condiciones! Seguridad de redes: Protejo
                tu red de amenazas externas con firewalls y sistemas de
                seguridad avanzados. Configuración de redes VPN para que
                navegues de forma segura y privada. Análisis de vulnerabilidades
                para detectar y solucionar posibles riesgos. Configuración de
                servidores: Configuración de servidores de archivos, web y
                correo electrónico. Virtualización de servidores para optimizar
                recursos. Soluciones para hogares y empresas: Configuración de
                redes Wi-Fi para hogares conectados. Soluciones de red completas
                para pequeñas y medianas empresas. Soluciones en la nube. ¿Por
                qué elegir mis servicios? Experiencia y profesionalismo en
                configuración de redes. Soluciones personalizadas para cada
                necesidad. Soporte técnico rápido y eficiente. ¡Tranquilidad y
                confianza en tu conexión a internet! ¡Contáctame! Si tienes
                alguna pregunta o necesitas un presupuesto, no dudes en ponerte
                en contacto conmigo. ¡Estoy aquí para ayudarte!
              </p>
            </div>

            <div className="divider"></div>

            <div className="blog-tags">
              <ul></ul>
            </div>

            <div className="blog-footer"></div>
          </div>
        </div>
      </section>

      {/* Mis Estudios */}
      <div className="blog-container">
        <br />
        <div className="blog-body">
          <div className="blog-title">
            <h1>
              <a href="#">Mis estudios</a>
            </h1>
          </div>
          <div className="blog-summary">
            <p>
              Mis estudios se centran en el campo de las Tecnologías de la
              Información, con especialización en el área de desarrollo de
              software.
            </p>
          </div>

          <div className="divider"></div>

          <div className="blog-tags">
            <ul></ul>
          </div>

          {/* footer */}
          <div className="blog-footer"></div>
        </div>
      </div>

      {/* Proyectos */}
      <section id="project">
        <div className="blog-container">
          <br />
          <div className="blog-body">
            <div className="blog-title">
              <h1>
                <a href="#">Proyectos</a>
              </h1>
            </div>
            <div className="blog-summary">
              <div className="group-card">
                <div className="card">
                  <h2>Proyectos 1</h2>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type
                  </p>
                </div>

                <div className="card">
                  <h2>Proyectos 2</h2>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg" />

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type
                  </p>
                </div>

                <div className="card">
                  <h2>Proyectos 3</h2>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg" />

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type
                  </p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="blog-tags">
              <ul></ul>
            </div>

            <div className="blog-footer"></div>
          </div>
        </div>
      </section>

      {/* Empresa en la que trabaje */}
      <div className="blog-container">
        <br />
        <div className="blog-body">
          <div className="blog-title">
            <h1>
              <a href="#">Empresa donde trabaje</a>
            </h1>
          </div>
          <div className="blog-summary">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>

          <div className="divider"></div>

          <div className="blog-tags">
            <ul></ul>
          </div>

          {/* footer */}
          <div className="blog-footer"></div>
        </div>
      </div>

      {/* Opiniones del cliente */}
      <section id="customerReviews">
        <div className="blog-container">
          <br />
          <div className="blog-body">
            <div className="blog-title">
              <h1>
                <a href="#">Opiniones del cliente</a>
              </h1>
            </div>
            <div className="blog-summary">
              <div className="group-card">
                <div className="card">
                  {/* Nombre del cliente */}
                  <h2>Cliente 1</h2>
                  {/* Comentario */}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type
                  </p>
                </div>

                <div className="card">
                  {/* Nombre del cliente */}
                  <h2>Cliente 2</h2>
                  {/* Comentario */}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type
                  </p>
                </div>

                <div className="card">
                  {/* Nombre del cliente */}
                  <h2>Cliente 3</h2>
                  {/* Comentario */}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type
                  </p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="blog-tags">
              <ul></ul>
            </div>
            <div className="blog-footer"></div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ViewHome;
