import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend( process.env.re_QVwTnEcN_7KbStMib4oXKq9sEHehr76nD);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['Edwin.leonardo2121@outlook.com'],
      subject: 'Hello Word',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
