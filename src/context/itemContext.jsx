import { createContext, useState } from 'react';

// Export the context
export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [data, setData] = useState([
  {
    id: 1,
    name: "Strawberry Cupcake",
    price: "4.50",
    image: "https://imgs.search.brave.com/0qIdxeV-VLwcPz7PbxsjY6zsiIYCAcqRrsP3Du-hFPw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kb2hm/dWwuY29tL2Nkbi9z/aG9wL2ZpbGVzL0RT/QzAwNTEyLTEuanBn/P3Y9MTc0OTY1Mzc1/OCZ3aWR0aD01MzM"
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    price: "3.20",
    image: "https://source.unsplash.com/300x200/?croissant,chocolate"
  },
  {
    id: 3,
    name: "Vanilla Donut",
    price: "2.80",
    image: "https://source.unsplash.com/300x200/?donut,vanilla"
  },
  {
    id: 4,
    name: "Berry Tart",
    price: "5.00",
    image: "https://source.unsplash.com/300x200/?tart,berries"
  },
  {
    id: 1,
    name: "Strawberry Cupcake",
    price: "4.50",
    image: "https://source.unsplash.com/300x200/?cupcake,strawberry"
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    price: "3.20",
    image: "https://source.unsplash.com/300x200/?croissant,chocolate"
  },
  {
    id: 3,
    name: "Vanilla Donut",
    price: "2.80",
    image: "https://source.unsplash.com/300x200/?donut,vanilla"
  },
  {
    id: 4,
    name: "Berry Tart",
    price: "5.00",
    image: "https://source.unsplash.com/300x200/?tart,berries"
  },
]);

  return (
    <ItemContext.Provider value={{ data, setData }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
