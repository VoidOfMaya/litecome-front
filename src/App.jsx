import { useEffect, useState } from 'react'
import style from './App.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { SideBar } from './components/sidebar/sidebar';
import { MembersBar } from './components/members/members';
import { useSwipeable} from 'react-swipeable';
import { channels, channel_members} from './mock/data'; 

function App() {
  const redirect = useNavigate();
  const [channelView,setChannelView]=useState(true)
  const [chnls, setChnls] = useState(null);
  const [members, setMembers] = useState(null);
  const [viewMembers,setViewMembers]=useState(true)
  const [auth, setAuth]= useState({});

  //handels sidebar interactive actions touch and click
  const toggelMembersView=()=>{
      setViewMembers(!viewMembers);
  }
  const membersBar = useSwipeable({
      onSwipedLeft: () => setViewMembers(true),
      onSwipedRight: () => setViewMembers(false),
  });

  //handels sidebar interactive actions touch and click
  const toggelChannelView=()=>{
    setChannelView(!channelView);
  }
  const sidebar = useSwipeable({
    onSwipedLeft: () => setChannelView(false),
    onSwipedRight: () => setChannelView(true),
  });

  useEffect(()=>{
    setChnls(channels);
    setMembers(channel_members)
  },[auth, redirect])
  return (
    <div className={style.appContainer}>      
    <SideBar  channelView={channelView} 
              triggerFn={toggelChannelView} 
              chnls={chnls} 
              swipAction={sidebar}
    />
    <Outlet cotnext={{

      }}/>
    <MembersBar data={members} 
                membersView={viewMembers}
                triggerFn={toggelMembersView} 
                swipAction={membersBar}
    />

    </div>
  )
}

export default App
