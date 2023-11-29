import './CardProduct.css'
import ItemCount from '../ItemCount/ItemCount'
 const CardProduct = () => {
  return (
    <>
    <div className="CardContainer">
        <div className='InnerCardContainer'>
            <ItemCount className='Count'/>
        </div>
    </div>
    </>
  )
}
export default CardProduct