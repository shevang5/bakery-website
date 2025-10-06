import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemContext } from "../context/itemContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { data, setData } = useContext(ItemContext);
  const { register, handleSubmit, reset } = useForm();
  const params = useParams();
  const item = data.find((item) => params.id == item.id);

  const navigate = useNavigate();
  const submitHandler = (item) => {

    
    const index = data.findIndex((item) => params.id == item.id);
    
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...item };
    setData(copydata);
    // console.log(copydata[index]);
    toast.success("Item updated successfully!");
    
    reset();
  };
  
  const deleteHandler= ( )=>{
    const filterData = data.filter((del) => params.id != del.id);
    setData(filterData);
    toast.success("Item deleted successfully!");
    navigate(`/menu`);
  }


  const [isEditing, setIsEditing] = useState(false);

  if (!item)
    return <div className="text-center mt-20 text-xl">Product not found!</div>;

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="max-w-6xl md:mt-60 mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Product Image */}
        <div className="w-full">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[400px] object-cover rounded-3xl shadow-xl border-4 border-pink-200"
          />
        </div>

        {/* Right side - Details */}
        <div className="space-y-6 p-8 rounded-3xl">
          <h2 className="text-4xl font-extrabold text-pink-700">{item.name}</h2>
          <p className="text-2xl text-yellow-600 font-semibold">
            ${item.price}
          </p>
          <p className="text-gray-700 text-lg">{item.description}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md">
              🛒 Add to Cart
            </button>
            <button className="bg-red-200 hover:bg-red-300 text-red-700 font-semibold py-2 px-5 rounded-full transition duration-300">
              ❤️ Like
            </button>
            <button
              onClick={handleEditClick}
              className="bg-blue-200 hover:bg-blue-300 text-blue-700 font-semibold py-2 px-5 rounded-full transition duration-300"
            >
              ✏️ {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* UI-only Edit Form */}
          {isEditing && (
            <div className="mt-10 p-6 bg-gray-100 rounded-2xl shadow-md space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Edit Product
              </h3>
              <form onSubmit={handleSubmit(submitHandler)} action="">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={item.name}
                    {...register("name", { required: true })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    defaultValue={item.price}
                    {...register("price", { required: true })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    defaultValue={item.description}
                    {...register("description", { required: true })}
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    defaultValue={item.image}
                    {...register("image", { required: true })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>

                <div className="flex justify-between">
                  <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition duration-300">
                    💾 Save
                  </button>
                  <button
                    onClick={deleteHandler}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full transition duration-300"
                  >
                    remove
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
