import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useSessionStorage } from '@components/hooks/useSessionStorage';

export const Welcome = () => {
  const [animatedSession, setAnimatedSession] = useSessionStorage<boolean>(
    'badge-welcome-animated',
    false
  );
  const [isAnimated, setIsAnimated] = useState(false);

  // this is needed for the first render (where value in session storage is not yet set)
  if (!isAnimated && animatedSession) {
    return (
      <p className="text-dark-mode-gray-light text-center text-lg">
        Hello there 👋,
        <br />
        welcome to my portfolio 🚀
      </p>
    );
  }

  return (
    <p className="text-dark-mode-gray-light text-center text-lg">
      <Typewriter
        options={{
          delay: 85
        }}
        onInit={typewriter => {
          typewriter
            .typeString('Hello there 👋,<br />')
            .typeString('welcome to my portfolio')
            .pauseFor(400)
            .deleteChars(3)
            .typeString('lio 🚀')
            .start()
            .callFunction(({ elements }) => {
              setAnimatedSession(true);
              setIsAnimated(true);
              elements.cursor.remove();
            });
        }}
      />
    </p>
  );
};
