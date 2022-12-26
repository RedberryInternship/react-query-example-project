import { useField } from 'formik'

export const useTitleInput = (data) => {
  const [field, meta] = useField(data)

  const isValid = meta.touched && !meta.error
  const isError = meta.error && meta.touched

  return {
    isError,
    isValid,
    field,
  }
}
