import axios from "axios";
import { DELETE_PROJECT_TASK, GET_ERRORS, GET_PROJECT_TASKS } from "./types";

export const addProjectTask = (project_task, history) => async dispatch =>{
    try{
        await axios.post("http://localhost:8080/api/board", project_task);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch(error){
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data
    });
};

export const deleteProjectTask = id => async dispatch =>{
    if(window.confirm(`Do you realy want to delete task ${id}`)){
        await axios.delete(`http://localhost:8080/api/board/${id}`);
        dispatch({
            type: DELETE_PROJECT_TASK,
            payload: id
        });
    }
    
};