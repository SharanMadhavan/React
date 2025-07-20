 export const  formPageReducerFn = (formdata={},action) =>{
    if(action.type == "FormData"){
        return {...action.Formobject};
    }
        return formdata;
 }