import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallengs } from '../components/CompletedChallengs';
import { Countdonw } from '../components/Countdonw';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdonwProvider } from '../contexts/CountdonwContext';

type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};

export default function Home(props: HomeProps) {
  const { level, currentExperience, challengesCompleted } = props;

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdonwProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallengs />
              <Countdonw />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdonwProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
