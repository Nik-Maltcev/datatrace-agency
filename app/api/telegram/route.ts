import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, links } = await request.json()

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('Missing Telegram credentials')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const message = `📩 *Заявка с DataTrace Agency*

👤 *ФИО:* ${name}
📱 *Телефон:* ${phone}
🔗 *Ссылки на удаление:*
${links || 'Не указаны'}`

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    )

    const data = await response.json()

    if (!data.ok) {
      console.error('Telegram API error:', data)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
