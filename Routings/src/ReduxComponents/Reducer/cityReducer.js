export const cityReducer =(cityname="null",action)=>{
        if(action.type == "CITY"){
            cityname = action.cityName;
        }
        return cityname;
}