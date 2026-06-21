import { UserIcon } from "../../iconhelper/iconHelper";
import style from './card.module.css';

const Card = ({data, searchType})=>{
    console.log(data)
    if(searchType){
        return(
            <div className={style.mainContainer}>
                <div >
                    {data.photo? (
                        <img alt="user profile photo" src={`${data.photo}`}/>
                    ):(
                        <UserIcon size={45} />
                    )}
                </div>
                <h2>{data.id}</h2>
                <h3>{data.name}</h3>
            
            </div>
        )        
    }else{
        return(
            <>
            in construction
            </>
        )
    }

}

export{
    Card
}