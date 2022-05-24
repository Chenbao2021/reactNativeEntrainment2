import {COMMANDES_CACHES} from './actions';
import { MIDDLE_SECTION } from './actions';
const initialState={
	number: 0,
	ms: "md-save",
}

function userReducer(state=initialState,action){
	switch(action.type) {
		case COMMANDES_CACHES:
				return {...state,number:action.payload};
		case MIDDLE_SECTION:
				return {...state,ms:action.payload};
		default:
			return state ;
	}
	
}

export default userReducer;
//setting
//orders
orders = [
	{	
		orderName: '',
		createdAt: '',
		serverName: '',
		customerNb: 0,
		products: [
			{ name: 'plat 1', finished: false },
			{ name: 'boisson', finished: false },
			{ name: 'plat 3', finished: false }
		]
	},
	{},
]
//Order history

