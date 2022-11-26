export const Pokemono = ({ pokemon }) => {
    const { name, imgUrl } = pokemon;
  return (
    <div className="bg-blue-100 p-4 rounded-md" >
        <img width="100%" src={imgUrl} alt={name} />
        <div className="text-center text-lg">
          {name}
        </div>
    </div>
  )
}