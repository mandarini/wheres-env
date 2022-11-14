import Button from './button/button';

export function App() {
  console.log('Hello', process.env['KATERINA']);
  console.log('Hello 2', process.env);

  return (
    <div>
      <Button text={`${process.env['NODE_ENV']} as prop`} />;
      <Button text={`${process.env['KATERINA']} as prop`} />;
    </div>
  );
}

export default App;
