import { Link } from "react-router-dom";

export const Item = ({id, name, img, description }) => {
  return(
    <div>
      <div className="item-producto">
        <p>{name}</p>
        <div className="descripction">
        {description}
        </div>
        <img src={img} alt="" />
        <Link to={`/item/${id}`}>
            <button className="btn btn-outline-success">Detalles</button>
        </Link>
      </div>
    </div>
  )
}

