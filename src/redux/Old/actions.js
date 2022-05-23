export const COMMANDES_CACHES = 'COMMANDES_RESTANTS';
export const MIDDLE_SECTION = 'MIDDLE_SECTION';
export const setCC = (number) =>{
	return {
		type:COMMANDES_CACHES,
		payload:number,
	}
}

export const setMiddle_Section=(ms)=>{
	return {
		type:MIDDLE_SECTION,
		payload:ms,
	}
}