
export default function CoreConcept({image,title,description}){  //destructuring an object(props)
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}