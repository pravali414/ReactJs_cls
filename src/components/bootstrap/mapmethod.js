import Profilecard from "./card"

const Mapmethod=()=>{
    

        const members=[
            {
                name:"pravallika",
                color:"red",
                designation:"java developer",
                salary:"1Lpa"
            },{
                name:"mallika",
                color:"yellow",
                designation:"Doctor",
                salary:"80k"
    
            },
            {
                name:"divya",
                color:"green",
                designation:"Teacher",
                salary:"50k"
    
            },
    
    
    
            
        ]
        return(
            <>
            {members.map((details)=><Profilecard profilecard profile={details}/>)}
            </>
        

        );
        

    
    
}
export default Mapmethod;