import { useState, type ChangeEvent, type Dispatch, type SubmitEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Activity } from "../types";
import { categories } from "../data/categories";
import type { ActivityActions } from "../reducers/ActivityReducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>
}

// Initial State condition
const INITIAL_STATE :Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0
}


function Form({dispatch } : FormProps) {

    const [activity, setActivity] = useState<Activity>(INITIAL_STATE)

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent <HTMLInputElement>) => {

    const isNumberField = ['category', 'calories'].includes(e.target.id)

    console.log(isNumberField);

    setActivity({
        ...activity,
        [e.target.id] :  isNumberField ? +e.target.value : e.target.value
        //To be sure if it is string or in case of activity | calories setting in number type

    })
  }

  // Form Validation input
  const isValidActivity = () => {
    const {name, calories} = activity

    return name.trim() !== "" && calories > 0;
  }

  const handleSubmit =(e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();


    dispatch({
      type: 'save-activity',
      payload: {newActivity: activity}
    })

    // set blank the state
    setActivity({
      ...INITIAL_STATE,
      id: uuidv4()
    })
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg "
    onSubmit={handleSubmit}
    >
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
        className="bg-gray-900 w-full p-2 font-bold text-white uppercase cursor-pointer rounded-lg disabled:opacity-10"
        value={activity.category === 1 ? 'Add Food' : 'Add Activity'}
        disabled={!isValidActivity()}
        />

    </form>
  );
}

export default Form;
