import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { wrapper } from "../store/store";
import { selectAuthState, setAuthState } from '../store/authSlice';
import Link from 'next/link';
import { useSelector } from 'react-redux';


const Home: NextPage = () => {
    const authState = useSelector(selectAuthState);

  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <Link href={'/test'}>
                Go to test
            </Link>
            <p className={styles.description}>
                Login status: {JSON.stringify({ authState })}
            </p>
        </main>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // custom initial logic
      await store.dispatch(setAuthState(false)); 
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);


export default Home
