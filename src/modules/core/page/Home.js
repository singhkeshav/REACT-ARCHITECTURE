import React from 'react'
import Lateststory from '../component/latestsotry/lateststory';
import Maincard from '../component/main-card/maincard';

export default function Home() {
    return (
        <div style={{position: 'static',marginTop: '15px', marginLeft: '10px',marginRight: '10px'}}  >
           <Maincard />
           <Lateststory />
        </div>
    )
}
