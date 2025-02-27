"use client";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { DefaultLayout } from "./defaultLayout";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunt, setAsunt] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <DefaultLayout>
      <div className="container-card">
        <div className="contact-card">
          <div>
            <h2>Contáctame</h2>
            <span>
              Completa el formulario para enviarme un mensaje. Te responderé lo
              antes posible.
            </span>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              {/* Nombre */}
              <div className="input-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Correo electronico */}
              <div className="input-group">
                <label htmlFor="email">Correo electronico</label>
                <input
                  type="text"
                  name="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Asunto */}
              <div className="input-group">
                <label htmlFor="asunt">Asunto</label>
                <input
                  type="text"
                  name="asunt"
                  placeholder="Asunto de su mensaje"
                  value={asunt}
                  onChange={(e) => setAsunt(e.target.value)}
                  required
                />
              </div>

              {/* Mensaje */}
              <div className="input-group">
                <label htmlFor="message"></label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Escribe tu mensaje aqui"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="button-submit"
                // disabled={isSubmitting}
              >
                {/* {isSubmitting ? ( */}
                {/*   "Enviando..." */}
                {/* ) : ( */}
                {/*   <> */}
                Enviar mensaje <Send className="ml-2 h-4 w-4" />
                {/*   </> */}
                {/* )} */}
              </button>
            </form>
          </div>
          {/* {isSubmitted && ( */}
          {/*   <div className="bg-green-50 text-green-700 rounded-b-lg"> */}
          {/*     <p className="text-center w-full"> */}
          {/*       ¡Gracias por tu mensaje! Te responderé pronto. */}
          {/*     </p> */}
          {/*   </div> */}
          {/* )} */}
        </div>
      </div>
    </DefaultLayout>
  );
}
