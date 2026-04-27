import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "CEA United <onboarding@resend.dev>",
      to: ["oyun_erdene@ceaunited.com"],
      subject: `New contact message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Service: ${service || "Not selected"}

Message:
${message}
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}