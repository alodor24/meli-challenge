type Props = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ text, onClick, disabled }) => {
  return (
    <button className="btn-primary" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
