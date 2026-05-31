import React, { useState } from 'react';

const screens = {
  HOME: 'home',
  HUNT: 'hunt',
  UNLOCKED: 'unlocked',
  QUIZ: 'quiz',
  INCORRECT: 'incorrect',
  FEEDBACK: 'feedback',
  POINTS: 'points',
  BADGE: 'badge',
  MOTIVATION: 'motivation',
  PROGRESS: 'progress',
  MY: 'my',
  MAP: 'map',
  LEADERBOARD: 'leaderboard',
  HOW: 'how',
  SETTINGS: 'settings',
  PROFILE: 'profile',
  REWARDS: 'rewards',
  SIGNUP: 'signup',
  LOGIN: 'login',
  LOCKED: 'locked'
};

const upcomingChallenge = {
  id: 'NOI',
  target: 'NOI Techpark',
  mapVariant: 'noi'
};

const translations = {
  English: {
    myUniquests: 'My Uniquests',
    campusMap: 'Campus Map',
    leaderboard: 'Leaderboard',
    howItWorks: 'How It Works',
    settings: 'Settings',
    homeSlogan: 'Explore campus. Unlock challenges.',
    homeRewardLine: 'Earn rewards as you explore.',
    startHunt: 'Start Hunt',
    signUp: 'Sign Up',
    logIn: 'Log In',
    username: 'Username',
    password: 'Password',
    createAccount: 'Create Account',
    enterDemo: 'Log In',
    loggedInAs: 'Logged in as',
    logOut: 'Log Out',
    loginRequired: 'Please sign up or log in before starting the hunt.',
    logoutConfirm: 'Are you sure you want to log out?',
    yesLogOut: 'Yes, log out',
    nextChallengeLocked: 'Next challenge locked',
    noiUnlocks: 'NOI Techpark challenge will unlock in 1 day 13 hours',
    checkingLocation: 'Checking your location...',
    targetLibrary: 'Target: Library Entrance',
    targetNotArea: 'Target not in the area',
    followPath: 'Follow path to find the location',
    checkLocation: 'Check Location',
    challengeUnlocked: 'New challenge unlocked!',
    reached: 'You reached:',
    libraryEntrance: 'Library Entrance',
    startQuiz: 'Start Quiz',
    quizQuestion: 'When did NOI Techpark officially open?',
    submitAnswer: 'Submit Answer',
    correct: 'Correct!',
    incorrect: 'Incorrect answer. Try again!',
    tryAgain: 'Try Again',
    continue: 'Continue',
    pointsEarned: '+10 points!',
    challengeComplete: 'You completed Library Entrance Challenge!',
    scoreUpdated: 'Your score has been updated',
    badgeUnlocked: 'New badge unlocked!',
    greatProgress: 'Great progress!',
    stillExplorer: 'You are still an Explorer Badge holder.',
    keepExploringBadge: 'Keep exploring to reach the next badge.',
    explorerBadge: 'Explorer Badge',
    progress: 'Progress',
    completed: 'You completed',
    challenges: 'challenges',
    totalPoints: 'Total points',
    backToHunt: 'Back to Hunt',
    currentBadge: 'Current badge',
    noBadge: 'No badge yet',
    nextReward: 'Next reward',
    completedChallenges: 'Completed challenges',
    noChallenges: 'No challenges completed yet',
    continueExploring: 'Continue Exploring',
    nextDestination: 'Next destination: Library Entrance',
    locationsCompleted: 'locations completed',
    startNavigation: 'Start Navigation',
    rank: 'Rank',
    user: 'User',
    points: 'Points',
    backToHome: 'Back to Home',
    needHelp: 'Need Help?',
    notifications: 'Notifications',
    sound: 'Sound',
    darkMode: 'Dark Mode',
    language: 'Language',
    studentProfile: 'Student Profile',
    saveChanges: 'Save Changes',
    chooseLanguage: 'Choose language',
    cancel: 'Cancel',
    name: 'Name',
    currentBadgeTitle: 'Current Badge',
    nextRewardTitle: 'Next Reward',
    progressPercent: 'Progress',
    backToSettings: 'Back to Settings',
    campusExplorer: 'Campus Explorer',
    advancedBadge: 'Advanced Badge',
    explorerReward: 'Explorer Badge',
    none: 'None',
    completeLibrary: 'Complete Library challenge to unlock',
    rewards: 'Rewards',
    rewardProgress: 'Reward progress',
    nextRewardProgress: 'Next reward progress',
    rewardAvailable: 'Reward available',
    pointsNeeded: 'points needed',
    locked: 'Locked',
    unlocked: 'Unlocked',
    coffeeDiscount: 'Coffee discount',
    freeMensaLunch: 'Free Mensa Lunch',
    championReward: 'Uniquests Champion Reward',
    backToMenu: 'Back to Menu'
  },
  Italian: {
    myUniquests: 'I miei Uniquests',
    campusMap: 'Mappa Campus',
    leaderboard: 'Classifica',
    howItWorks: 'Come funziona',
    settings: 'Impostazioni',
    homeSlogan: 'Esplora il campus. Sblocca sfide.',
    homeRewardLine: 'Guadagna ricompense mentre esplori.',
    startHunt: 'Inizia caccia',
    signUp: 'Registrati',
    logIn: 'Accedi',
    username: 'Nome utente',
    password: 'Password',
    createAccount: 'Crea account',
    enterDemo: 'Accedi',
    loggedInAs: 'Accesso come',
    logOut: 'Esci',
    loginRequired: 'Registrati o accedi prima di iniziare la caccia.',
    logoutConfirm: 'Sei sicuro di voler uscire?',
    yesLogOut: 'Si, esci',
    nextChallengeLocked: 'Prossima sfida bloccata',
    noiUnlocks: 'La sfida NOI Techpark si sblocca tra 1 giorno e 13 ore',
    checkingLocation: 'Controllo posizione...',
    targetLibrary: 'Obiettivo: Ingresso Biblioteca',
    targetNotArea: 'Obiettivo non nell area',
    followPath: 'Segui il percorso per trovare il luogo',
    checkLocation: 'Controlla posizione',
    challengeUnlocked: 'Nuova sfida sbloccata!',
    reached: 'Hai raggiunto:',
    libraryEntrance: 'Ingresso Biblioteca',
    startQuiz: 'Inizia quiz',
    quizQuestion: 'Quando ha aperto ufficialmente NOI Techpark?',
    submitAnswer: 'Invia risposta',
    correct: 'Corretto!',
    incorrect: 'Risposta errata. Riprova!',
    tryAgain: 'Riprova',
    continue: 'Continua',
    pointsEarned: '+10 punti!',
    challengeComplete: 'Hai completato la sfida Ingresso Biblioteca!',
    scoreUpdated: 'Il tuo punteggio e stato aggiornato',
    badgeUnlocked: 'Nuovo badge sbloccato!',
    greatProgress: 'Ottimi progressi!',
    stillExplorer: 'Sei ancora titolare del Badge Esploratore.',
    keepExploringBadge: 'Continua a esplorare per raggiungere il prossimo badge.',
    explorerBadge: 'Badge Esploratore',
    progress: 'Progressi',
    completed: 'Hai completato',
    challenges: 'sfide',
    totalPoints: 'Punti totali',
    backToHunt: 'Torna alla caccia',
    currentBadge: 'Badge attuale',
    noBadge: 'Nessun badge',
    nextReward: 'Prossima ricompensa',
    completedChallenges: 'Sfide completate',
    noChallenges: 'Nessuna sfida completata',
    continueExploring: 'Continua a esplorare',
    nextDestination: 'Prossima destinazione: Ingresso Biblioteca',
    locationsCompleted: 'luoghi completati',
    startNavigation: 'Avvia navigazione',
    rank: 'Pos.',
    user: 'Utente',
    points: 'Punti',
    backToHome: 'Torna Home',
    needHelp: 'Serve aiuto?',
    notifications: 'Notifiche',
    sound: 'Audio',
    darkMode: 'Modalita scura',
    language: 'Lingua',
    studentProfile: 'Profilo studente',
    saveChanges: 'Salva modifiche',
    chooseLanguage: 'Scegli lingua',
    cancel: 'Annulla',
    name: 'Nome',
    currentBadgeTitle: 'Badge attuale',
    nextRewardTitle: 'Prossima ricompensa',
    progressPercent: 'Progressi',
    backToSettings: 'Torna alle impostazioni',
    campusExplorer: 'Esploratore campus',
    advancedBadge: 'Badge Avanzato',
    explorerReward: 'Badge Esploratore',
    none: 'Nessuna',
    completeLibrary: 'Completa la sfida Biblioteca',
    rewards: 'Ricompense',
    rewardProgress: 'Progressi ricompensa',
    nextRewardProgress: 'Progresso prossima ricompensa',
    rewardAvailable: 'Ricompensa disponibile',
    pointsNeeded: 'punti mancanti',
    locked: 'Bloccato',
    unlocked: 'Sbloccato',
    coffeeDiscount: 'Sconto caffe',
    freeMensaLunch: 'Pranzo Mensa gratis',
    championReward: 'Premio Campione Uniquests',
    backToMenu: 'Torna al menu'
  },
  German: {
    myUniquests: 'Meine Uniquests',
    campusMap: 'Campuskarte',
    leaderboard: 'Bestenliste',
    howItWorks: 'So funktioniert es',
    settings: 'Einstellungen',
    homeSlogan: 'Erkunde den Campus. Schalte Aufgaben frei.',
    homeRewardLine: 'Sammle Belohnungen beim Erkunden.',
    startHunt: 'Jagd starten',
    signUp: 'Registrieren',
    logIn: 'Anmelden',
    username: 'Benutzername',
    password: 'Passwort',
    createAccount: 'Konto erstellen',
    enterDemo: 'Anmelden',
    loggedInAs: 'Angemeldet als',
    logOut: 'Abmelden',
    loginRequired: 'Bitte registriere dich oder melde dich an, bevor du die Jagd startest.',
    logoutConfirm: 'Moechtest du dich wirklich abmelden?',
    yesLogOut: 'Ja, abmelden',
    nextChallengeLocked: 'Naechste Aufgabe gesperrt',
    noiUnlocks: 'Die NOI Techpark Aufgabe wird in 1 Tag und 13 Stunden freigeschaltet',
    checkingLocation: 'Standort wird geprueft...',
    targetLibrary: 'Ziel: Bibliothek Eingang',
    targetNotArea: 'Ziel nicht im Bereich',
    followPath: 'Folge dem Weg zum Standort',
    checkLocation: 'Standort pruefen',
    challengeUnlocked: 'Neue Aufgabe freigeschaltet!',
    reached: 'Du hast erreicht:',
    libraryEntrance: 'Bibliothek Eingang',
    startQuiz: 'Quiz starten',
    quizQuestion: 'Wann wurde NOI Techpark offiziell eroeffnet?',
    submitAnswer: 'Antwort senden',
    correct: 'Richtig!',
    incorrect: 'Falsche Antwort. Versuch es erneut!',
    tryAgain: 'Erneut versuchen',
    continue: 'Weiter',
    pointsEarned: '+10 Punkte!',
    challengeComplete: 'Du hast die Bibliothek Aufgabe abgeschlossen!',
    scoreUpdated: 'Dein Punktestand wurde aktualisiert',
    badgeUnlocked: 'Neues Abzeichen freigeschaltet!',
    greatProgress: 'Starker Fortschritt!',
    stillExplorer: 'Du bist weiterhin Entdecker Abzeichen Inhaber.',
    keepExploringBadge: 'Erkunde weiter, um das naechste Abzeichen zu erreichen.',
    explorerBadge: 'Entdecker Abzeichen',
    progress: 'Fortschritt',
    completed: 'Du hast',
    challenges: 'Aufgaben abgeschlossen',
    totalPoints: 'Punkte gesamt',
    backToHunt: 'Zurueck zur Jagd',
    currentBadge: 'Aktuelles Abzeichen',
    noBadge: 'Noch kein Abzeichen',
    nextReward: 'Naechste Belohnung',
    completedChallenges: 'Abgeschlossene Aufgaben',
    noChallenges: 'Noch keine Aufgaben abgeschlossen',
    continueExploring: 'Weiter erkunden',
    nextDestination: 'Naechstes Ziel: Bibliothek Eingang',
    locationsCompleted: 'Orte abgeschlossen',
    startNavigation: 'Navigation starten',
    rank: 'Rang',
    user: 'Nutzer',
    points: 'Punkte',
    backToHome: 'Zurueck Home',
    needHelp: 'Brauchst du Hilfe?',
    notifications: 'Benachrichtigungen',
    sound: 'Ton',
    darkMode: 'Dunkelmodus',
    language: 'Sprache',
    studentProfile: 'Studierendenprofil',
    saveChanges: 'Aenderungen speichern',
    chooseLanguage: 'Sprache waehlen',
    cancel: 'Abbrechen',
    name: 'Name',
    currentBadgeTitle: 'Aktuelles Abzeichen',
    nextRewardTitle: 'Naechste Belohnung',
    progressPercent: 'Fortschritt',
    backToSettings: 'Zurueck zu Einstellungen',
    campusExplorer: 'Campus Entdecker',
    advancedBadge: 'Fortgeschritten Abzeichen',
    explorerReward: 'Entdecker Abzeichen',
    none: 'Keine',
    completeLibrary: 'Schliesse die Bibliothek Aufgabe ab',
    rewards: 'Belohnungen',
    rewardProgress: 'Belohnungsfortschritt',
    nextRewardProgress: 'Fortschritt zur naechsten Belohnung',
    rewardAvailable: 'Belohnung verfuegbar',
    pointsNeeded: 'Punkte fehlen',
    locked: 'Gesperrt',
    unlocked: 'Freigeschaltet',
    coffeeDiscount: 'Kaffee Rabatt',
    freeMensaLunch: 'Kostenloses Mensaessen',
    championReward: 'Uniquests Champion Belohnung',
    backToMenu: 'Zurueck zum Menu'
  }
};

const menuItems = [
  ['My Uniquests', screens.MY],
  ['Campus Map', screens.MAP],
  ['Leaderboard', screens.LEADERBOARD],
  ['Rewards', screens.REWARDS],
  ['How It Works', screens.HOW],
  ['Settings', screens.SETTINGS]
];

const rewardRules = [
  { points: 50, key: 'coffeeDiscount' },
  { points: 100, key: 'freeMensaLunch' },
  { points: 200, key: 'championReward' }
];

const challenges = [
  {
    id: 'Library',
    target: 'Library Entrance',
    mapVariant: 'library',
    huntMessage: 'Target not in the area',
    huntHint: 'Follow path to find the location',
    question: 'When did NOI Techpark officially open?',
    options: ['2012', '2015', '2017', '2020'],
    correctAnswer: '2017',
    feedback: "NOI Techpark officially opened in 2017. It is one of Bolzano's key innovation hubs."
  },
  {
    id: 'Mensa',
    target: 'Mensa',
    mapVariant: 'mensa',
    huntMessage: 'Follow path to reach the Mensa',
    huntHint: 'Your next campus stop is the student dining area.',
    question: 'Which faculty is mainly connected to this area?',
    options: ['Engineering', 'Medicine', 'Law', 'Architecture'],
    correctAnswer: 'Engineering',
    feedback: 'This area is mainly connected to Engineering and student campus life.'
  }
];

function getActiveChallenge(completedChallenges) {
  return challenges.find((challenge) => !completedChallenges.includes(challenge.id)) || null;
}

function getRewardStatus(points, t) {
  const nextReward = rewardRules.find((reward) => points < reward.points) || rewardRules[rewardRules.length - 1];
  const allRewardsUnlocked = points >= rewardRules[rewardRules.length - 1].points;
  const previousThreshold = rewardRules
    .filter((reward) => reward.points <= points)
    .reduce((highest, reward) => Math.max(highest, reward.points), 0);
  const range = Math.max(nextReward.points - previousThreshold, 1);
  const progress = allRewardsUnlocked ? 100 : Math.min(100, Math.round(((points - previousThreshold) / range) * 100));

  return {
    nextReward,
    nextRewardName: t[nextReward.key],
    pointsNeeded: Math.max(nextReward.points - points, 0),
    progress
  };
}

function StatusBar() {
  return (
    <div className="status-bar" aria-hidden="true">
      <span>12:22</span>
      <span className="phone-icons">▮▮  Wi-Fi  ▰</span>
    </div>
  );
}

function HomeIcon({ onClick }) {
  return (
    <button className="icon-button home-button" onClick={onClick} aria-label="Go home">
      <span className="home-roof" />
      <span className="home-body" />
    </button>
  );
}

function BackButton({ onClick }) {
  return (
    <button className="back-button" onClick={onClick} aria-label="Go back">
      <span />
    </button>
  );
}

function Hamburger({ onClick }) {
  return (
    <button className="hamburger" onClick={onClick} aria-label="Open menu">
      <span />
      <span />
      <span />
    </button>
  );
}

function BottomBar() {
  return <div className="bottom-bar" aria-hidden="true" />;
}

function TelescopeIcon() {
  return <span className="telescope-icon" aria-hidden="true"><i /></span>;
}

function ScreenShell({ children, className = '' }) {
  return (
    <main className={`phone ${className}`}>
      <StatusBar />
      <div className="screen-content">
        {children}
      </div>
      <BottomBar />
    </main>
  );
}

function MiniMap({ compact = false, circle = false, campus = false, variant = 'library' }) {
  return (
    <div className={`mini-map map-${variant} ${compact ? 'compact' : ''} ${circle ? 'circle' : ''} ${campus ? 'campus' : ''}`}>
      <div className="road r1" />
      <div className="road r2" />
      <div className="road r3" />
      <div className="road r4" />
      <div className="road r5" />
      <div className="route" />
      <div className="pin pin-start" />
      <div className="pin pin-end" />
      <div className="destination-pulse" />
    </div>
  );
}

function CampusPlan() {
  return (
    <div className="campus-plan" aria-label="Campus map placeholder">
      {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'K'].map((label) => (
        <div key={label} className={`building building-${label.toLowerCase()}`}>{label}</div>
      ))}
      <span className="map-dot d1" />
      <span className="map-dot d2" />
      <span className="map-dot d3" />
      <span className="map-dot d4" />
      <span className="map-line l1" />
      <span className="map-line l2" />
      <span className="map-line l3" />
      <div className="legend">
        <span><b /> Main Entrance</span>
        <span><b className="open" /> Entrances</span>
      </div>
    </div>
  );
}

function MenuOverlay({ open, onClose, navigate, t }) {
  if (!open) return null;

  const labels = {
    [screens.MY]: t.myUniquests,
    [screens.MAP]: t.campusMap,
    [screens.LEADERBOARD]: t.leaderboard,
    [screens.REWARDS]: t.rewards,
    [screens.HOW]: t.howItWorks,
    [screens.SETTINGS]: t.settings
  };

  return (
    <div className="menu-layer" onClick={onClose}>
      <nav className="side-menu" onClick={(event) => event.stopPropagation()}>
        {menuItems.map(([label, screen]) => (
          <button
            key={screen}
            onClick={() => {
              navigate(screen);
              onClose();
            }}
          >
            <span className="menu-star">☆</span>
            {labels[screen] || label}
            <span className="menu-chevron">›</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

function HomeScreen({ navigate, openMenu, t, username, loginPrompt, onStartHunt, onLogOut }) {
  return (
    <ScreenShell>
      <div className="top-actions">
        <Hamburger onClick={openMenu} />
        <HomeIcon onClick={() => navigate(screens.HOME)} />
      </div>
      <section className="home-content">
        <h1>Uniquests</h1>
        <p className="slogan">{t.homeSlogan}</p>
        <p className="reward-line">{t.homeRewardLine}</p>
        <MiniMap circle />
        <button className="primary wide focus-ring" onClick={onStartHunt}>{t.startHunt}</button>
        {username ? (
          <button className="secondary wide logout-home" onClick={onLogOut}>{t.logOut}</button>
        ) : (
          <>
            <div className={`auth-actions ${loginPrompt ? 'needs-login' : ''}`}>
              <button className="secondary" onClick={() => navigate(screens.SIGNUP)}>{t.signUp}</button>
              <button className="secondary" onClick={() => navigate(screens.LOGIN)}>{t.logIn}</button>
            </div>
            {loginPrompt && <p className="login-required">{t.loginRequired}</p>}
          </>
        )}
      </section>
    </ScreenShell>
  );
}

function AuthScreen({ mode, navigate, setUsername, clearLoginPrompt, t }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const isSignUp = mode === 'signup';

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    setUsername(form.username.trim() || 'Tommaso');
    clearLoginPrompt();
    navigate(screens.HOME);
  };

  return (
    <ScreenShell>
      <BackButton onClick={() => navigate(screens.HOME)} />
      <section className="detail auth-screen">
        <h1>{isSignUp ? t.signUp : t.logIn}</h1>
        <form className="auth-form" onSubmit={submit}>
          <label>
            <span>{t.username}</span>
            <input
              value={form.username}
              onChange={(event) => updateField('username', event.target.value)}
              autoComplete="username"
            />
          </label>
          <label>
            <span>{t.password}</span>
            <input
              type="password"
              value={form.password}
              onChange={(event) => updateField('password', event.target.value)}
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
            />
          </label>
          <button className="primary wide" type="submit">{isSignUp ? t.createAccount : t.enterDemo}</button>
        </form>
      </section>
    </ScreenShell>
  );
}

function HuntScreen({ navigate, t, activeChallenge }) {
  return (
    <ScreenShell className="hunt-screen">
      <MiniMap variant={activeChallenge.mapVariant} />
      <div className="hunt-pill">
        <span className="location-dot" />
        <strong>{t.checkingLocation}</strong>
        <HomeIcon onClick={() => navigate(screens.HOME)} />
      </div>
      <section className="target-card">
        <div className="target-title">
          <span className="location-dot" />
          <strong>Target: {activeChallenge.target}</strong>
        </div>
        <h2>{activeChallenge.huntMessage}</h2>
        <p>{activeChallenge.huntHint}</p>
        <button className="primary wide" onClick={() => navigate(screens.UNLOCKED)}>{t.checkLocation}</button>
      </section>
    </ScreenShell>
  );
}

function ChallengeUnlocked({ navigate, t, activeChallenge }) {
  return (
    <ScreenShell>
      <section className="center-page unlocked">
        <Confetti />
        <h1>{t.challengeUnlocked}</h1>
        <p>{t.reached}</p>
        <h2>{activeChallenge.target}</h2>
        <MiniMap compact variant={activeChallenge.mapVariant} />
        <button className="primary wide" onClick={() => navigate(screens.QUIZ)}>{t.startQuiz}</button>
      </section>
    </ScreenShell>
  );
}

function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
    </div>
  );
}

function QuizScreen({ navigate, t, activeChallenge }) {
  const [answer, setAnswer] = useState('');
  const options = activeChallenge.options;

  return (
    <ScreenShell>
      <div className="corner-home">
        <HomeIcon onClick={() => navigate(screens.HOME)} />
      </div>
      <section className="quiz">
        <h1>{activeChallenge.question}</h1>
        <div className="options">
          {options.map((option) => (
            <label key={option} className="radio-row">
              <input
                type="radio"
                name={`${activeChallenge.id}-quiz`}
                checked={answer === option}
                onChange={() => setAnswer(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <button
          className="primary wide"
          onClick={() => navigate(answer === activeChallenge.correctAnswer ? screens.FEEDBACK : screens.INCORRECT)}
        >
          {t.submitAnswer}
        </button>
      </section>
    </ScreenShell>
  );
}

function IncorrectScreen({ navigate, t }) {
  return (
    <ScreenShell>
      <section className="center-page incorrect-screen">
        <h1>{t.incorrect}</h1>
        <button className="primary wide" onClick={() => navigate(screens.QUIZ)}>{t.tryAgain}</button>
      </section>
    </ScreenShell>
  );
}

function LockedChallengeScreen({ navigate, t }) {
  return (
    <ScreenShell>
      <section className="center-page locked-screen">
        <div className="locked-icon">NOI</div>
        <h1>{t.nextChallengeLocked}</h1>
        <p>{t.noiUnlocks}</p>
        <button className="primary wide" onClick={() => navigate(screens.HOME)}>{t.backToHome}</button>
      </section>
    </ScreenShell>
  );
}

function FeedbackScreen({ navigate, t, activeChallenge }) {
  return (
    <ScreenShell>
      <section className="feedback">
        <h1><span className="check-icon" /> {t.correct}</h1>
        <div className="info-card">
          <MiniMap compact variant={activeChallenge.mapVariant} />
          <p>{activeChallenge.feedback}</p>
        </div>
        <button className="primary wide" onClick={() => navigate(screens.POINTS)}>{t.continue}</button>
      </section>
    </ScreenShell>
  );
}

function PointsScreen({ navigate, completeChallenge, activeChallenge, shouldUnlockBadge, t }) {
  return (
    <ScreenShell>
      <section className="center-page points">
        <h1>{t.pointsEarned}</h1>
        <p>You completed {activeChallenge.target} Challenge!</p>
        <p>{t.scoreUpdated}</p>
        <button
          className="primary wide"
          onClick={() => {
            if (completeChallenge(activeChallenge.id)) {
              navigate(shouldUnlockBadge ? screens.BADGE : screens.MOTIVATION);
            }
          }}
        >
          {t.continue}
        </button>
      </section>
    </ScreenShell>
  );
}

function BadgeScreen({ navigate, unlockBadge, activeChallenge, t }) {
  return (
    <ScreenShell>
      <section className="center-page badge-screen">
        <div className="badge-heading">
          <span className="award-outline" />
          <h1>{t.badgeUnlocked}</h1>
        </div>
        <div className="gold-badge"><TelescopeIcon /></div>
        <h2>{t.explorerBadge}</h2>
        <p>{activeChallenge.id} completed</p>
        <p>Keep exploring to unlock more achievements!</p>
        <button
          className="primary wide"
          onClick={() => {
            unlockBadge();
            navigate(screens.PROGRESS);
          }}
        >
          {t.continue}
        </button>
      </section>
    </ScreenShell>
  );
}

function MotivationScreen({ navigate, t }) {
  return (
    <ScreenShell>
      <section className="center-page motivation-screen">
        <div className="gold-badge"><TelescopeIcon /></div>
        <h1>{t.greatProgress}</h1>
        <p>{t.stillExplorer}</p>
        <p>{t.keepExploringBadge}</p>
        <button className="primary wide" onClick={() => navigate(screens.PROGRESS)}>{t.continue}</button>
      </section>
    </ScreenShell>
  );
}

function ProgressScreen({ navigate, openMenu, onContinueHunt, gameState, t }) {
  const completedCount = gameState.completedChallenges.length;
  const progressPercent = `${(completedCount / 3) * 100}%`;

  return (
    <ScreenShell>
      <div className="top-actions progress-menu">
        <Hamburger onClick={openMenu} />
      </div>
      <section className="progress">
        <h1>{t.progress}</h1>
        <div className="locations">
          <ProgressRow done={gameState.completedChallenges.includes('Library')} label="Library" />
          <ProgressRow done={gameState.completedChallenges.includes('Mensa')} label="Mensa" />
          <ProgressRow label="NOI" status="Locked" />
        </div>
        <p>{t.completed} {completedCount}/3<br />{t.challenges}</p>
        <div className="progress-track"><span style={{ width: progressPercent }} /></div>
        <div className="divider" />
        <p>{t.totalPoints}:<br /><strong>{gameState.points}</strong></p>
        <button className="primary wide" onClick={onContinueHunt}>{t.backToHunt}</button>
      </section>
    </ScreenShell>
  );
}

function ProgressRow({ done = false, label, status = '' }) {
  return (
    <div className="progress-row">
      <span className={`circle-check ${done ? 'done' : ''}`} />
      <strong>{label}</strong>
      {status && <small>{status}</small>}
    </div>
  );
}

function MyUniquests({ navigate, gameState, t, username, onContinueExploring }) {
  const hasBadge = gameState.badgeUnlocked;
  const rewardStatus = getRewardStatus(gameState.points, t);

  return (
    <ScreenShell>
      <BackButton onClick={onContinueExploring} />
      <section className="detail my-screen">
        <h1>{t.myUniquests}</h1>
        {username && <p className="account-name">{username}</p>}
        <StatRow label={t.totalPoints} value={<span className="coin">{gameState.points}</span>} />
        <StatRow
          label={t.currentBadge}
          value={hasBadge ? (
            <>
              <span className="small-badge"><TelescopeIcon /></span>
              <strong>{t.explorerBadge}</strong>
            </>
          ) : (
            <>
              <span className="small-badge locked">0</span>
              <strong>{t.noBadge}</strong>
            </>
          )}
        />
        <StatRow
          label={t.nextReward}
          value={rewardStatus.pointsNeeded === 0 ? (
            <>
              <span className="small-badge trophy"><TelescopeIcon /></span>
              <strong>{rewardStatus.nextRewardName}</strong>
              <small>{t.rewardAvailable}</small>
            </>
          ) : (
            <>
              <span className="small-badge locked">0</span>
              <strong>{rewardStatus.nextRewardName}</strong>
              <small>{rewardStatus.pointsNeeded} {t.pointsNeeded}</small>
            </>
          )}
        />
        <div className="completed-list">
          <h2>{t.completedChallenges}</h2>
          {gameState.completedChallenges.length > 0 ? (
            gameState.completedChallenges.map((challenge) => <span key={challenge}>{challenge}</span>)
          ) : (
            <span>{t.noChallenges}</span>
          )}
        </div>
        <button className="primary wide" onClick={onContinueExploring}>{t.continueExploring}</button>
      </section>
    </ScreenShell>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="stat-row">
      <h2>{label}</h2>
      <div className="stat-value">{value}</div>
    </div>
  );
}

function CampusMap({ navigate, gameState, activeChallenge, onStartNavigation, t }) {
  return (
    <ScreenShell>
      <BackButton onClick={onStartNavigation} />
      <section className="detail campus-screen">
        <h1>{t.campusMap}</h1>
        <CampusPlan />
        <div className="map-summary">
          <strong>Next destination: {activeChallenge ? activeChallenge.target : upcomingChallenge.target}</strong>
          <span>{gameState.completedChallenges.length}/3 {t.locationsCompleted}</span>
        </div>
        <button className="primary wide" onClick={onStartNavigation}>{t.startNavigation}</button>
      </section>
    </ScreenShell>
  );
}

function Leaderboard({ navigate, gameState, t, username, onBackToHunt }) {
  const playerName = username || 'Guest';
  const rows = [
    ['Livia', 354],
    ['Lucas', 299],
    ['Anna', 234],
    ['John', 189],
    ['Angela', 176],
    ['Maria', 120],
    [playerName, gameState.points]
  ].sort((a, b) => b[1] - a[1]);

  return (
    <ScreenShell>
      <BackButton onClick={onBackToHunt} />
      <section className="detail leaderboard">
        <h1>{t.leaderboard}</h1>
        <div className="leader-head">
          <span>{t.rank}</span>
          <span>{t.user}</span>
          <span>{t.points}</span>
        </div>
        {rows.map(([name, points], index) => (
          <div key={name} className={`leader-row ${name === playerName ? 'active' : ''}`}>
            <span className="rank">{index + 1}</span>
            <strong>{name}</strong>
            <strong>{points}</strong>
          </div>
        ))}
        <button className="primary wide" onClick={onBackToHunt}>{t.backToHunt}</button>
      </section>
    </ScreenShell>
  );
}

function RewardsScreen({ navigate, gameState, t }) {
  const rewardStatus = getRewardStatus(gameState.points, t);

  return (
    <ScreenShell>
      <BackButton onClick={() => navigate(screens.HOME)} />
      <section className="detail rewards-screen">
        <h1>{t.rewards}</h1>
        <div className="reward-summary">
          <span>{t.totalPoints}</span>
          <strong>{gameState.points}</strong>
        </div>
        <div className="reward-next">
          <div>
            <span>{t.nextReward}</span>
            <strong>{rewardStatus.nextRewardName}</strong>
          </div>
          <p>
            {rewardStatus.pointsNeeded === 0
              ? t.rewardAvailable
              : `${rewardStatus.pointsNeeded} ${t.pointsNeeded}`}
          </p>
          <div className="reward-progress">
            <span style={{ width: `${rewardStatus.progress}%` }} />
          </div>
        </div>
        <div className="reward-list">
          {rewardRules.map((reward) => {
            const unlocked = gameState.points >= reward.points;

            return (
              <article className={`reward-card ${unlocked ? 'unlocked' : ''}`} key={reward.key}>
                <div className="reward-accent"><TelescopeIcon /></div>
                <div>
                  <h2>{t[reward.key]}</h2>
                  <p>{reward.points} {t.points}</p>
                  <strong>
                    {unlocked ? t.rewardAvailable : `${reward.points - gameState.points} ${t.pointsNeeded}`}
                  </strong>
                </div>
                <span className="reward-state">{unlocked ? t.unlocked : t.locked}</span>
              </article>
            );
          })}
        </div>
        <button className="primary wide" onClick={() => navigate(screens.HOME)}>{t.backToHome}</button>
      </section>
    </ScreenShell>
  );
}

function HowItWorks({ navigate, t }) {
  const steps = [
    ['Explore Campus', 'Visit different locations around campus to discover new places'],
    ['Unlock Challenges', 'Check in at locations to unlock fun challenges'],
    ['Complete Quizzes', 'Answer questions correctly to earn points'],
    ['Earn Points & Badges', 'Collect points and unlock badges as you progress'],
    ['Track Your Progress', 'See your achievements and climb the leaderboard']
  ];

  return (
    <ScreenShell>
      <BackButton onClick={() => navigate(screens.HOME)} />
      <section className="detail how">
        <h1>{t.howItWorks}</h1>
        {steps.map(([title, text], index) => (
          <div className="how-row" key={title}>
            <span className="how-icon">{index + 1}</span>
            <div>
              <h2>{index + 1}. {title}</h2>
              <p>{text}</p>
            </div>
          </div>
        ))}
        <div className="help">
          <h2>{t.needHelp}</h2>
          <span>Contact Support</span>
          <span>FAQ</span>
          <span>Help Center</span>
        </div>
        <button className="primary wide" onClick={() => navigate(screens.HOME)}>{t.backToHome}</button>
      </section>
    </ScreenShell>
  );
}

function StudentProfile({ navigate, gameState, t, username }) {
  const completedCount = gameState.completedChallenges.length;
  const progressPercent = Math.round((completedCount / 3) * 100);
  const rewardStatus = getRewardStatus(gameState.points, t);
  const displayName = username || 'Tommaso';

  return (
    <ScreenShell>
      <BackButton onClick={() => navigate(screens.SETTINGS)} />
      <section className="detail profile-screen">
        <h1>{t.studentProfile}</h1>
        <div className="profile-card">
          <div className="profile-avatar">{displayName.charAt(0).toUpperCase()}</div>
          <div>
            <h2>{displayName}</h2>
            <p>{t.campusExplorer}</p>
          </div>
        </div>
        <div className="profile-list">
          <ProfileRow label={t.name} value={displayName} />
          <ProfileRow label={t.totalPoints} value={gameState.points} />
          <ProfileRow label={t.currentBadgeTitle} value={gameState.badgeUnlocked ? t.explorerBadge : t.noBadge} />
          <ProfileRow
            label={t.completedChallenges}
            value={gameState.completedChallenges.length ? gameState.completedChallenges.join(', ') : t.none}
          />
          <ProfileRow label={t.nextRewardTitle} value={rewardStatus.nextRewardName} />
          <ProfileRow
            label={t.nextRewardProgress}
            value={rewardStatus.pointsNeeded === 0 ? t.rewardAvailable : `${rewardStatus.pointsNeeded} ${t.pointsNeeded}`}
          />
          <ProfileRow label={t.progressPercent} value={`${progressPercent}%`} />
        </div>
        <button className="primary wide" onClick={() => navigate(screens.SETTINGS)}>{t.backToSettings}</button>
      </section>
    </ScreenShell>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="profile-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Settings({ navigate, settings, updateSettings, onBackToHunt, t }) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const toggle = (key) => updateSettings({ [key]: !settings[key] });

  return (
    <ScreenShell>
      <BackButton onClick={onBackToHunt} />
      <section className="detail settings">
        <h1>{t.settings}</h1>
        <Toggle label={t.notifications} value={settings.notifications} onChange={() => toggle('notifications')} />
        <Toggle label={t.sound} value={settings.sound} onChange={() => toggle('sound')} />
        <Toggle label={t.darkMode} value={settings.darkMode} onChange={() => toggle('darkMode')} />
        <button className="settings-row" onClick={() => setLanguageOpen(true)}>
          <span>{t.language}</span>
          <strong>{settings.language}</strong>
        </button>
        <button className="settings-row" onClick={() => navigate(screens.PROFILE)}>
          <span>{t.studentProfile}</span>
          <b>→</b>
        </button>
        <button className="primary wide" onClick={onBackToHunt}>{t.saveChanges}</button>
      </section>
      {languageOpen && (
        <div className="language-modal" role="dialog" aria-label={t.chooseLanguage}>
          <div className="language-panel">
            <h2>{t.language}</h2>
            {['English', 'Italian', 'German'].map((language) => (
              <button
                key={language}
                className={settings.language === language ? 'selected' : ''}
                onClick={() => {
                  updateSettings({ language });
                  setLanguageOpen(false);
                }}
              >
                {language}
              </button>
            ))}
            <button className="secondary wide" onClick={() => setLanguageOpen(false)}>{t.cancel}</button>
          </div>
        </div>
      )}
    </ScreenShell>
  );
}

function Toggle({ label, value, onChange }) {
  return (
    <button className="toggle-row" onClick={onChange} aria-pressed={value}>
      <span>{label}</span>
      <span className={`switch ${value ? 'on' : ''}`}><i /></span>
    </button>
  );
}

function LogoutModal({ onCancel, onConfirm, t }) {
  return (
    <div className="language-modal logout-modal" role="dialog" aria-label={t.logOut}>
      <div className="language-panel logout-panel">
        <h2>{t.logoutConfirm}</h2>
        <div className="modal-actions">
          <button className="secondary" onClick={onCancel}>{t.cancel}</button>
          <button className="primary" onClick={onConfirm}>{t.yesLogOut}</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(screens.HOME);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [loginPrompt, setLoginPrompt] = useState(false);
  const [lastCompletedChallengeId, setLastCompletedChallengeId] = useState('');
  const [gameState, setGameState] = useState({
    points: 0,
    badgeUnlocked: false,
    completedChallenges: []
  });
  const [settings, setSettings] = useState({
    notifications: true,
    sound: true,
    darkMode: false,
    language: 'English'
  });
  const t = translations[settings.language] || translations.English;
  const activeChallenge = getActiveChallenge(gameState.completedChallenges);

  const navigate = (screen) => setCurrentScreen(screen);
  const requireLogin = () => {
    setLoginPrompt(true);
    setMenuOpen(false);
    setCurrentScreen(screens.HOME);
  };
  const continueHunt = () => {
    if (!username) {
      requireLogin();
      return;
    }

    setLoginPrompt(false);
    setCurrentScreen(activeChallenge ? screens.HUNT : screens.LOCKED);
  };
  const returnToHuntOrHome = () => {
    if (!username) {
      requireLogin();
      return;
    }

    setLoginPrompt(false);
    setCurrentScreen(activeChallenge ? screens.HUNT : screens.HOME);
  };
  const resetGameState = () => {
    setGameState({
      points: 0,
      badgeUnlocked: false,
      completedChallenges: []
    });
    setLastCompletedChallengeId('');
    setLoginPrompt(false);
  };
  const confirmLogout = () => {
    setUsername('');
    resetGameState();
    setLogoutOpen(false);
    setMenuOpen(false);
    setCurrentScreen(screens.HOME);
  };
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const updateSettings = (updates) => setSettings((current) => ({ ...current, ...updates }));
  const completeChallenge = (challengeId) => {
    if (!username || !challenges.some((challenge) => challenge.id === challengeId)) {
      requireLogin();
      return false;
    }

    setLastCompletedChallengeId(challengeId);
    setGameState((current) => {
      if (current.completedChallenges.includes(challengeId)) {
        return current;
      }

      const completedChallenges = [...current.completedChallenges, challengeId];

      return {
        ...current,
        points: completedChallenges.length * 10,
        completedChallenges
      };
    });

    return true;
  };
  const unlockBadge = () => {
    setGameState((current) => ({
      ...current,
      badgeUnlocked: true
    }));
  };
  const completedChallenge = challenges.find((challenge) => challenge.id === lastCompletedChallengeId) || activeChallenge;

  const renderScreen = () => {
    switch (currentScreen) {
      case screens.HUNT:
        return activeChallenge
          ? <HuntScreen navigate={navigate} t={t} activeChallenge={activeChallenge} />
          : <LockedChallengeScreen navigate={navigate} t={t} />;
      case screens.LOCKED:
        return <LockedChallengeScreen navigate={navigate} t={t} />;
      case screens.UNLOCKED:
        return activeChallenge
          ? <ChallengeUnlocked navigate={navigate} t={t} activeChallenge={activeChallenge} />
          : <LockedChallengeScreen navigate={navigate} t={t} />;
      case screens.QUIZ:
        return activeChallenge
          ? <QuizScreen navigate={navigate} t={t} activeChallenge={activeChallenge} />
          : <LockedChallengeScreen navigate={navigate} t={t} />;
      case screens.INCORRECT:
        return <IncorrectScreen navigate={navigate} t={t} />;
      case screens.FEEDBACK:
        return activeChallenge
          ? <FeedbackScreen navigate={navigate} t={t} activeChallenge={activeChallenge} />
          : <LockedChallengeScreen navigate={navigate} t={t} />;
      case screens.POINTS:
        return activeChallenge
          ? <PointsScreen navigate={navigate} completeChallenge={completeChallenge} activeChallenge={activeChallenge} shouldUnlockBadge={!gameState.badgeUnlocked} t={t} />
          : <LockedChallengeScreen navigate={navigate} t={t} />;
      case screens.BADGE:
        return <BadgeScreen navigate={navigate} unlockBadge={unlockBadge} activeChallenge={completedChallenge} t={t} />;
      case screens.MOTIVATION:
        return <MotivationScreen navigate={navigate} t={t} />;
      case screens.PROGRESS:
        return <ProgressScreen navigate={navigate} openMenu={openMenu} onContinueHunt={continueHunt} gameState={gameState} t={t} />;
      case screens.MY:
        return <MyUniquests navigate={navigate} gameState={gameState} t={t} username={username} onContinueExploring={returnToHuntOrHome} />;
      case screens.MAP:
        return <CampusMap navigate={navigate} gameState={gameState} activeChallenge={activeChallenge} onStartNavigation={returnToHuntOrHome} t={t} />;
      case screens.LEADERBOARD:
        return <Leaderboard navigate={navigate} gameState={gameState} t={t} username={username} onBackToHunt={returnToHuntOrHome} />;
      case screens.REWARDS:
        return <RewardsScreen navigate={navigate} gameState={gameState} t={t} />;
      case screens.HOW:
        return <HowItWorks navigate={navigate} t={t} />;
      case screens.SETTINGS:
        return <Settings navigate={navigate} settings={settings} updateSettings={updateSettings} onBackToHunt={returnToHuntOrHome} t={t} />;
      case screens.PROFILE:
        return <StudentProfile navigate={navigate} gameState={gameState} t={t} username={username} />;
      case screens.SIGNUP:
        return <AuthScreen mode="signup" navigate={navigate} setUsername={setUsername} clearLoginPrompt={() => setLoginPrompt(false)} t={t} />;
      case screens.LOGIN:
        return <AuthScreen mode="login" navigate={navigate} setUsername={setUsername} clearLoginPrompt={() => setLoginPrompt(false)} t={t} />;
      default:
        return (
          <HomeScreen
            navigate={navigate}
            openMenu={openMenu}
            t={t}
            username={username}
            loginPrompt={loginPrompt}
            onStartHunt={continueHunt}
            onLogOut={() => setLogoutOpen(true)}
          />
        );
    }
  };

  return (
    <div className={settings.darkMode ? 'app-shell dark-mode' : 'app-shell'}>
      {renderScreen()}
      <MenuOverlay open={menuOpen} onClose={closeMenu} navigate={navigate} t={t} />
      {logoutOpen && <LogoutModal onCancel={() => setLogoutOpen(false)} onConfirm={confirmLogout} t={t} />}
    </div>
  );
}
