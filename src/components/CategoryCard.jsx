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
    </article>
  );
}
