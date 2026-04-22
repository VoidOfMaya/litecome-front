import style from './sidebar.module.css';
import { UserIcon, 
         FriendsIcon, 
         GroupIcon, 
         SearchIcon,
         SendIcon,
         LogoIcon} from '../../iconhelper/iconHelper';

const SideBar = ({chnls}) =>{
    const populateChnls = (data) =>{
        return data.map(chnl=>{
            return(
                <div key={chnl.id} className={style.channelOption}>
                    <div>{chnl.id}</div>
                    <div>{chnl.name}</div>
                </div>
            )
        })
    }
    return(
        <div className={style.sideNav}>
            <div className={style.userNav}> 
                <div className={style.logo}>
                    Chatter<LogoIcon color={'#E84545'} size={25} />
                </div>                        
                <UserIcon color={'#27282c'} focusColor={'#62646b'} size={25} />
                <FriendsIcon color={'#27282c'} focusColor={'#62646b'} size={25} />
                <GroupIcon color={'#27282c'} focusColor={'#62646b'} size={25} />
                <SearchIcon color={'#27282c'} focusColor={'#62646b'} size={25} />
            </div>
            <div className={style.channelList}>
                {chnls? (
                    populateChnls(chnls)
                ):(
                    'no channels'
                )}                    
            </div>
        </div>
    )
}
export{
    SideBar,
}