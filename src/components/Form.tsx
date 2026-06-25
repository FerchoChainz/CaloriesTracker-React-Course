import { useState } from "react";
import { categories } from "../data/categories";

function Form() {

    const [activity, setActivity] = useState({
        category: 1,
        name: "",
        calories: 0   
    })

  const handleChange = (e) => {

    setActivity({
        ...activity,
        [e.target.id] :  e.target.value
    })
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg ">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Category:</label>
        <select
          className="border border-slate-300 rounded-lg w-full bg-white"
          id="category"
          name="category"
          value={activity.category}
          onChange={handleChange}
        >
            {categories.map((category)=> (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
      </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name">Activity:</label>
            <input 
            type="text"
            id="name"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ex. Food, Orange Juice, Salad, Exercise, Running"
            value={activity.name}
            onChange={handleChange}
             />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories">Calories:</label>
            <input 
            type="text"
            id="calories"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ex. Calories 500, 600"
            value={activity.calories}
            onChange={handleChange}
             />
        </div>

        <input 
        type="submit" 
        name="" 
        id="" 
        className="bg-gray-900 w-full p-2 font-bold text-white uppercase cursor-pointer rounded-lg hover:bg-gray-700"
        value="Save"
        />

    </form>
  );
}

export default Form;
