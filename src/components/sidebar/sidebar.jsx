import style from './sidebar.module.css';
import { UserIcon, 
         FriendsIcon, 
         GroupIcon, 
         SearchIcon,
         SendIcon,
         LogoIcon,
         LeftArrow,
        RightArrow} from '../iconhelper/iconHelper';

import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const SideBar = ({chnls, channelView, triggerChannelView, auth}) =>{

    const redirect = useNavigate();
    const toggelChannelView=()=>{
        triggerChannelView(!channelView);
    }
    const swipeSidebar = useSwipeable({
        onSwipedLeft: () => triggerChannelView(false),
        onSwipedRight: () => triggerChannelView(true),
    });

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
    const displayChannels=()=>{
        return(
            <>
                <div className={`${style.channelList} 
                    ${channelView? style.open: style.close}`}>
                        {chnls? (
                            populateChnls(chnls)
                        ):(
                            'no channels'
                        )}                    
                </div>
                {channelView? (
                    <div className={style.closeChannels}
                         onClick={()=> toggelChannelView()}>
                        <LeftArrow size={40}/>
                    </div>  
                ):(
                    <div className={style.openChannels}
                         onClick={()=> toggelChannelView()}>
                        <RightArrow size={40}/> 
                    </div>                       
                )}
            </>
        )
    }
    return(
        <div className={style.sideNav} {...swipeSidebar}>
            <div className={style.userNav}> 
                <div className={style.logo} onClick={()=> console.log(auth)}>
                    Chatter<LogoIcon color={'#E84545'} size={25} />
                </div> 
                {auth? (
                    <>
                        <UserIcon color={'#27282c'} 
                                    focusColor={'#62646b'} 
                                    size={25}
                                    fn={()=>redirect('/profile/me')}
                             />
                        <FriendsIcon color={'#27282c'} focusColor={'#62646b'} size={25} />
                        <GroupIcon color={'#27282c'} focusColor={'#62646b'} size={25} />
                        <SearchIcon color={'#27282c'} focusColor={'#62646b'} size={25} />                    
                    </>
                ):(<></>)}                       

            </div>
            {auth?(
                displayChannels()
            ):(<></>)}
        </div>
    )
}
export{
    SideBar,
}