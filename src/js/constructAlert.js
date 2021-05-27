export const constructAlert = (error) => {
  const errorDiv = document.createElement('div')

  errorDiv.className = 'error'
  errorDiv.append(error.message)

  return errorDiv
}
