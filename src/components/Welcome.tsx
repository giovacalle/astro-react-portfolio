import { useSessionStorage } from '@components/hooks/useSessionStorage';
import GraphemeSplitter from 'grapheme-splitter';
import Typewriter from 'typewriter-effect';

export const Welcome = () => {
  const [animatedSession, setAnimatedSession] = useSessionStorage<boolean>(
    'badge-welcome-animated',
    false
  );

  // this is needed for the first render (where value in session storage is not yet set)
  if (animatedSession) {
    return (
      <p className="text-center text-lg text-dark-mode-gray-light">
        Hello there 👋,
        <br />
        welcome to my portfolio 🚀
      </p>
    );
  }

  return (
    <div className="text-center text-lg text-dark-mode-gray-light">
      <Typewriter
        options={{
          delay: 85,
          // @ts-expect-error dont know why but it complains about arrays of chars
          stringSplitter: (val: string) => {
            const splitter = new GraphemeSplitter();
            return splitter.splitGraphemes(val);
          }
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
              elements.cursor.remove();
            });
        }}
      />
    </div>
  );
};
