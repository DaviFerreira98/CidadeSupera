import { Action } from "./actions";

export interface TokenState {
    tokens: string,
    ids: number,
    nomes:string,
    usuarios:string,

}

const initialState = {
    tokens: "",
    ids: 0,
    nomes:"",
    usuarios:""

}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload ,ids: state.ids,nomes: state.nomes,usuarios: state.usuarios};
        }
        case "ADD_ID": {
            return {ids: action.payload, tokens: state.tokens, nomes: state.nomes, usuarios: state.usuarios};
        }
        case "ADD_NOME": {
            return {nomes: action.payload, tokens: state.tokens, ids: state.ids, usuarios: state.usuarios};
        }
        case "ADD_USUARIO": {
            return {usuarios: action.payload, tokens: state.tokens, ids: state.ids, nomes: state.nomes};
        }

        default:
            return state
    }
}