const Button = ({
  disabled = false,
  clickHandler,
  classNames,
  title,
  type,
}) => {
  return (
    <button
      className={`inline-flex w-full justify-center items-center rounded-md border border-transparent bg-indigo-600 px-3 py-5 text-xl lg:text-2xl font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none ${classNames} ${
        disabled && '!bg-gray-600'
      }`}
      onClick={clickHandler}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  )
}

export default Button
