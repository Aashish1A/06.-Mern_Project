import React, { useState } from "react";
import { useProductStore } from "../Store/Product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const {createProduct} =  useProductStore()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Product Added:", formData);

    // Add your logic to send the form data to the backend
    const {success, message} = await createProduct(formData);
    if (success) {
        toast.success(message); // Success toast
    } else {
        toast.error(message); // Error toast
    }

    setFormData({name: "", price: "", image: ""});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <ToastContainer />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-400 mb-6">
        Create New Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreatePage;