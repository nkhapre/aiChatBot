import { NextResponse } from "next/server";

export async function POST(req) {
   const { message } = await req.json()
   try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${'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'}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "meta-llama/llama-3.1-8b-instruct:free",
          // "stream": true,
          "messages": [
            {"role": "aggresive criminal", "content": message},
          ],
        })
      });
      const data = await res.json();
        return NextResponse.json({ response: data.choices[0].message.content });
   } catch (err) {
        console.error(err)
        return { error: 'no response from chatbot'}
   }
}