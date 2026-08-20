import emailjs from '@emailjs/browser'

// Renseignez ces 3 identifiants dans votre fichier .env (voir .env.example).
// Ils sont fournis par votre compte EmailJS (https://dashboard.emailjs.com/).
//
// Préfixés "COMMERCIAL" pour ne pas entrer en conflit avec un éventuel
// service/template EmailJS déjà utilisé ailleurs dans le projet (ex. SAV).
// Renommez librement si votre convention de nommage est différente.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_COMMERCIAL_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_COMMERCIAL_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_COMMERCIAL_PUBLIC_KEY

// Envoie l'email de notification pour une demande de contact commercial.
// templateParams doit correspondre aux variables {{...}} de votre template EmailJS.
export async function sendCommercialContactEmail(templateParams) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn(
      "EmailJS n'est pas configuré (variables VITE_EMAILJS_COMMERCIAL_* manquantes). L'email n'a pas été envoyé, mais la demande a bien été enregistrée."
    )
    return { skipped: true }
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
}