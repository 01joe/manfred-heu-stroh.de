import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your email service here
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      name,
      company,
      phone,
      whatsapp,
      email,
      street,
      city,
      zip,
      interest,
      personalMessage,
    } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
      <h2>Nouvelle demande de contact</h2>
      <p><strong>Nom:</strong> ${name}</p>
      ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
      <p><strong>Téléphone:</strong> ${phone}</p>
      ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
      <p><strong>Email:</strong> ${email}</p>
      ${street ? `<p><strong>Pays:</strong> ${street}</p>` : ''}
      ${city ? `<p><strong>Ville:</strong> ${city}</p>` : ''}
      ${zip ? `<p><strong>Code postal:</strong> ${zip}</p>` : ''}
      ${interest ? `<p><strong>Intérêt:</strong> ${interest}</p>` : ''}
      ${personalMessage ? `<p><strong>Message personnel:</strong></p><p>${personalMessage.replace(/\n/g, '<br>')}</p>` : ''}
    `

    // Send email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@manfred-heu-stroh.de',
      subject: `Nouvelle demande de contact de ${name}`,
      html: emailContent,
      replyTo: email,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
