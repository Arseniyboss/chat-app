export const getRoomId = () => {
  const sharedRoomId = window.location.pathname.split('/')[1]
  if (sharedRoomId) return sharedRoomId
  const isPrivateRoom = window.confirm('Start a private chat with a shareable link?')
  if (isPrivateRoom) {
    const privateRoomId = crypto.randomUUID()
    window.history.pushState(null, '', `/${privateRoomId}`)
    return privateRoomId
  }
  return 'general-room'
}
