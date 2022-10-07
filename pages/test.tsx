import type { NextPage } from 'next'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, setAuthState } from '../store/authSlice';
import styles from '../styles/Home.module.css'

const Test: NextPage = () => {
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();

    const login = () => {
        dispatch(setAuthState(true)); 
    }

    const logout = () => {
        dispatch(setAuthState(false)); 
    }

    return (
        <div className={styles.container}>
            Test store: {JSON.stringify(authState)}
            <button onClick={login}>login</button>
            <div>
                <button onClick={logout}>logout</button>
            </div>
            <Link href={'/'}>
                Go home
            </Link>
        </div>
    )
}

export default Test
