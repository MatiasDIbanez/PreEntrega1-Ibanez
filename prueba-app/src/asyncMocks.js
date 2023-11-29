const products = [
    {category: "Clasica", id: "1",name: "Carne suave",  stock: 100,price: 240, img: "url-img", description: "Carne semi-picada, huevo, cebolla y morrón."},
    {category: "Clasica",id: "2",name: "Carne picante",stock: 100,price: 240,img: "url-img",description: " Carne semi-picada, huevo, cebolla, morrón y locoto."},
    {category: "Clasica",id: "3",name: "Pollo",stock: 100,price: 240,img: "url-img",description: "Pollo, cebolla y morrón."},
    {category: "Clasica",id: "4",name: "Pollo con salsa blanca",stock: 100,price: 240,img: "url-img",description: "Pollo, verdeo y salsa blanca."},
    {category: "Clasica",id: "5",name: "Roquefort con jamón",stock: 100,price: 240,img: "url-img",description: "Roquefort, jamón en cubos y mozzarella."},
    {category: "Clasica",id: "6",name: "Jamón y queso",stock: 100,price: 240,img: "url-img",description: "Jamon en cubos y mozzarella."},
    {category: "Vegetariana",id: "7",name: "Caprese",stock: 100,price: 240,img: "url-img",description: "Mozzarella, tomate, ajo y albahaca."},
    {category: "Vegetariana",id: "8",name: "Queso y cebolla",stock: 100,price: 240,img: "url-img",description: "Cebolla y mozzarella."},
    {category: "Vegetariana",id: "9",name: "Humita",stock: 100,price: 240,img: "url-img",description: "Choclo y salsa blanca."},
    {category: "Vegetariana",id: "10",name: "Calabaza",stock: 100,price: 240,img: "url-img",description: "Calabaza y mozzarella."},
    {category: "Vegetariana",id: "11",name: "Verdura",stock: 100,price: 260,img: "url-img",description: "Acelga, mozzarella y salsa blanca."},
    {category: "Especial",id: "12",name: "Diabla",stock: 100,price: 260,img: "url-img",description: "Mozarella y cantimpalo."},
    {category: "Especial",id: "13",name: "Cuatro queso",stock: 100,price: 260,img: "url-img",description: " Mozzarella, gouda, roquefort y parmesano."},
    {category: "Especial",id: "14",name: "Cheese burger",stock: 100,price: 260,img: "url-img",description: "Carne semi-picada, cheddar y panceta." },
    {category: "Vegana",id: "15",name: "No pollo",stock: 100,price: 260,img: "url-img",description: "Soja texturizada con hongos al ajillo." },
    {category: "Vegana",id: "16",name: "Caprese vegana",stock: 100,price: 260,img: "url-img",description: "Tomate, albahaca, queso de almendras y provenzal."},
    {category: "Vegana",id: "17",name: "Agridulce",stock: 100,price: 260,img: "url-img",description: " Lentejas, cebolla caramelizada y aceitunas negras."},
    {category: "Vegana",id: "18",name: "New mix",stock: 100,price: 260,img: "url-img",description: "Zucchuni, choclo, zanahoria y cebolla."},
    {category: "Dulce",id: "19",name: "Membrillo",stock: 100,price: 240,img: "url-img",description: "Una Zapato"},
    {category: "Dulce",id: "20",name: "Batata",stock: 100,price: 240,img: "url-img",description: "Una Zapato"},
  ]
    
    export const getProducts = () => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          setTimeout(() => {
            resolve(products);
          }, 1500);
        } else {
          reject("No hay productos");
        }
      });
    };
  
    export const getProductById = (id) => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          const product = products.find( p => p.id === id);
          
          setTimeout(() => {
            if(!product) {
              reject(`No se encuentra el productos con el id ${id}`)
            }
            resolve(product);
          }, 2000);
        } else {
          reject("No hay productos");
        }
      });
    };