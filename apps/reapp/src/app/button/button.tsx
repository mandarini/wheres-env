export interface ButtonProps {
  text: string;
}

export function Button(props: ButtonProps) {
  return <button>{props.text}</button>;
}

export default Button;
