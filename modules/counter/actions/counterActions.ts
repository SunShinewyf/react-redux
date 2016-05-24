import * as ActionTypes from "../constants/ActionTypes";

export function addTodo(text){
    return{
        type:'add_todo',
        text:text
    };
}

export function delTodo(id){
    return{
        type:'del_todo',
        id
    };
}

export function editTodo(id){
    return{
        type:'edit_todo',
        id
    };
}