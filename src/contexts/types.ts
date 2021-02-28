export type ChallengesProviderProps = {
  children: React.ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};

type Challenge = {
  type: 'body' | 'eye';
  description: string;
  amount: number;
};

export type ChallengesContextData = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenges: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
};

export type CountdownContextData = {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdonw: () => void;
  resetCountdonw: () => void;
};
