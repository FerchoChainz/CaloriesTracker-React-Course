import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/ActivityReducer"
import List from "./components/List";


function App() {

  // dispatch is special function that execute the actions
    const [state, dispatch] = useReducer(activityReducer, initialState)

    console.log(state);

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">

          <h1 className="text-center text-xl font-bold text-white uppercase">Calories Tracker</h1>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">

          <Form 
            dispatch={dispatch}
          />

        </div>
      </section>


      <section className="p-10 mx-auto max-w-4xl bg-red-50">
        <List 
          activities={state.activities}
        />
      </section>
    </>
  )
}

export default App