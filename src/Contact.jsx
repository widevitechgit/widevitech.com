import { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * EmailJS configuration
 * ----------------------
 * 1. Create a free account on https://www.emailjs.com
 * 2. Add an Email Service (Gmail, Outlook, SMTP...) -> copy its Service ID
 * 3. Create an Email Template with the variables used below
 *    (from_name, from_email, phone, subject, message) -> copy its Template ID
 * 4. Copy your Public Key from Account > General
 * 5. Put the 3 values in a .env file at the root of your project (Vite):
 *
 *    VITE_EMAILJS_SERVICE_ID=your_service_id
 *    VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * 6. Install the package: npm install @emailjs/browser
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = {
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
            .then(() => {
                setStatus("success");
                setForm(initialForm);
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                setStatus("error");
            });
    };

    return (
        <section className="min-h-screen bg-black text-white pt-30 md:pt-50 pb-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                <div className="text-center flex flex-col gap-3">
                    <h1 className="md:text-4xl text-3xl font-bold uppercase">
                        Contactez-nous
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Une question sur nos produits, un projet à discuter ou une demande
                        de devis ? Notre équipe vous répond rapidement.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-10">
                    {/* Infos de contact */}
                    <div className="md:col-span-2 flex flex-col gap-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Adresse</h2>
                            <p className="text-gray-200">
                                33 Boulevard de Marseille, Abidjan
                                <br />
                                Abidjan, Côte d'Ivoire
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Téléphone</h2>
                            <p className="text-gray-200">+225 07 07 90 29 30</p>
                            <p className="text-gray-200">+225 07 87 80 95 78</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Email</h2>
                            <p className="text-gray-200">commercial@widevitech.com</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Horaires</h2>
                            <p className="text-gray-200">
                                Lundi - Vendredi : 8h00 - 18h00
                            </p>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:col-span-3 bg-white text-black rounded-2xl p-8 flex flex-col gap-5"
                    >
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="from_name" className="text-sm font-medium">
                                    Nom complet
                                </label>
                                <input
                                    id="from_name"
                                    name="from_name"
                                    type="text"
                                    required
                                    value={form.from_name}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="from_email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="from_email"
                                    name="from_email"
                                    type="email"
                                    required
                                    value={form.from_email}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="vous@exemple.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Téléphone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="+225 ..."
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Sujet
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={form.subject}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Objet de votre message"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                                placeholder="Votre message..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg px-6 py-3 transition-colors"
                        >
                            {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                        </button>

                        {status === "success" && (
                            <p className="text-green-600 font-medium">
                                Votre message a bien été envoyé. Nous vous répondrons rapidement.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 font-medium">
                                Une erreur est survenue lors de l'envoi. Merci de réessayer ou
                                de nous contacter directement par téléphone.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
