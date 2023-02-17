export default function ComentarioCard({ comentario }) {
  return (
    <div
      className="rounded-lg w-[350px] md:h-[350px] md:w-[300px] items-center
    snap-center bg-[#f4a261]/40 py-3 md:pt-5 px-3 md:px-3 md:hover:opacity-100 md:opacity-40 md:transition-opacity md:duration-200 overflow-hidden"
    >
      <div>{comentario.comentario}</div>
      <div className="pt-3 md:pt-4">
        <div>{comentario.nombre}</div>
        <div>{comentario.ubicacion}</div>
      </div>
    </div>
  );
}