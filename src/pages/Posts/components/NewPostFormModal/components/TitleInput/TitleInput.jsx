import { useTitleInput } from './useTitleInput'
import { ErrorMessage } from 'formik'

const TitleInput = (props) => {
  const { field, isError, isValid } = useTitleInput(props)

  return (
    <div className='h-28'>
      <label
        className={`block text-base select-none mb-2 font-medium text-gray-700 ${
          isError && '!text-red-900'
        }`}
      >
        Post Title
      </label>

      <input
        {...field}
        {...props}
        className={`block w-full pr-8 appearance-none rounded-md border border-gray-300 p-3 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm ${
          isError &&
          'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
        } ${isValid && '!border-green-500'} lg:text-base`}
        placeholder='Enter post title...'
        type='text'
      />

      <ErrorMessage name={field.name}>
        {(errorMessage) => {
          return <p className='lg:mt-1 text-sm text-red-600'>{errorMessage}</p>
        }}
      </ErrorMessage>
    </div>
  )
}

export default TitleInput
