import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../Store/Product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { fetchProducts, products, deleteProduct, updateProduct } = useProductStore();

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      toast.success(message); // Success toast
    } else {
      toast.error(message); // Error toast
    }
  };

  const handleEditClick = (product) => {
    setEditFormData({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setIsEditPopupOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (success) {
        toast.success("Product updated successfully"); // Show success toast
    } else {
        toast.error(message); // Show error toast
    }
    setIsEditPopupOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditPopupOpen(false);
  };

  return (
    <div className="py-12 px-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-400">
        Current Products
      </h1>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            No Products found 😓
          </p>
          <button
            onClick={() => navigate("/create")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create a Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{product.price}</p>
              <div className="flex space-x-4 mt-4">
                <button
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  title="Edit"
                  onClick={() => handleEditClick(product)}
                >
                  <FaEdit size={20} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  title="Delete"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Product Popup */}
      {isEditPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
              onClick={handleCancelEdit}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Update Product
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditChange}
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
                value={editFormData.price}
                onChange={handleEditChange}
                placeholder="Enter price"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={editFormData.image}
                onChange={handleEditChange}
                placeholder="Enter image URL"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-200"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdateProduct(editFormData.id, editFormData)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;