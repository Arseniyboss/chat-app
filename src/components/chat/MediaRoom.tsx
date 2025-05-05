'use client'

import '@livekit/components-styles'
import { LiveKitRoom, VideoConference } from '@livekit/components-react'
import { useState, useEffect } from 'react'
import { useChatContext } from '@/contexts/ChatContext'

type Props = {
  audio: boolean
  video: boolean
}

const MediaRoom = ({ video, audio }: Props) => {
  const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL

  const [token, setToken] = useState('')

  const { username, roomId, setActiveChat } = useChatContext()

  const getLiveKitToken = async () => {
    try {
      const response = await fetch(`/api/livekit?username=${username}&roomId=${roomId}`)
      const token = await response.json()
      setToken(token)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getLiveKitToken()
  }, [])

  return (
    <LiveKitRoom
      data-lk-theme="default"
      token={token}
      serverUrl={serverUrl}
      connect={true}
      video={video}
      audio={audio}
      onDisconnected={() => setActiveChat('text')}
    >
      <VideoConference />
    </LiveKitRoom>
  )
}

export default MediaRoom
