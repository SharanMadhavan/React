const Counterfunction = (countValue,action) =>{

    if(action.type === 'INC'){
       return { count:countValue.count+1}
    }
    if(action.type === "DEC"){
        return {count:countValue.count-1}
    }
    else{
        return {count:0}
    }
    
}
export default Counterfunction ;