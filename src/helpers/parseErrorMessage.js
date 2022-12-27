export const parseErrorMessage = (error) => {
  const errResponse = error?.response?.data

  if (errResponse?.errors) {
    return errResponse?.errors?.[0]?.msg
  }

  return errResponse?.message
}
