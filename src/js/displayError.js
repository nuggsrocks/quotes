export const displayError = (error) => {
  const errorDiv = document.createElement('div')

  errorDiv.className = 'error'
  errorDiv.append(error.message)

  document.body.append(errorDiv)
}
