export const getCurrentDate = () => {
  return new Date().toLocaleDateString('ru-RU', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })
}
