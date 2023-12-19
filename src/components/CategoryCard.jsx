export default function CategoryCard(props) {
  return (
    <article className="hover:bg-[#CA85FF] hover:cursor-pointer">
      <img
        src={props.img}
        alt=""
        className="w-full max-w-[195px] h-full max-h-[260px] object-cover bg-center"
      />
      <p className="font-bold">{props.name}</p>
      <p className="text-sm text-[#AEACB9] ">{props.viewers}</p>
      <p>{props.category}</p>
      <div className="bg-indigo-900 text-center py-4 lg:px-4">
        <div
          className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            Get the coolest t-shirts from our brand new store
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
    </article>
  );
}
