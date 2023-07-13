import React, { useState } from "react";


function NewPlantForm({ onNewPlant }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price:""
  })

  function handleForm(e) {
    setForm({...form, [e.target.name] : e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({
        ...form,
        price: parseFloat(form.price),
      })
    })
    .then(res =>res.json())
    .then(newPlant => {onNewPlant(newPlant)})
  }
//make price a number not a string line

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value={form.name}
        onChange={handleForm} />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL"
        value={form.image}
        onChange={handleForm} />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price"
        value={form.price}
        onChange={handleForm} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
