export default function Streamer(props) {
  return (
    <div
      className={
        "grid grid-cols-[2rem_auto_3rem] items-center gap-1 px-2 hover:bg-white/5 cursor-pointer py-1 " +
        props.styles
      }
    >
      <img
        className="h-[30px] rounded-full"
        src={props.img || "https://api.dicebear.com/7.x/rings/png?seed=x"}
        alt="avatar"
      />

      <div className="">
        <p className="capitalize text-sm">{props.name || "desconocido"}</p>
        <p className="text-xs text-white/60 capitalize">
          {props.categoria || "just chatting"}
        </p>
      </div>

      <div className="flex flex-row items-center justify-end gap-2">
        {props.isLive === true ? (
          <>
            <figure className="bg-red-600 w-2 h-2 rounded-full"></figure>
            <span className="text-xs">{props.viewers || 0} k</span>
          </>
        ) : (
          <p className="text-white/30">offline</p>
        )}
      </div>
    </div>
  );
}
