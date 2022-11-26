export const Pokemono = ({ pokemon }) => {
    const { name, imgUrl } = pokemon;
  return (
    <div>
        <img src={imgUrl} alt={name} />
        {name}
    </div>
  )
}