import './NavBar.css'
import Cart from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo'  

function NavBar(){
    return <header className="BarMenu">
     <Logo/>
    <ul> 
      <li><button>Nosotros</button></li>
      <li><button>Productos</button></li>
      <li><button>Contacto</button></li>
      <li><button>Encuesta</button></li>
    </ul>
    <Cart/>
  </header>;
}

export default NavBar;
