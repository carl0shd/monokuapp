import { useState } from 'react'

const State = {
    StandUUID: "",
    product: {}
}

const useGlobalState = () => {
    const [state, setState] = useState(State)

    const actions = action => {
        const { type, payload } = action
        // eslint-disable-next-line
        switch (type) {
            case "setState": {
                return setState(payload)
            }
        }
    }
    return { state, actions }
}

export default useGlobalState