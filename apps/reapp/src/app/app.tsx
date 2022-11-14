// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  console.log('Hello', process.env['KATERINA']);

  return (
    <>
      <NxWelcome title="reapp" />
      <div />
    </>
  );
}

export default App;
