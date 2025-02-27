"use client";
import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast";

// const formSchema = z.object({
//   name: z
//     .string()
//     .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
//   email: z.string().email({ message: "Correo electrónico inválido" }),
//   subject: z
//     .string()
//     .min(5, { message: "El asunto debe tener al menos 5 caracteres" }),
//   message: z
//     .string()
//     .min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
// });

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   },
  // });
  //
  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   setIsSubmitting(true);
  //
  //   try {
  //     // Aquí puedes integrar con un servicio como Formspree
  //     // Ejemplo: https://formspree.io/
  //     const response = await fetch(
  //       "https://formspree.io/f/tu-id-de-formspree",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(values),
  //       },
  //     );
  //
  //     if (response.ok) {
  //       setIsSubmitted(true);
  //       form.reset();
  //       toast({
  //         title: "Mensaje enviado",
  //         description: "Gracias por contactarme. Te responderé pronto.",
  //       });
  //     } else {
  //       throw new Error("Error al enviar el formulario");
  //     }
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description:
  //         "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // }

  return (
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
          <form>
            <form>
              {/* Nombre */}
              <div className="input-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" placeholder="Tu nombre" />
              </div>

              {/* Correo electronico */}
              <div className="input-group">
                <label htmlFor="email">Correo electronico</label>
                <input type="text" name="email" placeholder="tu@email.com" />
              </div>

              {/* Asunto */}
              <div className="input-group">
                <label htmlFor="asunt">Asunto</label>
                <input
                  type="text"
                  name="asunt"
                  placeholder="Asunto de su mensaje"
                />
              </div>

              {/* Mensaje */}
              <div className="input-group">
                <label htmlFor="message"></label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Escribe tu mensaje aqui"
                />
              </div>
              <button
                type="submit"
                className="button-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensaje <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </form>
        </div>
        {isSubmitted && (
          <div className="bg-green-50 text-green-700 rounded-b-lg">
            <p className="text-center w-full">
              ¡Gracias por tu mensaje! Te responderé pronto.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
