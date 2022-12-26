const Button = ({ clickHandler, title, type, classNames }) => {
  return (
    <button
      className={`inline-flex w-full justify-center items-center rounded-md border border-transparent bg-indigo-600 px-3 py-5 text-xl lg:text-2xl font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${classNames}`}
      onClick={clickHandler}
      type={type}
    >
      {title}
    </button>
  )
}

export default Button
