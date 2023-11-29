
import './App.css'
import ContainerBox from './Components/ContainerBox/ContainerBox'
import NavBar from './Components/NavBar/NavBar'
import ItemCount from './Components/ItemCount/ItemCount'
import CardProduct from './Components/CardProduct/CardProduct'

function App() {
  return (
    <>
   <NavBar></NavBar>
    <ContainerBox greeting={"Bienvenidos a nuestra tienda"}/>
    <div>Este div 
      <ItemCount/>
      <CardProduct></CardProduct>
    </div>
    </>
  )
}

export default App
