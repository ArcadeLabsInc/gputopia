import { NextRequest, NextResponse } from "next/server"
import { pusher } from "@/lib/pusher"

export async function GET(request: NextRequest) {

  // Ensure that the request is coming from the cron server
  const { searchParams } = new URL(request.url);
  const sharedKey = searchParams.get('sharedKey');
  if (!sharedKey || sharedKey !== process.env.CRON_KEY) {
    return NextResponse.json({ ok: false });
  }

  // Get list of everyone online in the Pusher channel
  const presence: any = await pusher.get({ path: '/channels/presence-common_room/users' })
  const json = await presence.json()
  const users = json.users // [ { id: '1' } ]

  // Loop through each user and send a message
  for (const user of users) {
    const { id } = user;
    const response = await fetch("https://ai-spider-production.up.railway.app/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer f95038c5331fd48b380c6476469f1959",
      },
      body: JSON.stringify(
        {
        model: "vicuna-v1-7b-q4f32_0",
        messages: [
          {
            "role": "system",
            "content": "you are a terse brusque assistant"
          },
          {
            "role": "user",
            "content": `write one sentence about the number ${id}`
          }
        ],
        max_tokens: 200
      }
    )});
  }

  return NextResponse.json({ ok: true, users: users.length });
}
