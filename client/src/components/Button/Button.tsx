type Props = {
  text: string;
};

const Button: React.FC<Props> = ({ text }) => {
  return <button className="btn-primary">{text}</button>;
};

export default Button;
