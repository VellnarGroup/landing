import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed'
    })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({
      message: 'Email è richiesta'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Email non valida'
    })
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Benvenuto nella newsletter di Vellnar!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1f2937;">Benvenuto in Vellnar!</h1>
          <p>Grazie per esserti iscritto alla nostra newsletter.</p>
          <p>Ti terremo aggiornato sulle nostre ultime innovazioni e sviluppi.</p>
          <p>Il futuro di Vellnar è appena iniziato!</p>
          <hr style="margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            Se non hai richiesto questa iscrizione, puoi ignorare questa email.
          </p>
        </div>
      `
    })

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['admin@vellnar.com'],
      subject: 'Nuova iscrizione newsletter',
      html: `
        <p>Nuova iscrizione alla newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString('it-IT')}</p>
      `
    })

    return res.status(200).json({
      message: 'Iscrizione completata con successo!'
    })
  } catch (error) {
    console.error('Errore invio email:', error)

    return res.status(500).json({
      message: "Errore durante l'iscrizione"
    })
  }
}
