// app/api/send-email/route.js

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { to, subject, message } = await req.json();

  try {
    const response = await resend.emails.send({
      from: "website@callqwik.ai",
      to,
      subject,
      html: message,
    });

    console.log(response);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
