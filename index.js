const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

//action is an object with a type property 
// {
// 	type: BUY_CAKE,
// 	info: "First redux action"
// }
//action creater is a function that returns an action
function buyCake () {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}
function buyIceCream(){
	return{
		type: BUY_ICECREAM,
	}
}


// const initialState = {
// 	numofCakes: 10,
// 	numofIceCreams: 20
// }
const initialCakeState = {
	numofCakes: 10,
}
const initialIcecreamState = {
	numofIceCreams: 20
}
//REDUCER
//(previousState, action) =>. newState
// const reducer = (state = initialState, action) =>{
// 	switch(action.type){
// 		case BUY_CAKE: return {
// 			...state,
// 			numofCakes: state.numofCakes - 1
// 		}
// 		case BUY_ICECREAM: return {
// 			...state,
// 			numofIceCreams: state.numofIceCreams - 1
// 		}
// 		default: return state
// 	}
// }
const cakeReducer = (state = initialCakeState, action)=>{
	switch(action.type){
		case BUY_CAKE: return{
			...state, 
			numofCakes: state.numofCakes -1
		}
		default: return state
	}
}
const iceCreamReducer = (state = initialIcecreamState, action)=>{
	switch(action.type){
		case BUY_ICECREAM: return{
			...state, 
			numofIceCreams: state.numofIceCreams -1
		}
		default: return state
	}
}
const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState())
//const unsubscribe = store.subscribe(() => console.log('Updated state',store.getState()))
const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

