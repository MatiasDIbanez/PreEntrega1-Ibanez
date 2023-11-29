import { LuShoppingCart } from "react-icons/lu";
const contenedorStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};
export default function Cart() {
  return (
    <div style={contenedorStyle}>
      <p>0</p>
      <LuShoppingCart color="black" size={30}/>
    </div>
  )
}