import {
	USER,
    USER_SEARCH,
    USER_LASTEST,
    STATS,
    WITHDRAW,
    WITHDRAW_SEARCH,
    NEWS,
    ADD_NEWS
} from '../constants/Auth';


const initState = {
	loading: false,
	users:[],
	stats: []
  }
const api = (state = initState, action) => {
	switch (action.type) {
		case USER:
			return action.data
		case USER_SEARCH: 
			return action.data
		case USER_LASTEST: 
            return {
				...state,
				users: action.data
			}
		case STATS: {
            return {
				...state,
				stats: action.data
			}
		}
		case WITHDRAW: {
			return action.data
		}
		case WITHDRAW_SEARCH: {
			return action.data
		}
        case NEWS: {
			return action.data
		}
        case ADD_NEWS: {
			return action.data
		}
		default:
			return state;
	}
}

export default api