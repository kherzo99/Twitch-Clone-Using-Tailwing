export default function NavBar() {
  return (
    <nav className="bg-[#18181B] h-12 flex flex-row gap-5 p-2">
      <img
        className=""
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png"
        alt="logo-twitch"
      />
      <div>
        <p className="text-base font-bold hover:text-[#CA85FF] hover:cursor-pointer">
          Explorar
        </p>
        {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /> */}
      </div>
    </nav>
  );
}
