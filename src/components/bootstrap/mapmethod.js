import Profilecard from "./card"

const Mapmethod=()=>{
    

        const members=[
            {
                name:"pravallika",
                color:"red",
                id:1,
                designation:"java developer",
                salary:"1Lpa"
            },{
                name:"mallika",
                color:"yellow",
                id:2,
                designation:"Doctor",
                salary:"80k"
    
            },
            {
                name:"divya",
                color:"green",
                id:3,
                designation:"Teacher",
                salary:"50k"
    
            },
    
    
    
            
        ]
        return(
            <>
            {members.map((details)=><Profilecard profilecard profile={details} key={details.id}/>)}
            </>
        

        );
        

    
    
}
export default Mapmethod;