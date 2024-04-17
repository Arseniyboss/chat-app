import { NextRequest } from 'next/server'
import { AccessToken } from 'livekit-server-sdk'

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl

  const username = searchParams.get('username')!

  const apiKey = process.env.LIVEKIT_API_KEY
  const apiSecret = process.env.LIVEKIT_API_SECRET

  const accessToken = new AccessToken(apiKey, apiSecret, { identity: username })
  accessToken.addGrant({ room: 'general-room', roomJoin: true })

  const token = await accessToken.toJwt()

  return Response.json(token)
}
