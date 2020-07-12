const redux = require('redux')
const createStore = redux.createStore
const initialState = {
	loading: false,
	users: [],
	error: ''
}

const FETCH_USERS-REQUEST = 'FETCH_USERS-REQUEST'
const FETCH_USERS-SUCCESS = 'FETCH_USERS-SUCCESS'
const FETCH_USERS-FAILURE = 'FETCH_USERS-FAILURE'

//action creators
const fetchUsersRequest = () =>{
	return{
		type: FETCH_USERS-SUCCESS,
		
	}
}
const fetchUsersSuccess = () =>{
	return{
		type: FETCH_USERS-SUCCESS,
		payload: users 
	}
}
const fetchUsersFailure = () =>{
	return{
		type: FETCH_USERS-FAILURE,
		payload: error
	}
}
//reducers
const reducer = (state = initialState, action) =>{
	switch(action.type){
		case FETCH_USERS-REQUEST:
			return{
				...state,
				loading: true
			}
		case FETCH_USERS-SUCCESS:
			return{
				loading: false,
				users: action.payload,
				error: ''
			}
			case FETCH_USERS-FAILURE:
			 return{
			 	loading: false,
			 	users: [],
			 	error: action.payload
			 }
		}
	}
	const store = createStore(reducer)


