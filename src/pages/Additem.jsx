import { nanoid } from "nanoid";
import { useContext } from "react";
import { set, useForm } from "react-hook-form";
import { ItemContext } from "../context/itemContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Additem = () => {
  const navigate = useNavigate();
    
    const {data, setData} = useContext(ItemContext);
    const {register, handleSubmit, reset} = useForm(); 
    const submitHandler = (newdata)=>{
        newdata.id = nanoid();
        console.log(newdata);
        setData([...data, newdata]);
        toast.success("Item added successfully!");
        navigate('/menu');
        reset();
    }

  return (
    <section className="max-w-xl mx-auto mt-32 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#FFB9CD]">
        Add New Bakery Item
      </h2>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">

        {/* Image Upload */}
        <div>
          <label htmlFor="image url" className="block text-sm font-medium text-gray-700 mb-1">
            image URL
          </label>
          <input
            type="url"
            id="image"
            accept="image/*"
            {...register("image", { required: true })}
            // className="block w-full text-sm text-gray-500
            //   file:mr-4 file:py-2 file:px-4
            //   file:rounded-full file:border-0
            //   file:text-sm file:font-semibold
            //   file:bg-[#FFB9CD] file:text-white
            //   hover:file:bg-pink-300"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB9CD]"
          />
        </div>

        {/* Item Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            placeholder="e.g. Strawberry Tart"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB9CD]"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            min="0"
            step="0.01"
            {...register("price", { required: true })}
            placeholder="e.g. 4.99"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB9CD]"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            placeholder="Write a short description..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB9CD] resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#FFB9CD] hover:bg-pink-300 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default Additem;
