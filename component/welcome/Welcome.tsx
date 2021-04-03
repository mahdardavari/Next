import {FunctionComponent,useState} from 'react'
import Link from 'next/link'
import {WelcomeProps} from '../models/types'

const Welcome: React.FC<{ initial?: WelcomeProps }> = ({ initial="hasan"}) => { 
    const [name,setName]=useState(initial);
    return(
        <h1>Welcome {initial}</h1>

    );
}

export default Welcome