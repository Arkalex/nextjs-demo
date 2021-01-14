import { useState, useEffect } from 'react';
import Head from 'next/head';
import AppLayout from '@c/AppLayout';
import Button from 'components/Button';
import Github from 'components/Icons/Github';
import { loginWithGithub, onAuthStateChanged } from 'firebase/client';

import { colors } from 'styles/theme';
import Avatar from 'components/Avatar';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGithub()
      .then((userRes) => {
        //  const { avatar, username, url } = user;
        setUser(userRes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Head>
        <title>Next.js Twitter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>
        <section>
          <img src='/twitter-logo.png' alt='Alt' text='Text' />
          <h1>Twitter</h1>
          <h2>Developed with Next.js!</h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <Github fill={colors.white} width={24} height={24} />
                Login with Github
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <Avatar
                  alt={user.username}
                  src={user.avatar}
                  text={user.username}
                />
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>
        {`
        img {
          width: 120px;
        }

        section{
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800
          margin-bottom: 8px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }

        div {
          margin-top: 16px;
        }
      `}
      </style>
    </div>
  );
}
