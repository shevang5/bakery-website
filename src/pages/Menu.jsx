
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../context/itemContext';




// const products = [
//   {
//     id: 1,
//     name: "Strawberry Cupcake",
//     price: "$4.50",
//     image: "https://imgs.search.brave.com/0qIdxeV-VLwcPz7PbxsjY6zsiIYCAcqRrsP3Du-hFPw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kb2hm/dWwuY29tL2Nkbi9z/aG9wL2ZpbGVzL0RT/QzAwNTEyLTEuanBn/P3Y9MTc0OTY1Mzc1/OCZ3aWR0aD01MzM"
//   },
//   {
//     id: 2,
//     name: "Chocolate Croissant",
//     price: "$3.20",
//     image: "https://source.unsplash.com/300x200/?croissant,chocolate"
//   },
//   {
//     id: 3,
//     name: "Vanilla Donut",
//     price: "$2.80",
//     image: "https://source.unsplash.com/300x200/?donut,vanilla"
//   },
//   {
//     id: 4,
//     name: "Berry Tart",
//     price: "$5.00",
//     image: "https://source.unsplash.com/300x200/?tart,berries"
//   },
//   {
//     id: 1,
//     name: "Strawberry Cupcake",
//     price: "$4.50",
//     image: "https://source.unsplash.com/300x200/?cupcake,strawberry"
//   },
//   {
//     id: 2,
//     name: "Chocolate Croissant",
//     price: "$3.20",
//     image: "https://source.unsplash.com/300x200/?croissant,chocolate"
//   },
//   {
//     id: 3,
//     name: "Vanilla Donut",
//     price: "$2.80",
//     image: "https://source.unsplash.com/300x200/?donut,vanilla"
//   },
//   {
//     id: 4,
//     name: "Berry Tart",
//     price: "$5.00",
//     image: "https://source.unsplash.com/300x200/?tart,berries"
//   },
// ]

const Menu = () => {
  const navigate = useNavigate();
  // products = products.concat(data);
  const {data, setData} = useContext(ItemContext);
  console.log(data);
  
 
  const navigateHandler = (id)=>{
    navigate(`/menu/product/${id}`);
  }
  return (
    <div className="bg-[#b1e0ff]  w-full py-36 px-4">
      <h2 className="text-4xl font-bold text-center text-[#FFB9CD] mb-10">Our Sweet Menu</h2>
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {data.map((data, index) => (
          <div key={index} onClick={() => navigateHandler(`${data.id}`)} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={data.image} alt={data.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{data.name}</h3>
              <p className="text-[#FFB9CD] text-lg font-medium">${data.price}</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-[#FFB9CD] hover:bg-pink-300 text-white py-1 px-3 rounded-lg transition">Add to Cart</button>
                <button className="border border-[#FFB9CD] hover:bg-[#FFB9CD] hover:text-white text-[#FFB9CD] py-1 px-3 rounded-lg transition">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
