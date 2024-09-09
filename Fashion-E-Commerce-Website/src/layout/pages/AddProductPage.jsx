import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import "../layout/pages/AddProductPage.css";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    productname: "",
    brand: "",
    price: "",
    rating: 0,
    colors: [],
    sizes: "",
    shipping: "",
    returnType: "",
    description: "",
    fit: "",
    model: "",
    sustainability: "",
    category: [],
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleColorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedColors = [...formData.colors];
    updatedColors[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      colors: updatedColors,
    }));
  };

  const handleAddColor = () => {
    setFormData((prevData) => ({
      ...prevData,
      colors: [...prevData.colors, { color: "", photo: "", quantity: 0 }],
    }));
  };

  const handleColorPhotoChange = (index, e) => {
    const file = e.target.files[0];
    const color = formData.colors[index];

    if (file) {
      const storageRef = ref(storage, `product-images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          setError(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const updatedColors = [...formData.colors];
            updatedColors[index] = { ...color, photo: downloadURL };
            setFormData((prevData) => ({
              ...prevData,
              colors: updatedColors,
            }));
          });
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }
  
    setLoading(true);
  
    const storageRef = ref(storage, `product-images/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);
  
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        setError(error.message);
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            const token = localStorage.getItem("token"); // Retrieve token from localStorage
            console.log("Token:", token); // Debugging line
            
            const response = await fetch("http://localhost:3000/server/product/addNewProduct", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`, // Include token in headers
              },
              credentials: "include",
              body: JSON.stringify({ ...formData, photo: downloadURL }),
            });
  
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || "An error occurred");
            }
  
            const responseData = await response.json();
            setSuccess(responseData.message);
            setError(null);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        });
      }
    );
  };
  
  

  return (
    <div className="container">
      <h1>Add New Product</h1>
      {success && <p className="success">{success}</p>}
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Uploading...</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productname"
            value={formData.productname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Sizes (comma separated):</label>
          <input
            type="text"
            name="sizes"
            value={formData.sizes}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Shipping Information:</label>
          <input
            type="text"
            name="shipping"
            value={formData.shipping}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Return Type:</label>
          <input
            type="text"
            name="returnType"
            value={formData.returnType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fit:</label>
          <input
            type="text"
            name="fit"
            value={formData.fit}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Sustainability (comma separated):</label>
          <input
            type="text"
            name="sustainability"
            value={formData.sustainability}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category (comma separated):</label>
          <input
            type="text"
            name="category"
            value={formData.category.join(', ')}
            onChange={(e) => handleChange({ target: { name: "category", value: e.target.value.split(",").map(item => item.trim()) } })}
            required
          />
        </div>
        <div>
          <label>Product Photo:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div>
          <label>Colors:</label>
          {formData.colors.map((color, index) => (
            <div key={index}>
              <label>Color Name:</label>
              <input
                type="text"
                name="color"
                value={color.color}
                onChange={(e) => handleColorChange(index, e)}
                required
              />
              <label>Color Photo:</label>
              <input
                type="file"
                onChange={(e) => handleColorPhotoChange(index, e)}
                required
              />
              <label>Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={color.quantity}
                onChange={(e) => handleColorChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddColor}>Add Color</button>
        </div>
        <button type="submit" disabled={loading}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;