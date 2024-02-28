export function copyToClipboard (text: string): void {
  const tempElement = document.createElement('textarea')
  document.body.appendChild(tempElement)
  tempElement.value = text
  tempElement.select()
  document.execCommand('copy')
  document.body.removeChild(tempElement)
}
