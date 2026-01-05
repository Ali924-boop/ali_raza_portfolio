import { NextResponse } from "next/server";

type ChatRequest = { message: string };

export async function GET() {
  return NextResponse.json({
    status: "OK",
    message: "Botpress API is running. Use POST to chat.",
  });
}

export async function POST(req: Request) {
  try {
    const { message } = (await req.json()) as ChatRequest;

    if (!message) {
      return NextResponse.json(
        { reply: "Please type a message." },
        { status: 400 }
      );
    }

    const res = await fetch(
      `${process.env.BOTPRESS_API_URL}/mod/channel-web/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BOTPRESS_API_KEY}`,
        },
        body: JSON.stringify({ type: "text", text: message }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Botpress Error:", err);
      throw new Error("Botpress API failed");
    }

    const data = await res.json();
    const reply =
      data?.messages?.[0]?.text || "Sorry, I didn't understand that.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { reply: "Oops! Something went wrong." },
      { status: 500 }
    );
  }
}
