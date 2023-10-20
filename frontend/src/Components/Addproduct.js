import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddProduct = ({ onAddProduct }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [featured, setFeatured] = useState(false);
  const [rating, setRating] = useState(0);
  const [company, setCompany] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleFeaturedChange = (e) => {
    setFeatured(e.target.checked);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value, 10));
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || price.trim() === "") {
      alert("Please fill in both name and price.");
      return;
    }

    const result = await fetch('http://localhost:8000/add', {
      method: 'POST', 
      headers: {
        'Content-Type' : 'application/json' ,
      },
      body: JSON.stringify({
        name,
        price,
        featured,
        rating,
        company
      })

    })
    
    navigate('/displayproduct');

  };


  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <label>Featured:</label>
          <input
            type="checkbox"
            checked={featured}
            onChange={handleFeaturedChange}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={handleRatingChange}
          />
        </div>
        <div>
          <label>Company:</label>
          <input type="text" value={company} onChange={handleCompanyChange} />
        </div>
        <button type="submit"
        style={{width:'50%' ,  marginLeft:'30%' , marginTop:'2%'}}
        >Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
