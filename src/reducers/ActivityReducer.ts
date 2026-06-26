import type { Activity } from "../types"

export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity : Activity}}

type ActivityState = {
    activities: Activity[];
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

    if(action.type === 'save-activity'){
        // this code drive the logic to update the state
        
        return {
            // Take a copy of the state to not lose the reference
            ...state,
            activities: [...state.activities, action.payload.newActivity ]
        }
        console.log();
    }

    return state;
}